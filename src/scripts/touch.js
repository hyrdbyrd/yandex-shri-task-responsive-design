import Gesture from './gesture';
(function(){
    const isTouchCapable = 'ontouchstart' in window ||
        window.DocumentTouch && document instanceof window.DocumentTouch ||
        navigator.maxTouchPoints > 0 ||
        window.navigator.msMaxTouchPoints > 0;

    window.addEventListener('DOMContentLoaded', () => {
        const eventsBlock = document.body.querySelector('.events');

        if (!eventsBlock) return;

        // Set all crosses and slides to visible state.
        // Set visibility for nav-boxes.
        eventsBlock     
            .querySelectorAll('.event')
            .forEach(eventBlock => {
                if (isTouchCapable) {
                    eventBlock
                        .querySelectorAll('.empty')
                        .forEach(e => {
                            if (!e.classList.contains('empty_slide'))
                                e.style.display = 'flex';
                        });
                }
                
                const box = eventBlock.querySelector('.box');
                
                if (box) {
                    const options = box.querySelector('.box-options');
                    
                    if (isTouchCapable) options.style.display = 'flex';

                    window.ss =
                    new Gesture(
                        box.querySelector('.box-image-wrapper'), 
                        options.querySelector('.options__brightness'),
                        options.querySelector('.options__zoom'),
                        options.querySelector('.options__rotate')
                    );
                    // window.ss.addPointer();
                }
            });
    });
})();