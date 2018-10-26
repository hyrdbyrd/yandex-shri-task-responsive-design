import Gesture from './gesture';

const isTouchCapable = 'ontouchstart' in window ||
    // window.DocumentTouch && document instanceof window.DocumentTouch ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

window.addEventListener('DOMContentLoaded', () => {
    const eventsBlock: HTMLDivElement = document.body.querySelector('.events');

    if (!eventsBlock) return;

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
                const options = box.querySelector<HTMLDivElement>('.box-options');

                if (isTouchCapable) options.style.display = 'flex';

                new Gesture(
                    box.querySelector<HTMLDivElement>('.box-image-wrapper'),
                    options.querySelector<HTMLDivElement>('.options__brightness'),
                    options.querySelector<HTMLDivElement>('.options__zoom'),
                    options.querySelector<HTMLDivElement>('.options__rotate')
                );
            }
        });
});
