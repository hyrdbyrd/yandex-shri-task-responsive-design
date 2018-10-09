export default function analysAudio(src) {
    // Set audio context
    const audioCtx = new AudioContext();

    // Check the context
    if (!audioCtx) alert('Ваш браузер не поддерживает некоторые технологии');
    
    const source = audioCtx.createMediaElementSource(src);
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;

    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    console.log(audioCtx, source, analyser);

    visual();
    function visual() {
        const canvas = document.querySelector('.analyser');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth | 0;
        canvas.height = window.innerHeight | 0;

        function render() {
            const dataList = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(dataList);

            // metrika
            const m = {
                width: canvas.width,
                height: canvas.height,
                fr: {
                    width: canvas.width / dataList.length * 2.5 | 0
                }
            };
            
            ctx.clearRect(0, 0, m.width, m.height);
            dataList.forEach((height, x) => {
                let r = height + (25 * (x / dataList.length));
                let g = 250 * (x / dataList.length);
                let b = 50;

                ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                ctx.fillRect(x * m.fr.width, m.height - height, m.fr.width, height);
            });
            requestAnimationFrame(render);
        }

        render();
    }
}