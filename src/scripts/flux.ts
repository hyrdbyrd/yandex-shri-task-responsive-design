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
            .then(async (data) => {
                const h = data.html;
                data.html = h.slice(h.indexOf('<div class="main">') + '<div class="main">'.length, h.indexOf('</div></html>'));

                // Set html
                main.innerHTML = await data.html;

                if (data.scripts) {
                    data.scripts.forEach((src: string) => {
                        const script = body.querySelector(`script[src="${src}"]`)
                        script && body.removeChild(script);

                        const scriptTag = document.createElement('script');
                        scriptTag.src = src;
                        scriptTag.crossOrigin = 'crossorigin';
                        body.appendChild(scriptTag);
                    });
                }

                document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((element) => {
                    element.addEventListener('click', (event) => {
                        event.preventDefault();
                        const href = element.getAttribute('href');
                        href && storage.dispatch(href);
                    });
                });

                html = data;
            });

        return await html;
    });

    storage.dispatch('/events');
});
