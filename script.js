// Updates the clock every time it is run.
function updateClock() {
    // Current Date
    let now = new Date()

    // getDay() returns a number. The day list will translate the number into a string of the day.
    let week = now.getDay();
    const dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Variables for hours, seconds, and minutes.
    let hour = now.getHours();
    let minute = now.getMinutes();
    let day = now.getDate();
    let month = now.getMonth();

    // Padding minutes. Ex: 3:5 becomes 3:05
    minute = minute.toString().padStart(2, "0");

    // AM / PM
    let meridiem = "AM";

    // Checks if it's AM or PM, and translates the time from 24-hour to 12-hour
    if (hour === 0) {
        hour = 12;
    } else if (hour === 12) {
        meridiem = "PM";
    } else if (hour > 12) {
        hour -= 12;
        meridiem = "PM";
    };

    // Updates all information visually
    document.getElementById("meridiem").textContent = `${meridiem}`;
    document.getElementById("hours").textContent = hour;
    document.getElementById("minutes").textContent = minute;
    document.getElementById("day").textContent = `${dayList[week]}`;
    document.getElementById("date").textContent = `${month + 1}/${day}`;
}

// Runs updateClock once every second
setInterval(updateClock, 1000);