import getObjects from './media/video';

// Set all vars, without DOM
let { port, hostname, protocol } = document.location;
protocol = protocol.slice(0, protocol.length - 1);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4a55321ff92828cfa40384994533d8861d71b384
// AudioContext
window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

window.addEventListener('DOMContentLoaded', () => {
    // Canvas for analyser
    const canvas = document.querySelector('.analyser');
    // Equals Math.floor(window[`inner${dimension}`])
<<<<<<< HEAD
=======
=======

window.AudioContext = window.AudioContext || window.webkitAudioContext;

const audioCtx = new AudioContext();

window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('.analyser');

>>>>>>> dbfedc17b995433c5a57804b797925065faaa97e
>>>>>>> 4a55321ff92828cfa40384994533d8861d71b384
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth | 0;
        canvas.height = window.innerHeight | 0;
    });
<<<<<<< HEAD
    // All elems, whose must switch class
=======
<<<<<<< HEAD
    // All elems, whose must switch class
=======

>>>>>>> dbfedc17b995433c5a57804b797925065faaa97e
>>>>>>> 4a55321ff92828cfa40384994533d8861d71b384
    const videos = document.body.querySelector('.videos');
    const navs = videos.querySelector('.videos-navigations');

    const { initVideo, getActiveVideo: gAV } = getObjects(videos, navs);

<<<<<<< HEAD
    // All subnavs
=======
<<<<<<< HEAD
    // All subnavs
=======
>>>>>>> dbfedc17b995433c5a57804b797925065faaa97e
>>>>>>> 4a55321ff92828cfa40384994533d8861d71b384
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4a55321ff92828cfa40384994533d8861d71b384
        // Switch off the audio
        vA.muted = true;
        // Clear the filter
        vA.style.filter = '';
        bright.value = '100';
        contrast.value = '100';

        navs.classList.remove('navigations_active');
        // Clear translate
        vA.style.transform = '';
    });

    // All paths to streams
<<<<<<< HEAD
=======
=======
        vA.muted = true;
        vA.style.filter = '';
        bright.value = '100';
        contrast.value = '100';
        navs.classList.remove('navigations_active');
        vA.style.transform = '';
        audioCtx.disconnect();
    });

>>>>>>> dbfedc17b995433c5a57804b797925065faaa97e
>>>>>>> 4a55321ff92828cfa40384994533d8861d71b384
    ['sosed', 'dog', 'cat', 'hall']
        .map(path => encodeURIComponent(`${protocol}://${hostname}:${port}/streams/${path}/master.m3u8`))
        .forEach((url, id) => {
            initVideo(
                document.getElementById(`video-${id + 1}`),
                `http://localhost:9191/master?url=${url}`,
                audioCtx
            );
        });
});