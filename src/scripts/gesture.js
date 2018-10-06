export default class Gesture {
    constructor(wrapper, brightOptionBlock, zoomOptionBlock) {
        this.image = {
            wrapper,
            position: { x: 0, y: 0 },
            diagonalLength: 0
        };
        this.bright = {
            element: brightOptionBlock,
            value: brightOptionBlock.getAttribute('data-value')
        };
        this.zoom = {
            element: zoomOptionBlock,
            value: zoomOptionBlock.getAttribute('data-value')
        };

        wrapper.style.backgroundPosition = '0px 0px';
        wrapper.style.backgroundSize = `${this.zoom.value} ${this.zoom.value}`;

        this.isUsed = false;
        this.pointers = [];

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
        
        const poses = this
            .image
            .wrapper
            .style
            .backgroundPosition
            .split(' ')
            .map(e => e.slice(0, e.length - 2));
        
        this.image.position = {
            x: poses[0],
            y: poses[1]
        };
    }

    onPointerDown(event) {
        const { wrapper } = this.image;
        const { backgroundPositionX: bgX, backgroundPositionY: bgY } = wrapper;
        
        this.pointers.push({
            x: this.isUsed ? +bgX.slice(0, bgX.length) : event.clientX,
            y: this.isUsed ? +bgY.slice(0, bgY.length) : event.clientY,
            id: event.pointerId
        });

        const isMultiPoint = this.pointers.length > 1;
        if (isMultiPoint) {
            document.removeEventListener('pointermove', this.onSingleMove);
            document.addEventListener('pointermove', this.onMultiMove);
        } else {
            document.addEventListener('pointerup', this.onPointerUp);
            document.addEventListener('pointermove', this.onSingleMove);
        }
    }

    slideTo(nextX, nextY) {
        const { wrapper } = this.image;
        const wrapperMetrika = wrapper.getBoundingClientRect();
        
        let posX = nextX - this.pointers[0].x;
        let posY = nextY - this.pointers[0].y;
        
        const maxY = wrapperMetrika.height - Math.abs(wrapperMetrika.top - wrapperMetrika.bottom);
        if (posY > 0) posY = 0;
        if (posY < maxY) posY = maxY;

        wrapper.style.backgroundPosition = wrapper.style.backgroundPosition
            .split(' ')
            .map((e, i) => {
                let pos = +this.image.position[i === 0 ? 'x' : 'y'];
                pos += i === 0 ? +posX : +posY;
                return pos + 'px';
            })
            .join(' ');
    }

    multiGesture(nextPointer, idx) {
        idx = idx === 0 ? 1 : 0;  
        const { pointers } = this;
    
        const a = Math.abs(pointers[idx].x - nextPointer.clientX);
        const b = Math.abs(pointers[idx].y - nextPointer.clientY);
        const diagonalLength = Math.sqrt(a ** 2 + b ** 2);

        if (this.image.diagonalLength === 0) {
            this.zoom = '100%';
        } else {
            let zoom = (this.image.diagonalLength - diagonalLength) * 100;
            if (zoom < 100) {
                zoom = 100;
            }
            if (zoom > 350) {
                zoom = 350;
            }
            this.zoom.value = `${zoom}%`;
        }

        this.image.diagonalLength = diagonalLength;
        const { value: z } = this.zoom.value;

        this.zoom.element.style.backgroundSize = `${z}% ${z}%`;
    }

    onMultiMove(event) {
        const idx = this.pointers.findIndex(obj => obj.id === event.pointerId);
        // If not find, will be -1 value
        if (idx + 1)
            this.pointers[idx] = {
                x: event.clientX,
                y: event.clientY
            };
        
        this.multiGesture(event, idx);
    }

    onSingleMove(event) {
        this.slideTo(event.clientX, event.clientY);
    }

    init() {
        const { wrapper } = this.image;
        wrapper.addEventListener('pointerdown', this.onPointerDown);
    }
}