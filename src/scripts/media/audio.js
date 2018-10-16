export function analysAudio(audioCtx, element, source, analyser) {
    // If we not get that source
    if (!source || !analyser) {
        source = audioCtx.createMediaElementSource(element);
        // Set analyser
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
    }

    visual(analyser, document.querySelector('.analyser'));
    return { source, analyser };
}


export function visual(analyser, canvas) {
    canvas = canvas || document.querySelector('.analyser');
    const ctx = canvas.getContext('2d');
    // Equals Math.floor(window[`inner${dimension}`])
    canvas.width = window.innerWidth | 0;
    canvas.height = window.innerHeight | 0;

    function render() {
        // Get all decBels for this media
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