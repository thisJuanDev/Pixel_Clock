const clock = document.getElementById("clock"); // get clock
const checkbox = document.getElementById("checkbox"); // get checkbox
setInterval(displayTime, 1000); // repeat every second

function getTime() {
  date = new Date(); // access Date()
  hour = date.getHours(); // get hours
  minute = date.getMinutes(); // get minutes
  second = date.getSeconds(); // get seconds
  period = ""; // blank period

  minute = (minute < 10 ? "0" : "") + minute; //add 0 to minutes below 10
  second = (second < 10 ? "0" : "") + second; // add 0 to seconds below 10
}

function displayTime() {
  getTime(); // get all Date data
  if (!checkbox.checked) { // check for no 12 hour mode checkbox check, default
    var currentTime = clock.innerText = hour + ":" + minute + ":" + second; // display Date data
  } else {
    if (hour > 12) { // subtract 12 to hour > 12
      hour = hour - 12;
      period = "PM";
    } else if (hour == 12){ // apply PM to hour == 12
      period = "PM";
    } else if (hour == 0) { // apply 12 to midnight
      hour = 12;
      period = "AM";
    } else if (hour < 12) { // apply AM to hour > 12
      period = "AM"
    }
    var currentTime = clock.innerText = hour + ":" + minute + ":" + second + " " + period;
  }
}

displayTime();
