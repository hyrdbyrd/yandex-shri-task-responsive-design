export function analysAudio(audioCtx, element, source?, analyser?) {
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
    canvas.width = Math.floor(window.innerWidth);
    canvas.height = Math.floor(window.innerHeight);

    function render() {
        // Get all decBels for this media
        const dataList = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(dataList);

        // metrika
        const m = {
            fr: {
                width: Math.floor(canvas.width / dataList.length * 2.5)
            },
            height: canvas.height,
            width: canvas.width
        };

        ctx.clearRect(0, 0, m.width, m.height);
        dataList.forEach((height, x) => {
            // Create effect, of linear-gradient from red to blue, and to green
            // 25 - prefer 255, but without 5 :)
            const r = height + (25 * (x / dataList.length));
            // 250 - not full green, but near 255
            const g = 250 * (x / dataList.length);
            // For dark blue behind green and red
            const b = 50;

            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.fillRect(x * m.fr.width, m.height - height, m.fr.width, height);
        });

        requestAnimationFrame(render);
    }

    render();
}
