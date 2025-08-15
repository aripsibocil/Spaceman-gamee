let multiplier = 1.00;
let interval;
let running = false;

function startGame() {
    if (running) return;
    running = true;
    multiplier = 1.00;
    document.getElementById("multiplier").innerText = multiplier.toFixed(2) + "x";

    interval = setInterval(() => {
        multiplier += 0.01;
        document.getElementById("multiplier").innerText = multiplier.toFixed(2) + "x";

        // Game stop otomatis jika multiplier > 10x
        if (multiplier >= 10) {
            stopGame();
        }
    }, 100);
}

function stopGame() {
    clearInterval(interval);
    running = false;
}
