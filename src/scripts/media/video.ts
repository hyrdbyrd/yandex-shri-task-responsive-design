import { analysAudio } from './audio';
import './videos.sss';
// import { interface } from 'tcomb';

interface IGetObjects {
    getActiveVideo(): HTMLVideoElement;
    initVideo(video: HTMLVideoElement, url: string, audioCtx: AudioContext): void;
}

export default function getObjects(videos, navs): IGetObjects {
    const ctx: CanvasRenderingContext2D = (document.createElement('canvas')).getContext('2d');
    const brightnessLvlNode: HTMLDivElement = document.querySelector('.navigations__brigtness');

    // Storage, with AudioContext.createMediaElement(element)
    // and analysers for this media
    const mediaSource = new Map();

    function getActiveVideo(): HTMLVideoElement {
        return videos.querySelector('.video_active');
    }

    function initVideo(video, url, audioCtx): void {
        if (!video) return;

        function onCanPlay(): void {
            video.play().catch();
        }

        function onClickVideo(event) {
            event.preventDefault();

            // Check the brightness
            ctx.drawImage(video, 0, 0, 1, 1);
            const summ = (ctx.getImageData(0, 0, 1, 1).data.reduce((prev, cur) => prev + cur) - 255) / 3;

            let brightnessLvl;
            if (summ > 200) {
                brightnessLvl = 'Очень ярко';
            } else if (summ > 150) {
                brightnessLvl = 'Ярко';
            } else if (summ > 100) {
                brightnessLvl = 'Тускло';
            } else {
                brightnessLvl = 'Темно';
            }

            // Add text for brightess
            brightnessLvlNode.innerText = brightnessLvl;

            if (video.muted) {
                video.muted = false;
            }

            if (this.classList.contains('video_active')) return;

            video.classList.add('video_active');
            navs.classList.add('navigations_active');

            const { offsetTop: top, offsetLeft: left } = video;
            video.style.transform = `translate(${-left}px, ${-top}px)`;

            if (mediaSource.get(video)) {
                const { source, analyser } = mediaSource.get(video);
                analysAudio(audioCtx, video, source, analyser);
            } else {
                mediaSource.set(video, analysAudio(audioCtx, video));
            }
        }

        if (Hls.isSupported()) {
            const hls = new Hls();
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
