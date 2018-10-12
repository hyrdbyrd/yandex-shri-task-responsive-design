import getObjects from './media/video';

// Set all vars, without DOM
let { port, hostname, protocol } = document.location;
protocol = protocol.slice(0, protocol.length - 1);

window.AudioContext = window.AudioContext || window.webkitAudioContext;

const audioCtx = new AudioContext();
const storageOfMedia = new Map();

window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('.analyser');

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth | 0;
        canvas.height = window.innerHeight | 0;
    });

    const videos = document.body.querySelector('.videos');
    const navs = videos.querySelector('.videos-navigations');

    const { initVideo, getActiveVideo: gAV } = getObjects(videos, navs);

    const bright = navs.querySelector('.navigations__bright');
    const contrast = navs.querySelector('.navigations__contrast');
    const allCamsBtn = navs.querySelector('.all-cams');

    bright.addEventListener('change', function () {
        // video_active
        const vA = gAV();
        vA.style.filter = vA.style.filter.replace(/brightness\([\s\S]*\)/ig, '') + `brightness(${this.value}%)`;
    });

    contrast.addEventListener('change', function () {
        // video_active
        const vA = gAV();
        vA.style.filter = vA.style.filter.replace(/contrast\([\s\S]*\)/ig, '') + `contrast(${this.value}%)`;
    });

    allCamsBtn.addEventListener('click', () => {
        // video_active
        const vA = gAV();

        vA.classList.remove('video_active');
        vA.muted = true;
        vA.style.filter = '';
        bright.value = '100';
        contrast.value = '100';
        navs.classList.remove('navigations_active');
        vA.style.transform = '';
        storageOfMedia.set(vA, window.disconnectFromCurrentStream());
    });

    ['sosed', 'dog', 'cat', 'hall']
        .map(path => encodeURIComponent(`${protocol}://${hostname}:${port}/streams/${path}/master.m3u8`))
        .forEach((url, id) => {
            initVideo(
                document.getElementById(`video-${id + 1}`),
                `http://localhost:9191/master?url=${url}`,
                audioCtx,
                storageOfMedia
            );
        });
});