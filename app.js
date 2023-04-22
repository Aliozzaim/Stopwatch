var seconds = 00;
var tens = 00;
var min = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton");
var ResetButton = document.getElementById("ResetButton");
var appendMin = document.getElementById("hours");
var interval; // to store timer values

// this function will run when click on start
startTime();
function startTime() {}

//

function startTimer() {
  tens++;

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 60) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
  if (seconds > 60) {
    min++;
    appendMin.innerHTML = "0" + min;
    seconds = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (min > 9) {
    appendMin.innerHTML = min;
  }
}

startButton.onclick = function () {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(startTimer);
};

stopButton.onclick = function () {
  clearInterval(interval);
};

ResetButton.onclick = function () {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  min = "00";
  appendSeconds.innerHTML = seconds;
  appendTens.innerHTML = tens;
  appendMin.innerHTML = min;
};
