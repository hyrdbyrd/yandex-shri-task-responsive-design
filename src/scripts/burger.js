(function(){
    window.addEventListener('DOMContentLoaded', () => {
        const body = document.body;
        const main = body.querySelector('.main');
        // Get needs navigation
        const headerNav = main.querySelector('.navigation_header');
        main.querySelector('.burger').addEventListener('click', () => {
            headerNav.classList.toggle('navigation_header_active');
            // Switch-off overflow (be-se scroll is active)
            body.classList.toggle('no-overflow');
            main.classList.toggle('no-overflow');
        });
    });
})();