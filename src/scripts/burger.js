(function(){
    window.addEventListener('DOMContentLoaded', () => {
        const body = document.body;
        // Get needs navigation
        const headerNav = body.querySelector('.navigation_header');
        body.querySelector('.burger').addEventListener('click', () => {
            headerNav.classList.toggle('navigation_header_active');
            // Switch-off overflow (be-se scroll is active)
            body.classList.toggle('no-overflow');
        });
    });
})();