import getObjects from './Video';

export default function mediaInit() {
    // Set all vars, without DOM
    const { port, hostname } = document.location;
    let { protocol } = document.location;
    protocol = protocol.slice(0, protocol.length - 1);

    // AudioContext
    // window.AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx: AudioContext = new AudioContext();

    // Canvas for analyser
    const canvas: HTMLCanvasElement = document.querySelector<HTMLCanvasElement>('.Analyser');

    window.addEventListener('resize', () => {
        canvas.width = Math.floor(window.innerWidth);
        canvas.height = Math.floor(window.innerHeight);
    });
    // All elems, whose must switch class
    const videos: HTMLVideoElement = document.body.querySelector<HTMLVideoElement>('.Videos');
    const navs: HTMLDivElement = videos.querySelector<HTMLDivElement>('.VideosNavigations');

    const { initVideo, getActiveVideo: gAV } = getObjects(videos, navs);

    // All subnavs
    const bright: HTMLInputElement = navs.querySelector<HTMLInputElement>('.Navigations-Bright');
    const contrast: HTMLInputElement = navs.querySelector<HTMLInputElement>('.Navigations-Contrast');
    const allCamsBtn: HTMLDivElement = navs.querySelector<HTMLDivElement>('.AllCams');

    bright.addEventListener('change', function() {
        // video_active
        // Cr-ed for not call that func at yet
        const vA = gAV();
        if (!vA) return;

        vA.style.filter = vA.style.filter.replace(/brightness\([\s\S]*\)/ig, '') + `brightness(${this.value}%)`;
    });

    contrast.addEventListener('change', function() {
        // video_active
        // Cr-ed for not call that func at yet
        const vA = gAV();
        if (!vA) return;

        vA.style.filter = vA.style.filter.replace(/contrast\([\s\S]*\)/ig, '') + `contrast(${this.value}%)`;
    });

    allCamsBtn.addEventListener('click', () => {
        // video_active
        // Cr-ed for not call that func at yet
        const vA = gAV();
        if (!vA) return;

        // Clear state
        vA.classList.remove('Video_active');
        // Switch off the audio
        vA.muted = true;
        // Clear the filter
        vA.style.filter = '';
        bright.value = '100';
        contrast.value = '100';

        // Clear state
        navs.classList.remove('Navigations_active');
        // Clear translate
        vA.style.transform = '';
    });

    const Vids = document.querySelectorAll<HTMLVideoElement>('.Video');

    // All paths to streams
    ['sosed', 'dog', 'cat', 'hall']
        .forEach((path, id) => {
            initVideo(
                Vids[id],
                // Create url by path
                `http://localhost:9191/master?url=${
                    encodeURIComponent(
                        `${protocol}://${hostname}:${port}/cams/${path}/master.m3u8`
                    )
                }`,
                audioCtx
            );
        });

}
