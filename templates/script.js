// Select clock hands
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

// Audio player controls
const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');

// Function to update the clock based on date input
function updateSliderAndClock() {
    const dateInput = document.getElementById('date-input').value;
    const slider = document.getElementById('time-slider');

    if (dateInput) {
        const selectedDate = new Date(dateInput);
        const hours = selectedDate.getHours();

        // Update slider and clock
        slider.value = hours;
        updateClock();
    }
}

// Function to update clock hands based on the slider's value
function updateClock() {
    const sliderValue = document.getElementById('time-slider').value;

    // Calculate angles for clock hands
    const hourAngle = -(sliderValue % 12) * 30; // 30 degrees per hour
    const minuteAngle = 0; // Set minute to 0 for simplicity
    const secondAngle = 0; // Set second to 0 for simplicity

    // Rotate clock hands
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

// Audio playback controls
playButton.addEventListener('click', () => audioPlayer.play());
pauseButton.addEventListener('click', () => audioPlayer.pause());
stopButton.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});

// Allow audio to play on user interaction
window.addEventListener('click', () => {
    const audio = document.getElementById('background-audio');
    audio.muted = false;
    audio.play(); // Start playback on user action
});

// Event listener for the date input change
document.getElementById('date-input').addEventListener('change', updateSliderAndClock);

// Event listener for the time slider input
document.getElementById('time-slider').addEventListener('input', updateClock);
