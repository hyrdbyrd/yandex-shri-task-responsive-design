document.body
    .querySelectorAll<HTMLElement>('.event')
    .forEach((eventBlock) => {
        eventBlock.addEventListener('click', function(event) {
            const target: HTMLElement = <HTMLElement>event.target;

            if (target.classList.contains('cross')) {
                eventBlock.classList.add('event_closed');
            } else if (target.classList.contains('slide')) {
                eventBlock.classList.remove('event_closed');
            }
        });
    });
