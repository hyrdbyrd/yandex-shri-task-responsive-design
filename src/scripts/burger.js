(function(){
    window.addEventListener('DOMContentLoaded', () => {
        const body = document.body;
        const headerNav = body.querySelector('.navigation_header');
        body.querySelector('.burger').addEventListener('click', () => {
            headerNav.classList.toggle('navigation_header_active');
            body.classList.toggle('no-overflow');
        });
    });
})();