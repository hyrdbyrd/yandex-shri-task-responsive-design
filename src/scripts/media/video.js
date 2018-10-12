import './videos.sss';
import analysAudio from './audio';

export default function getObjects(videos, navs) {
    function getActiveVideo() {
        return videos.querySelector('.video_active');
    }

    function initVideo(video, url, audioCtx, mediaSource) {
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
                console.log(source, analyser);
                analysAudio(audioCtx, video, source, analyser);
            } else {
                analysAudio(audioCtx, video);
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

    return {
        getActiveVideo, initVideo
    };
}