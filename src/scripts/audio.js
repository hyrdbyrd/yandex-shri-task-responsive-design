(function(){
    window.addEventListener('DOMContentLoaded', () => {
        const canvas = document.querySelector('.analyser');

        // Set audio context
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContext;

        // Check the context
        if (!audioCtx) alert('Ваш браузер не поддерживает некоторые технологии');
        navigator.mediaDevices.getUserMedia({
            audio: true
        })
            .then(stream => {
                const analyser = audioCtx.createAnalyser();
                analyser.fftSize = 256;
                analyser.minDecibels = -100;
                analyser.maxDecibels = 0;

                const source = audioCtx.createMediaStreamSource(stream);
                source.connect(analyser);

                const ctx = canvas.getContext('2d');
                ctx.scale(10, 10);

                function render() {
                    const dataList = new Uint8Array(analyser.frequencyBinCount);
            
                    analyser.getByteFrequencyData(dataList);
            
                    canvas.width = canvas.width | 0;
                    canvas.height = canvas.height | 0;
            
                    // metrika
                    const m = {
                        width: canvas.width,
                        height: canvas.height,
                        fr: {
                            width: (dataList.length / canvas.width) * 2.5 | 0,
                        }
                    };
            
                    ctx.fillStyle = 'rgba(0, 0, 0, .9)';
                    ctx.fillRect(0, 0, m.width, m.height);
            
                    dataList.forEach((height, x) => {
                        let r = height + (100 * (x / height));
                        let g = 250 * (x / height);
                        let b = 50;

                        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                        ctx.fillRect(x, m.height - height, m.fr.width, height);
                    });
                    requestAnimationFrame(render);
                }

                render();
            })
            .catch(err => {
                console.error(err);
            });
    });
})();