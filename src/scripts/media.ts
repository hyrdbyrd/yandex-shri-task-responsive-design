import getObjects from './media/video';

// Set all vars, without DOM
const { port, hostname } = document.location;
let { protocol } = document.location;
protocol = protocol.slice(0, protocol.length - 1);

// AudioContext
// window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx: AudioContext = new AudioContext();

window.addEventListener('DOMContentLoaded', () => {
    // Canvas for analyser
    const canvas: HTMLCanvasElement = document.querySelector<HTMLCanvasElement>('.analyser');

    window.addEventListener('resize', () => {
        canvas.width = Math.floor(window.innerWidth);
        canvas.height = Math.floor(window.innerHeight);
    });
    // All elems, whose must switch class
    const videos: HTMLVideoElement = document.body.querySelector<HTMLVideoElement>('.videos');
    const navs: HTMLDivElement = videos.querySelector<HTMLDivElement>('.videos-navigations');

    const { initVideo, getActiveVideo: gAV } = getObjects(videos, navs);

    // All subnavs
    const bright: HTMLInputElement = navs.querySelector<HTMLInputElement>('.navigations__bright');
    const contrast: HTMLInputElement = navs.querySelector<HTMLInputElement>('.navigations__contrast');
    const allCamsBtn: HTMLDivElement = navs.querySelector<HTMLDivElement>('.all-cams');

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
        vA.classList.remove('video_active');
        // Switch off the audio
        vA.muted = true;
        // Clear the filter
        vA.style.filter = '';
        bright.value = '100';
        contrast.value = '100';

        // Clear state
        navs.classList.remove('navigations_active');
        // Clear translate
        vA.style.transform = '';
    });

    // All paths to streams
    ['sosed', 'dog', 'cat', 'hall']
        .forEach((path, id) => {
            initVideo(
                document.querySelector(`.video-${id + 1}`),
                // Create url by path
                `http://localhost:9191/master?url=${
                    encodeURIComponent(
                        `${protocol}://${hostname}:${port}/cams/${path}/master.m3u8`
                    )
                }`,
                audioCtx
            );
        });
});
