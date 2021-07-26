// let myGreeting = setTimeout(() => {
//   alert("hello , Mr. universe");
// }, 2000);

//with named function
// myGreeting = setTimeout(function sayHi() {
//   alert("hello , Mr. Universe");
// }, 2000);

//with function named separately
// function sayHi() {
//   alert("Hello , Mr Universe");
// }
//myGreeting = setTimeout(sayHi, 2000);

//passing parameters
function sayHi(who) {
  alert(`Hello, ${who}!`);
}
myGreeting = setTimeout(sayHi, 2000, "Mr Hamza");

//cancel a setTimeout async function
clearTimeout(myGreeting);

//using set interval for a digital clock
function displayTime() {
  let date = new Date();
  let time = date.toLocaleTimeString(); //turn date to a string
  document.getElementById("demo").textContent = time;
}
const createClock = setInterval(displayTime, 1000); //updates the display by getting a new date very after one second

// const myInterval = setInterval(myFunction, 2000);
// clearInterval(myInterval);
