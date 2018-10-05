(function(){
    window.addEventListener('DOMContentLoaded', () => {
        const body = document.body;
        body
            .querySelectorAll('.event')
            .forEach(eventBlock => {
                eventBlock.addEventListener('click', function (event) {
                    switch (true) {
                    case event.target.classList.contains('cross'): 
                        this.classList.add('event_closed');
                        break;
                    case event.target.classList.contains('slide'):
                        this.classList.remove('event_closed');
                        break;
                    }

                });
            });
    });
})();