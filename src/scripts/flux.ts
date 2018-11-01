import Readyx from './Readyx';

window.addEventListener('DOMContentLoaded', () => {
    // Save elements
    const body = document.body;
    const main = body.querySelector('.main');

    // Readyx storage
    const storage = new Readyx(async (prevState, href) => {
        let html;

        // Get view
        await fetch(`flux${href}`)
            .then((data) => data.json())
            .then((data) => {
                // Set html
                main.innerHTML = data.html;
                if (data.scripts) {
                    data.scripts.forEach((src: string) => {
                        const scriptTag = document.createElement('script');
                        scriptTag.src = src;

                        body.appendChild(scriptTag);
                    })
                }
                html = data;
            });

        return await html;
    });

    storage.dispatch('/events');
    document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            const href = element.getAttribute('href');
            href && storage.dispatch(href);
        });
    });

});
