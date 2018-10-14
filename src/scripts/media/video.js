import './videos.sss';
import { analysAudio } from './audio';

export default function getObjects(videos, navs) {
<<<<<<< HEAD
    // Storage, with AudioContext.createMediaElement(element)
    // and analysers for this media
=======
<<<<<<< HEAD
    // Storage, with AudioContext.createMediaElement(element)
    // and analysers for this media
=======
>>>>>>> dbfedc17b995433c5a57804b797925065faaa97e
>>>>>>> 4a55321ff92828cfa40384994533d8861d71b384
    const mediaSource = new Map();

    function getActiveVideo() {
        return videos.querySelector('.video_active');
    }

    function initVideo(video, url, audioCtx) {
        if (!video) return;

        function onCanPlay() {
            video.play().catch();
        }

        function onClickVideo(event) {
            event.preventDefault();

            if (video.muted) {
                video.muted = false;
            }

            
            if (this.classList.contains('video_active')) return;
            
            video.classList.add('video_active');
            navs.classList.add('navigations_active');
            
            const { offsetTop: top, offsetLeft: left } = video;
            video.style.transform = `translateX(${-left}px) translateY(${-top}px)`;
        

            if (mediaSource.get(video)) {
                const { source, analyser } = mediaSource.get(video);
                analysAudio(audioCtx, video, source, analyser);
            } else {
                mediaSource.set(video, analysAudio(audioCtx, video));
            }
        }

        if (Hls.isSupported()) {
            var hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, onCanPlay);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = url;
            video.addEventListener('loadedmetadata', onCanPlay);
        }

        video.addEventListener('ended', onCanPlay);
        video.addEventListener('click', onClickVideo);
    }

    return { getActiveVideo, initVideo };
}