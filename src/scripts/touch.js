(function(){
    const isTouchCapable = 'ontouchstart' in window ||
        window.DocumentTouch && document instanceof window.DocumentTouch ||
        navigator.maxTouchPoints > 0 ||
        window.navigator.msMaxTouchPoints > 0;

    if (isTouchCapable) {
        window.addEventListener('DOMContentLoaded', () => {
            // Set all crosses and slides to visible state
            document.body
                .querySelector('.events')
                .querySelectorAll('.empty')
                .forEach(empty => empty.style.display = 'flex');
        });
    }
})();