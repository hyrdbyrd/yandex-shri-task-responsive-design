window.addEventListener('DOMContentLoaded', () => {
    document.body
        .querySelectorAll('.event')
        .forEach((eventBlock) => {
            eventBlock.addEventListener('click', function(event) {
                if ((event.target as HTMLElement).classList.contains('cross')) {
                    this.classList.add('event_closed');
                } else if ((event.target as HTMLElement).classList.contains('slide')) {
                    this.classList.remove('event_closed');
                }
            });
        });
});
