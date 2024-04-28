// myDiv-1
const alertButton = document.getElementById("alert");

function alertFunc() {
  alert("This is an alert to you!");
}

alertButton.addEventListener("click", alertFunc);

// myDiv-2
const promptButton = document.getElementById("prompt");
const answerP = document.getElementById("answer");

function askSomething() {
  let name = prompt("What's your name?");
  if (name === "") {
    alert("You didn't enter your name :(");
    answerP.innerHTML = "";
  } else if (name != null) {
    answerP.innerHTML = "Hello " + name + "!";
  } else {
    alert("No problem, you're good to go!");
    answerP.innerHTML = "";
  }
}

promptButton.addEventListener("click", askSomething);

// myDiv-3
const confirmButton = document.querySelector("#confirm");

function acceptedOption() {
  let acceptedP = document.querySelector("#accepted");
  if (confirm("Are you sure of this action?")) {
    acceptedP.innerHTML = "Confirmed!";
    acceptedP.style.color = "green";
  } else {
    acceptedP.innerHTML = "Declined.";
    acceptedP.style.color = "red";
  }
  setTimeout(() => {
    acceptedP.innerHTML = "";
  }, 2800);
}

confirmButton.addEventListener("click", acceptedOption);

// myDiv-4
const openYoutube = document.querySelector("#open-window");
let myWindow;

function openYT() {
  myWindow = window.open(
    "https://youtube.com",
    "_black",
    "width=800, height=800"
  );
}

openYoutube.addEventListener("click", openYT);
