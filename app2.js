let mySecondCounter = null;
let startingTime = null;
let pausedTime = 0;
let timeOfPause = null;
let hours = 0;
let minutes = 0;
let seconds = 0;
function customTime() {
  if (!mySecondCounter) {
    mySecondCounter = 0;
  }
  if (!startingTime) {
    //startingTime = new Date();
    startingTime = Date.now();
    console.log(startingTime);
  }

  let currentTime = Date.now();
  let passedMilliSeconds = currentTime - pausedTime - startingTime;
  //console.log(Math.floor(passedMicroSeconds / 1000000));
  //update counter after a second
  //   hours = Math.floor(mySecondCounter / 3600);
  //   minutes = Math.floor((mySecondCounter % 3600) / 60); //what can't be fitted into hours is the minu
  //   seconds = Math.floor(mySecondCounter % 60); //what cant be fitted into minutes is the seconds
  hours = Math.floor(passedMilliSeconds / 360000);
  minutes = Math.floor((passedMilliSeconds % 3600000) / 60000); //what can't be fitted into hours is the minu
  seconds = Math.floor(((passedMilliSeconds % 3600000) % 60000) / 1000); //what cant be fitted into minutes is the seconds

  //display uniformly
  displayhours = hours < 10 ? "0" + hours : hours;
  displayminutes = minutes < 10 ? "0" + minutes : minutes;
  displayseconds = seconds < 10 ? "0" + seconds : seconds;
  let resultString = `${displayhours}:${displayminutes}:${displayseconds}`;
  //console.log(resultString);
  document.getElementById("newTime").textContent = resultString;
  //mySecondCounter++; //better to use the seconds that have passed since the user pressed the button, but what if he pauses?, then needs to restart from where he is.., we should start counting from when he starts again but we must be adding to the initial values of the seconds, minutes and hours already there..
}

//get teh buttons in the html
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

//add event listeners to start clock
startBtn.addEventListener("click", () => {
  stopWatch = setInterval(customTime, 500); // we call this function every after atleast one second
  startBtn.disabled = true;
  if (timeOfPause) {
    //if you paused it before
    pausedTime = Date.now() - timeOfPause;
    timeOfPause = null;
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(stopWatch); //we stop updating, we stop calling the function
  startBtn.disabled = false; //you can now access the start button
  timeOfPause = Date.now();
});

resetBtn.addEventListener("click", () => {
  clearInterval(stopWatch);
  startBtn.disabled = false;
  startingTime = null;
  pausedTime = 0;
  timeOfPause = null;
  //mySecondCounter = 0;
  document.getElementById("newTime").textContent = "00:00:00";
});

//call the fuction once at the start of the page to show the zeros
customTime();

//const timer = setInterval(customTime, 50);
