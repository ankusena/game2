document.addEventListener('DOMContentLoaded', () => {
    const languageSelection = document.getElementById('language');
    const levelSelection = document.getElementById('level');
    const startGameButton = document.getElementById('start-game');
    const sketchArea = document.getElementById('sketch-area');
    const canvas = document.getElementById('canvas');
    const submitSketchButton = document.getElementById('submit-sketch');
    const guessResult = document.getElementById('guess-result');

    const wordsData = {
        spanish: {
            1: ['gato', 'perro', 'casa'],
            // Add more levels here
        },
        // Add other languages here
    };

    startGameButton.addEventListener('click', () => {
        sketchArea.style.display = 'block';
        // Implement logic to choose a random word for the player to draw
    });

    submitSketchButton.addEventListener('click', () => {
        // Implement logic to analyze the sketch and make a guess
        guessResult.textContent = 'The game guessed: "Gato"';
    });

    // Implement canvas drawing logic
    const ctx = canvas.getContext('2d');
    let drawing = false;

    canvas.addEventListener('mousedown', () => { drawing = true; });
    canvas.addEventListener('mouseup', () => { drawing = false; ctx.beginPath(); });
    canvas.addEventListener('mousemove', draw);

    function draw(event) {
        if (!drawing) return;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';

        ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    }
});
