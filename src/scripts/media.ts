import getObjects from './media/video.ts';

// Set all vars, without DOM
let { port, hostname, protocol } = document.location;
protocol = protocol.slice(0, protocol.length - 1);
// AudioContext
window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

window.addEventListener('DOMContentLoaded', () => {
    // Canvas for analyser
    const canvas = document.querySelector('.analyser');
    // Equals Math.floor(window[`inner${dimension}`])
    window.addEventListener('resize', () => {
        canvas.width = Math.floor(window.innerWidth);
        canvas.height = Math.floor(window.innerHeight);
    });
    // All elems, whose must switch class
    const videos = document.body.querySelector('.videos');
    const navs = videos.querySelector('.videos-navigations');

    const { initVideo, getActiveVideo: gAV } = getObjects(videos, navs);

    // All subnavs
    const bright = navs.querySelector('.navigations__bright');
    const contrast = navs.querySelector('.navigations__contrast');
    const allCamsBtn = navs.querySelector('.all-cams');

    bright.addEventListener('change', function () {
        // video_active
        // Cr-ed for not call that func at yet
        const vA = gAV();
        if (!vA) return;

        vA.style.filter = vA.style.filter.replace(/brightness\([\s\S]*\)/ig, '') + `brightness(${this.value}%)`;
    });

    contrast.addEventListener('change', function () {
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
