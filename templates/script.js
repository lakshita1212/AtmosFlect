const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

// Function to update slider and clock based on date input
function updateSliderAndClock() {
    const dateInput = document.getElementById('date-input').value;
    const slider = document.getElementById('time-slider');

    if (dateInput) {
        const selectedDate = new Date(dateInput);
        const hours = selectedDate.getHours();

        // Update slider to match the chosen hour from the date
        slider.value = hours;

        // Update the clock to reflect the chosen date and time
        updateClock();
    }
}

// Function to update clock hands based on the slider's hour value
function updateClock() {
    const sliderValue = document.getElementById('time-slider').value;

    // Convert the slider value (hours) to rotation angles for the clock hands
    const hourAngle = -(sliderValue % 12) * 30; // 30 degrees per hour
    const minuteAngle = -((sliderValue * 60) % 360); // Full 360 for each hour
    const secondAngle = -((sliderValue * 3600) % 60) * 6; // Full 360 for each 60 seconds

    // Apply rotation to each hand
    hourHand.style.transform = rotate(${hourAngle}deg);
    minuteHand.style.transform = rotate(${minuteAngle}deg);
    secondHand.style.transform = rotate(${secondAngle}deg);
}

window.addEventListener('click', function() {
    const audio = document.getElementById('background-audio');
    const playAudio = () => {
        audio.muted = false;
        audio.play(); // Ensures playback starts
    };

});