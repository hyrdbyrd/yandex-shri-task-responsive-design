export default class Gesture {
    public image;
    protected zoom;

    protected pointers;

    protected rotate;
    protected bright;

    private firstLine = null;
    private isPinch = false;
    private isRotate = false;

    constructor(
        wrapper: HTMLDivElement,
        brightOptionBlock: HTMLDivElement,
        zoomOptionBlock: HTMLDivElement,
        rotateOptionBlock: HTMLDivElement
    ) {
        this.image = {
            wrapper
        };
        this.rotate = {
            element: rotateOptionBlock,
            position: { x: 0, y: 0 }
        };
        this.bright = {
            element: brightOptionBlock,
            deg: 0
        };
        this.zoom = {
            element: zoomOptionBlock,
            diagonal: 0
        };

        wrapper.style.backgroundPosition = '0px 0px';
        wrapper.style.backgroundSize = `${this.zoom.value} ${this.zoom.value}`;

        this.pointers = [];

        // For check gesture
        this.firstLine = null;
        this.isPinch = false;
        this.isRotate = false;

        // Bind by this
        this.onPointerDown = this.onPointerDown.bind(this);
        this.onSingleMove = this.onSingleMove.bind(this);
        this.onMultiMove = this.onMultiMove.bind(this);
        this.onPointerUp = this.onPointerUp.bind(this);
        this.onMove = this.onMove.bind(this);

        this.init();
    }

    protected init() {
        const { wrapper } = this.image;
        wrapper.addEventListener('pointerdown', this.onPointerDown);
    }

    protected onPointerUp(event) {
        this.pointers = this.pointers.filter((pointer) => pointer.id !== event.pointerId);

        document.removeEventListener('pointermove', this.onSingleMove);
        document.removeEventListener('pointermove', this.onMultiMove);

        document.exitPointerLock();

        this.zoom.value = this.image.wrapper.style.backgroundSize.split(' ')[0];
        this.firstLine = null;
        this.isPinch = false;
        this.isRotate = false;
    }

    protected onPointerDown(event) {
        this.pointers.push({
            x: event.clientX,
            y: event.clientY,
            id: event.pointerId
        });

        this.image.wrapper.requestPointerLock();

        const isMultiPoint = this.pointers.length > 1;
        if (isMultiPoint && this.firstLine === null) {
            const { pointers } = this;

            const { a, b } = this.lines;

            const diagonal = this.getLine(a, b);
            const deg = this.getDeg(a, b);

            this.firstLine = {
                pointers,
                deg,
                diagonal
            };

            this.zoom.diagonal = diagonal;
            this.bright.deg = deg;
        }

        document.addEventListener('pointermove', this.onMove);
        if (isMultiPoint) {
            document.removeEventListener('pointermove', this.onSingleMove);
            document.addEventListener('pointermove', this.onSingleMove);
        } else {
            document.addEventListener('pointermove', this.onSingleMove);
            document.removeEventListener('pointermove', this.onSingleMove);
        }

        document.addEventListener('pointerup', this.onPointerUp);
    }

    protected onMove(event) {
        const idx = this.pointers.findIndex((obj) => obj.id === event.pointerId);

        if (idx === -1) return;

        this.pointers[idx].x += event.movementX;
        this.pointers[idx].y += event.movementY;
    }

    protected onSingleMove(event) {
        this.slideTo(event);
    }

    protected slideTo(event) {
        const { wrapper } = this.image;

        wrapper.style.backgroundPosition = wrapper.style.backgroundPosition
            .split(' ')
            .map((e, i) => {
                let pos;
                if (i === 0) {
                    const maxminX = 3600;

                    pos = +this.rotate.position.x;
                    pos += event.movementX;

                    if (pos > maxminX) pos = maxminX;
                    if (pos < -maxminX) pos = -maxminX;

                    this.rotate.element.innerText = `Поворот ${pos ? pos : 0}°`;
                    this.rotate.position.x = pos;

                    return `${pos}px`;
                } else if (i === 1) {
                    const maxY = 100;

                    pos = +this.rotate.position.y;
                    pos += -event.movementY;

                    if (pos < 0) pos = 0;
                    if (pos > maxY) pos = 100;

                    this.rotate.position.y = pos;
                    return `${pos}%`;
                }
                return '';
            })
            .join(' ');
    }

    protected onMultiMove(event) {
        const { pointers } = this;
        let idx = pointers.findIndex((obj) => obj.id === event.pointerId);
        if (idx === -1) idx = 0;

        if (this.isPinch) {
            this.pinch(event);
            return;
        }

        if (this.isRotate) {
            this.rotateOf(event);
            return;
        }

        this.checkGesture(event);
    }

    protected checkGesture(event) {
        const { a, b } = this.lines;

        const newDiagonal = this.getLine(a, b);
        if (newDiagonal >= this.firstLine.diagonal * 2) {
            this.isPinch = true;
            this.pinch(event);
            return;
        }

        const newDegrees = this.getDeg(a, b);
        if (newDegrees >= this.firstLine.deg * 1.5) {
            this.isRotate = true;
            this.rotateOf(event);
        }
    }

    protected pinch(event) {
        const { movementX: a, movementY: b } = event;

        const maxZoom = 350;
        const minZoom = 100;

        let newD = this.getLine(a, b) * (a < 0 || b < 0 ? -1 : 1);
        newD += this.zoom.diagonal;

        if (newD > maxZoom) newD = maxZoom;
        if (newD < minZoom) newD = minZoom;

        this.zoom.diagonal = newD;
        this.image.wrapper.style.backgroundSize = `${newD}% ${newD}%`;
        this.zoom.element.innerText = `Приближение: ${newD ? newD : 0}%`;
    }

    protected rotateOf(event) {
        const { movementX: moveX, movementY: moveY } = event;

        const maxBright = 150;
        const minBright = 50;

        let newD = this.getDeg(moveX, moveY);
        newD += this.bright.deg;

        if (newD > maxBright) newD = maxBright;
        if (newD < minBright) newD = minBright;

        this.bright.deg = newD;
        this.bright.element = `Яркость: ${newD ? newD : 0}`;
        this.image.wrapper.style.filter = `brightness(${newD}%)`;
    }

    get lines() {
        const { pointers: p } = this;
        return {
            a: Math.abs(p[0].x - p[1].x),
            b: Math.abs(p[0].y - p[1].y)
        };
    }

    protected getLine(a, b) {
        return Math.sqrt(a ** 2 + b ** 2) / 5;
    }

    protected getDeg(a, b) {
        return Math.atan2(a, b);
    }

    protected addPointer() {
        // wrapper metrika
        const wM = this.image.wrapper.getBoundingClientRect();

        this.pointers.push({
            id: -1000,
            x: wM.x + wM.width / 2,
            y: 539 + wM.height / 2
        });
    }

    protected removePointer() {
        this.pointers.pop();
    }

}
