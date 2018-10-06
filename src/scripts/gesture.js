export default class Gesture {
    constructor(wrapper, brightOptionBlock, zoomOptionBlock, rotateOptionBlock) {
        this.image = {
            wrapper,
            diagonalLength: 0
        };
        this.rotate = {
            element: rotateOptionBlock,
            position: { x: 0, y: 0 }
        };
        this.bright = {
            element: brightOptionBlock,
            value: 100,
            rotate: 0
        };
        this.zoom = {
            element: zoomOptionBlock,
            value: 100
        };

        wrapper.style.backgroundPosition = '0px 0px';
        wrapper.style.backgroundSize = `${this.zoom.value} ${this.zoom.value}`;

        this.startLine = null;

        this.isUsed = false;
        this.pointers = [
            // for debug
            // {x: 480, y: 480, id: -1000}
        ];

        this.zoomTo = null;

        // Bind by this
        this.onPointerDown = this.onPointerDown.bind(this);
        this.onPointerUp = this.onPointerUp.bind(this);
        this.onSingleMove = this.onSingleMove.bind(this);
        this.onMultiMove = this.onMultiMove.bind(this);
        
        this.init();
    }

    onPointerUp(event) {
        this.pointers = this.pointers.filter(pointer => pointer.id !== event.pointerId);

        document.removeEventListener('pointerup', this.onPointerUp);
        document.removeEventListener('pointermove', this.onSingleMove);
        
        const poses = this.image
            .wrapper
            .style
            .backgroundPosition
            .split(' ')
            .map(e => e.slice(0, e.length - 2));
        
        this.rotate.position = {
            x: poses[0],
            y: poses[1],
        };

        this.zoom.value = this.image.wrapper.style.backgroundSize.split(' ')[0];
        this.startLine = null;
    }

    onPointerDown(event) {
        this.pointers.push({
            x: this.isUsed ? 0 : event.clientX,
            y: this.isUsed ? 0 : event.clientY,
            id: event.pointerId
        });

        const isMultiPoint = this.pointers.length > 1;

        document[
            isMultiPoint ? 
                'removeEventListener' : 
                'addEventListener'
        ]('pointermove', this.onSingleMove);
        document[
            isMultiPoint ? 
                'addEventListener' : 
                'removeEventListener'
        ]('pointermove', this.onMultiMove);

        document.addEventListener('pointerup', this.onPointerUp);
    }

    slideTo(nextX, nextY) {
        const { wrapper } = this.image;

        wrapper.style.backgroundPosition = wrapper.style.backgroundPosition
            .split(' ')
            .map((e, i) => {
                let pos;
                if (i === 0) {
                    const maxminX = 3600;   
                    
                    pos = +this.rotate.position.x;
                    pos += +(nextX - this.pointers[0].x);

                    if (pos > maxminX) pos = maxminX;
                    if (pos < -maxminX) pos = -maxminX;
                    
                    this.rotate.element.innerText = `Поворот ${pos | 0}°`;
                    
                    return `${pos}px`;
                } else if (i === 1) {
                    const maxY = 100;
                    
                    pos = +this.rotate.position.y;
                    pos += -1 * +(nextY - this.pointers[0].y) / 5;

                    if (pos < 0) pos = 0;
                    if (pos > maxY) pos = 100;
                    
                    return `${pos}%`;
                } 
                return '';
            })
            .join(' ');
    }

    addPointer() {
        this.pointers.push({ id: -1000, x: 480, y: 480 });
    }

    multiGesture(nextPointer, idx) {
        const { pointers } = this;
        // Another index
        let a, b;
        
        // Zoom part
        a = Math.abs(pointers[idx].x - nextPointer.clientX);
        b = Math.abs(pointers[idx].y - nextPointer.clientY);
        const diagonalLength = Math.sqrt(a ** 2 + b ** 2);

        if (this.startLine === null) {
            this.startLine = {
                r: diagonalLength,
                x: nextPointer.clientX,
                y: nextPointer.clientY
            };
        }

        if (this.image.diagonalLength === 0) {
            this.zoom.value = 100;
            this.image.diagonalLength = diagonalLength;
        } else {
            this.image.diagonalLength = diagonalLength;
            let zoom = +this.image.diagonalLength;
            zoom += this.zoom.value / 10;
            if (zoom < 100) {
                zoom = 100;
            }
            if (zoom > 350) {
                zoom = 350;
            }
            this.zoom.value = zoom;
        }

        const { value: z } = this.zoom;
        this.zoom.element.innerText = `Приближение: ${(z | 0)}%`;
        this.image.wrapper.style.backgroundSize = `${z}% ${z}%`;

        // Bright part
        if (this.startLine === null) return;

        let bright = (
            this.bright.rotate + 
            Math.atan(event.clientY / event.clientX) * 180 / Math.PI
        ) / 1.5;

        const minBright = 50;
        const maxBright = 150;

        if (bright < minBright) bright = minBright;
        if (bright > maxBright) bright = maxBright;

        this.bright.element.innerText = `Яркость: ${bright | 0}%`;        
        this.image.wrapper.style.filter = `brightness(${bright}%)`;
        this.bright.rotate = bright;
    }

    onMultiMove(event) {
        const { pointers } = this;
        let idx = pointers.findIndex(obj => obj.id === event.pointerId);

        this.multiGesture(event, idx === 0 ? 1 : 0);
    }

    onSingleMove(event) {
        this.slideTo(event.clientX, event.clientY);
    }

    init() {
        const { wrapper } = this.image;
        wrapper.addEventListener('pointerdown', this.onPointerDown);
    }
}