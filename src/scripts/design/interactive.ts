(function(){
    window.addEventListener('DOMContentLoaded', () => {
        document.body
            .querySelectorAll('.event')
            .forEach(eventBlock => {
                eventBlock.addEventListener('click', function (event) {
                    if (event.target.classList.contains('cross')) {
                        this.classList.add('event_closed');
                    } if (event.target.classList.contains('slide')) {
                        this.classList.remove('event_closed');
                    }
                });
            });
    });
})();