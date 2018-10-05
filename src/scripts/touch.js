import Gesture from './gesture';
(function(){
    const isTouchCapable = 'ontouchstart' in window ||
        window.DocumentTouch && document instanceof window.DocumentTouch ||
        navigator.maxTouchPoints > 0 ||
        window.navigator.msMaxTouchPoints > 0;

    if (isTouchCapable) {
        window.addEventListener('DOMContentLoaded', () => {
            const eventsBlock = document.body.querySelector('.events');
        
            // Set all crosses and slides to visible state.
            // Set visibility for nav-boxes.
            eventsBlock     
                .querySelectorAll('.event')
                .forEach(eventBlock => {
                    eventBlock
                        .querySelectorAll('.empty')
                        .forEach(e => e.style.display = 'flex');

                    const box = eventBlock.querySelector('.box');
                    
                    if (box) {
                        const options = box.querySelector('.box-options');
                        options.style.display = 'block';

                        new Gesture(
                            box.querySelector('.box-image-wrapper'), 
                            options.querySelector('.options__brightness'),
                            options.querySelector('.options__zoom')
                        );
                    }
                });
        });
    }
})();