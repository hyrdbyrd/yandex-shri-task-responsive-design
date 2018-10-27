window.addEventListener('DOMContentLoaded', () => {
    const body: HTMLElement = document.body;
    const main: HTMLDivElement = body.querySelector<HTMLDivElement>('.main');
    // Get needs navigation
    const headerNav: HTMLElement = main.querySelector<HTMLElement>('.navigation_header');
    main.querySelector('.burger').addEventListener('click', () => {
        headerNav.classList.toggle('navigation_header_active');
        // Switch-off overflow (be-se scroll is active)
        body.classList.toggle('no-overflow');
        main.classList.toggle('no-overflow');
    });
});
