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

            this.firstLine = {
                pointers,
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
        const inaccuracy = 2;
        
        const newDiagonal = this.getLine(x, y);
        if (newDiagonal >= this.firstLine.diagonal * inaccuracy) {
            this.isPinch = true;
            this.pinch(event);
            return;
        }

        const p = this.pointers.find(obj => obj.id === event.pointerId);
        const diffX = this.getLine(p.x, p.y);
        const diffY = this.getLine(p.prevX, p.prevY);

        // Get degs behind lines
        let newDegrees = Math.abs(this.getDeg(diffX, diffY)) * 180 / Math.PI;
        console.log(newDegrees);
        // If diff rotatet's more than 30 degrees
        if (newDegrees >= 46) {
            this.isRotate = true;
            this.rotateOf(event);
        }
    }

    pinch() {
        const { image } = this;
        let { x, y } = this.lines;

        const maxZoom = 350;
        const minZoom = 100;

        let newD = this.getLine(x, y) * 2.5;
        
        if (newD > maxZoom) newD = maxZoom;
        if (newD < minZoom) newD = minZoom;

        const center = this.getCenterCoords();

        const { position: p } = this.rotate;

        let yPos = (p.y + center.y) / 100;

        if (yPos < 0) yPos = 0;
        if (yPos > 100) yPos = 100;

        this.zoom.diagonal = newD;
        this.zoom.element.innerText = `Приближение: ${newD | 0}%`;

        image.style.backgroundSize = `${newD}% ${newD}%`;
        image.style.backgroundPositionY = `${yPos}%`;
    }

    rotateOf(event) {
        // Get needs pointer from array of pointers
        const p = this.pointers.find(obj => obj.id === event.pointerId);

        // Lines of prev and current coords
        const diffX = p.x - p.prevX;
        const diffY = p.y - p.prevY;

        // Get degs behind lines
        let diff = this.getDeg(diffX, diffY) * 180 / Math.PI / 50;
        diff += this.bright.deg;

        // Set minmax
        const minBright = 25;
        const maxBright = 200;

        if (diff < minBright) diff = minBright;
        if (diff > maxBright) diff = maxBright;

        this.bright.deg = diff;
        this.bright.element.innerText = `Яркость: ${diff | 0}%`;

        this.image.style.filter = `brightness(${diff}%)`;
    }

    // Return length of delta coords
    get lines() {
        const { pointers: p } = this;
        return {
            x: p[0].x - p[1].x,
            y: p[0].y - p[1].y
        };
    }

    // Get line by Pifagoar teorem's
    getLine(x, y) {
        return Math.sqrt(x ** 2 + y ** 2) / 5;
    }

    // Return Math.atan2 reverse (was cr-ed for debug)
    getDeg(x, y) {
        return Math.atan2(y, x);
    }

    // Returns coords of center behind fingers
    getCenterCoords() {
        const { pointers: p, image } = this;
        return {
            x: image.offsetLeft + Math.abs(p[0].x - p[1].x) / 2,
            y: image.offsetTop + Math.abs(p[0].y - p[1].y) / 2
        };
    }
}