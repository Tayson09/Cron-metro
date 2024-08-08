let segundos = 0;
let minutos = 0;
let horas = 0;
let interval;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

function startTimer() {
    if (!interval) {
        interval = setInterval(() => {
            segundos++;
            if (segundos === 60) {
                segundos = 0;
                minutos++;
                if (minutos === 60) {
                    minutos = 0;
                    horas++;
                }
            }
            display.textContent = formatTime(horas, minutos, segundos);
        }, 1000);
    }
}

function formatTime(horas, minutos, segundos) {
    return `${padZero(horas)}:${padZero(minutos)}:${padZero(segundos)}`;
}

function padZero(unit) {
    return unit < 10 ? '0' + unit : unit;
}

function pauseTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    clearInterval(interval);
    interval = null;
    segundos = 0;
    minutos = 0;
    horas = 0;
    display.textContent = "00:00:00";
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
