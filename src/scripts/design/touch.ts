import Gesture from './gesture';

const isTouchCapable = 'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

const eventsBlock: HTMLDivElement | null = document.body.querySelector('.events');

if (eventsBlock) {
    // Set all crosses and slides to visible state.
    // Set visibility for nav-boxes.
    eventsBlock
        .querySelectorAll('.event')
        .forEach((eventBlock) => {
            if (isTouchCapable) {
                eventBlock
                    .querySelectorAll<HTMLElement>('.empty')
                    .forEach((e) => {
                        if (isTouchCapable) {
                            e.style.display = 'none';
                        } else {
                            e.style.display = 'flex';
                        }
                    });
            }

            const box = eventBlock.querySelector('.box');

            if (box) {
                const options: HTMLDivElement | null = box.querySelector<HTMLDivElement>('.box-options');

                if (isTouchCapable && options !== null)
                    options.style.display = 'flex';

                const wrapper: HTMLDivElement | null = box.querySelector('.box-image-wrapper');
                const brightness: HTMLDivElement | null = options.querySelector('.options__brightness');
                const zoom: HTMLDivElement | null = options.querySelector('.options__zoom');
                const rotate: HTMLDivElement | null = options.querySelector('.options__rotate');

                if (wrapper && brightness && zoom && rotate)
                    new Gesture(
                        wrapper,
                        brightness,
                        zoom,
                        rotate
                    );
            }
        });
}
