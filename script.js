
// setting 12 hour format as the default
let is24Hour = false;

// When button is clicked, swaps the format
document.getElementById("timeFormat").addEventListener("click", ()=> {
    is24Hour = !is24Hour;
    updateClock();
})

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
    let second = now.getSeconds();
    let day = now.getDate();
    let month = now.getMonth();

    // AM / PM
    let meridiem = "";

    // 24-hour format
    if (is24Hour) {
        meridiem = ""; // no AM/PM for 24 hour format
    } else {
        // 12-hour format
        meridiem = "AM";

        if (hour === 0) {
            hour = 12;
        } else if (hour === 12) {
            meridiem = "PM";
        } else if (hour > 12) {
            hour -= 12;
            meridiem = "PM";
        }
    }

    // Alert
    if (minute === 0 && second === 0) {
        alert("Top of the hour!");
    }

    // Updates all information visually
    document.getElementById("meridiem").textContent = `${meridiem}`;
    document.getElementById("hours").textContent = hour;
    document.getElementById("minutes").textContent = minute.toString().padStart(2, 0);
    document.getElementById("day").textContent = `${dayList[week]}`;
    document.getElementById("date").textContent = `${month + 1}/${day}`;
}

// Runs updateClock once every second
setInterval(updateClock, 1000);