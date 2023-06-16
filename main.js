let intervalID;

let initialDays = 0;
let initialHours = 0;
let initialMinutes = 0;
let initialSeconds = 0;

const inputDays = document.getElementById("days");
const inputHours = document.getElementById("hours");
const inputMinutes = document.getElementById("minutes");
const inputSeconds = document.getElementById("seconds");
const btnSet = document.getElementById("btn-set");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnReset = document.getElementById("btn-reset");

const outputDays = document.getElementById("output-days");
const outputHours = document.getElementById("output-hours");
const outputMinutes = document.getElementById("output-minutes");
const outputSeconds = document.getElementById("output-seconds");
function updateOutput(remainingSeconds) {
  outputDays.value = Math.floor(remainingSeconds / 86400)
    .toString()
    .padStart(2, "0");
  remainingSeconds %= 86400;
  outputHours.value = Math.floor(remainingSeconds / 3600)
    .toString()
    .padStart(2, "0");
  remainingSeconds %= 3600;
  outputMinutes.value = Math.floor(remainingSeconds / 60)
    .toString()
    .padStart(2, "0");
  outputSeconds.value = (remainingSeconds % 60).toString().padStart(2, "0");
}

function startTimer() {
  if (!intervalID) {
    intervalID = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateOutput(totalSeconds);
      } else {
        clearInterval(intervalID);
        intervalID = null;
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(intervalID);
  intervalID = null;
}

function resetTimer() {
  totalSeconds =
    initialDays * 86400 +
    initialHours * 3600 +
    initialMinutes * 60 +
    initialSeconds;
  updateOutput(totalSeconds);
}
btnSet.addEventListener("click", () => {
  initialDays = parseInt(inputDays.value) || 0;
  initialHours = parseInt(inputHours.value) || 0;
  initialMinutes = parseInt(inputMinutes.value) || 0;
  initialSeconds = parseInt(inputSeconds.value) || 0;
  resetTimer();
  inputDays.value = "";
  inputHours.value = "";
  inputMinutes.value = "";
  inputSeconds.value = "";
});

btnStart.addEventListener("click", startTimer);

btnPause.addEventListener("click", pauseTimer);

btnReset.addEventListener("click", () => {
  initialDays = 0;
  initialHours = 0;
  initialMinutes = 0;
  initialSeconds = 0;
  resetTimer();
});
