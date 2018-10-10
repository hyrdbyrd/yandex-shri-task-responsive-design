export default class Gesture {
    constructor(image, brightOptionBlock, zoomOptionBlock, rotateOptionBlock) {
        this.image = image;
        // Slides object
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

        // Set styles
        image.style.backgroundPosition = '0px 0px';
        image.style.backgroundSize = `${this.zoom.value} ${this.zoom.value}`;

        // Pointers list
        this.pointers = [
            // { x: 450, y: 450, id: -1000 }
        ];

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

        this.image.addEventListener('pointerdown', this.onPointerDown);
    }

    onPointerUp(event) {
        // Remove pointer, whose was up
        this.pointers = this.pointers
            .filter(pointer => pointer.id !== event.pointerId);

        // Remove events
        document.removeEventListener('pointermove', this.onSingleMove);
        document.removeEventListener('pointermove', this.onMultiMove);
        document.exitPointerLock();

        // Refresh checks vars
        this.firstLine = null;
        this.isPinch = false;
        this.isRotate = false;
    }

    onPointerDown(event) {
        // Add new pointer to list
        this.pointers.push({
            x: event.clientX,
            y: event.clientY,
            id: event.pointerId
        });

        this.image.requestPointerLock();

        document.addEventListener('pointermove', this.onMove);
        document.addEventListener('pointerup', this.onPointerUp);

        // If that second finger
        const isMultiPoint = this.pointers.length > 1;
        if (isMultiPoint && this.firstLine === null) {
            const { pointers } = this;

            const { x, y } = this.lines;

            const diagonal = this.zoom.diagonal + this.getLine(x, y);
            const deg = this.rotate.deg + this.getDeg(x, y);

            this.firstLine = {
                pointers,
                deg,
                diagonal
            };

            document.addEventListener('pointermove', this.onMultiMove);
            document.removeEventListener('pointermove', this.onSingleMove);
            return;
        }
        if (!isMultiPoint) {
            document.addEventListener('pointermove', this.onSingleMove);
            document.removeEventListener('pointermove', this.onMultiMove);
        }
    }
    
    onMove(event) {
        const idx = this.pointers.findIndex(obj => obj.id === event.pointerId);
        
        if (idx === -1) return;

        const p = this.pointers[idx];
        
        this.pointers[idx].prevX = p.x;
        this.pointers[idx].prevY = p.y;
        this.pointers[idx].x = event.clientX;
        this.pointers[idx].y = event.clientY;
    }

    onSingleMove(event) {
        this.slideTo(event);
    }

    slideTo(event) {
        const { image } = this;
        let { movementX: moveX, movementY: moveY } = event;

        const pointer = this.pointers.find(obj => obj.id === event.pointerId);

        if (!moveX || !moveY) {
            moveX = pointer.x - pointer.prevX;
            moveY = pointer.y - pointer.prevY;
        }

        image.style.backgroundPosition = image.style.backgroundPosition
            // Split values ${x}px and ${y}%
            .split(' ')
            // Update values
            .map((e, i) => {
                let pos;
                if (i === 0) {
                    const maxminX = 3600;

                    pos = +this.rotate.position.x;
                    pos += moveX;

                    if (pos > maxminX) pos = maxminX;
                    if (pos < -maxminX) pos = -maxminX;

                    this.rotate.element.innerText = `Поворот ${pos | 0}°`;
                    this.rotate.position.x = pos;

                    return `${pos}px`;
                } else if (i === 1) {
                    const maxY = 100;

                    pos = +this.rotate.position.y;
                    pos += -moveY;

                    if (pos < 0) pos = 0;
                    if (pos > maxY) pos = 100;

                    this.rotate.position.y = pos;
                    return `${pos}%`;
                }
                return '';
            })
            // Return css string
            .join(' ');
    }

    onMultiMove(event) {
        const { pointers } = this;
        let idx = pointers.findIndex(obj => obj.id === event.pointerId);
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

    checkGesture(event) {
        const { x, y } = this.lines;
        const inaccuracy = 1;
        
        const newDiagonal = this.getLine(x, y);
        if (
            newDiagonal >= this.firstLine.diagonal * inaccuracy || 
            newDiagonal <= this.firstLine.diagonal * inaccuracy
        ) {
            this.isPinch = true;
            this.pinch(event);
            return;
        }

        // const newDegrees = this.getDeg(a, b);
        // if (newDegrees >= this.firstLine.deg * 2) {
        //     this.isRotate = true;
        //     this.rotateOf(event);
        // }
    }

    pinch() {
        const { image } = this;
        let { x, y } = this.lines;

        const maxZoom = 350;
        const minZoom = 100;

        let newD = this.getLine(x, y) * 2.5;
        // newD *= this.getSign(Math.abs(x) > Math.abs(y) ? x : -y);
        // newD += this.zoom.diagonal;
        
        if (newD > maxZoom) newD = maxZoom;
        if (newD < minZoom) newD = minZoom;

        const center = this.getCenterCoords();

        const { position: p } = this.rotate;

        let xPos = p.x + center.x;
        let yPos = (p.y + center.y) / 100;

        if (xPos > 3600) xPos = 3600;
        else if (xPos < -3600) xPos = -3600;
        else if (yPos < 0) yPos = 0;
        else if (yPos > 100) yPos = 100;

        this.zoom.diagonal = newD;
        this.zoom.element.innerText = `Приближение: ${newD | 0}%`;
        image.style.backgroundSize = `${newD}% ${newD}%`;
        image.style.backgroundPositionX = `${xPos}px`;
        image.style.backgroundPositionY = `${yPos}%`; 

    }

    rotateOf() {}

    get lines() {
        const { pointers: p } = this;
        return {
            x: p[0].x - p[1].x,
            y: p[0].y - p[1].y
        };
    }

    getLine(a, b) {
        return Math.sqrt(a ** 2 + b ** 2) / 5;
    }

    getDeg(a, b) {
        return Math.atan2(a, b);       
    }

    getSign(val) {
        return val < 0 ? -1 : 1;
    }

    getCenterCoords() {
        const { pointers: p, image } = this;
        return {
            x: image.offsetLeft + Math.abs(p[0].x - p[1].x) / 2,
            y: image.offsetTop + Math.abs(p[0].y - p[1].y) / 2
        };
    }
}