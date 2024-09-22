let timerInterval;
let seconds = 0;
let running = false;
const display = document.getElementById('display');
const lapList = document.getElementById('lapList');

// Function to update the display
function updateDisplay() {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    display.textContent = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Start function
document.getElementById('start').addEventListener('click', () => {
    if (!running) {
        running = true;
        timerInterval = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

// Pause function
document.getElementById('pause').addEventListener('click', () => {
    if (running) {
        clearInterval(timerInterval);
        running = false;
    }
});

// Reset function
document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timerInterval);
    running = false;
    seconds = 0;
    updateDisplay();
    lapList.innerHTML = ''; // Clear lap list
});

// Lap function
document.getElementById('lap').addEventListener('click', () => {
    if (running) {
        const lapTime = display.textContent;
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        lapList.appendChild(lapItem);
    }
});
