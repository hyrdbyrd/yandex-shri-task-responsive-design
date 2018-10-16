(function(){
    const checkDiv = document.createElement('div');
    if (
        typeof checkDiv.style.webkitLineClamp !== 'undefined' &&
        typeof checkDiv.style.webkitBoxOrient !== 'undefined'
    )
        return;
        
    window.addEventListener('DOMContentLoaded', () => {
        const body = document.body;

        // Ready list of titles
        const titleList = body
            .querySelector('.events')
            .querySelectorAll('.event__title');

        function onResize() {
            titleList.forEach(title => {
                // Get full text from title
                const text = title.getAttribute('data-title');

                // Clone title node
                const clone = title.cloneNode(true);

                // Set styles, for set needs state
                clone.style.position = 'absolute';
                clone.style.visibility = 'hidden';
                clone.style.height = 'auto';
                clone.style.width = '100%';
                // For inline text
                clone.style.whiteSpace = 'pre';
                clone.innerHTML = text;

                body.appendChild(clone);
                const twolinesSize = clone.clientHeight * 2;

                // Refresh white-space to normal 
                // (for get real value of width)
                clone.style.whiteSpace = 'normal';
                clone.style.width = `${title.clientWidth}px`;

                // Start from end
                let symbol = text.length - 1;
                for (; symbol >= 0 && clone.clientHeight > twolinesSize; --symbol)
                    clone.innerHTML = `${text.substring(0, symbol)}...`;

                // Set value with dots
                title.innerHTML = clone.innerHTML;
                // Remove node
                body.removeChild(clone);
            });
        }

        // Listener
        window.addEventListener('resize', onResize);
        onResize();
    });
})();