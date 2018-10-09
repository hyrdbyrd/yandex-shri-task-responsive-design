import '../styles/videos.sss';
import './audio';

(function(){
    window.addEventListener('DOMContentLoaded', () => {
        const videos = document.querySelector('.videos');
        const navs = videos.querySelector('.videos-navigations');

        const allCamsBtn = navs.querySelector('.all-cams');
        const bright = navs.querySelector('.navigations__bright');
        const contrast = navs.querySelector('.navigations__contrast');

        // Get active video.
        function gAV() {
            return videos.querySelector('.video_active');
        }

        function initVideo(video, url) {
            if (!video) return;
            
            bright.addEventListener('change', function () {
                gAV().style.filter = `brightness(${this.value}%)`;
            });

            contrast.addEventListener('change', function () {
                gAV().style.filter = `contrast(${this.value}%)`;
            }); 

            allCamsBtn.addEventListener('click', () => {
                // video_active
                const vA = gAV();

                vA.classList.remove('video_active');
                vA.muted = true;
                navs.classList.remove('navigations_active');
            });

            video.addEventListener('ended', () => {
                video.play()
                    .catch();
            });
            
            function onLoadMeta() {
                video.play()
                    .catch();
            }

            function switchVideo(event) {
                event.preventDefault();
                video.classList.add('video_active');
                navs.classList.add('navigations_active');
                if (video.muted) {
                    video.muted = false;
                }
            }
            
            if (Hls.isSupported()) {
                var hls = new Hls();
                hls.loadSource(url);
                hls.attachMedia(video);
                hls.on(Hls.Events.MANIFEST_PARSED, onLoadMeta);
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = url;
                video.addEventListener('loadedmetadata', onLoadMeta);
            }

            video.addEventListener('click', switchVideo);
        }

        let { port, hostname, protocol } = document.location;
        protocol = protocol.slice(0, protocol.length - 1);

        ['sosed', 'dog', 'cat', 'hall']
            .map(path => encodeURIComponent(`${protocol}://${hostname}:${port}/streams/${path}/master.m3u8`))
            .forEach((url, id) => {
                initVideo(
                    document.getElementById(`video-${id + 1}`),
                    `http://localhost:9191/master?url=${url}`
                );
            });
    });
})();