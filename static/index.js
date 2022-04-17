console.log("hello");
// challenge 1, your age in days:
function ageindays() {
  var birthyear = prompt("enter your birthyear");
  var dayslived = (2021 - birthyear) * 365;

  var calc = document.createElement("h1"); // creating an h1 element
  var textanswer = document.createTextNode(
    "you are " + dayslived + " days old"
  );
  calc.setAttribute("id", "dayslived"); // if you isnpect this element in the console u will see that an h1 is created with an id of dayslived.
  calc.appendChild(textanswer); // adding the text to the h1
  console.log(textanswer);

  document.getElementById("flex_box_result").appendChild(calc); // adding this to the h1..
}
function reset() {
  document.getElementById("dayslived").remove();
}

function generatecat() {
  var image = document.createElement("img");
  var div = document.getElementById("flexcatgen");
  image.src =
    "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__340.jpg";
  div.appendChild(image);
}
// challenge 3: rock paper siccors.

function rpsGame(yourchoice) {
  //console.log(yourchoice);
  console.log(yourchoice.id);

  var humanchoice, computerchoice;
  humanchoice = yourchoice.id;
  computerchoice = numbertochoice(randtoint());
  console.log("your choice: ", humanchoice);

  console.log("computer choice: ", computerchoice);

  result = decidewinner(humanchoice, computerchoice);
  console.log(result);

  message = finalmessage(result); // the final messagesaying the result of the game.
  console.log(message);
  rpsfrontend(yourchoice.id, computerchoice, message);
}

function randtoint() {
  randomchoice = Math.floor(Math.random() * 3);
  return randomchoice;
}

function numbertochoice(number) {
  return ["rock", "paper", "siccor"][number];
}

function decidewinner(yourchoice, computerchoice) {
  var rpsdatabase = {
    rock: { siccor: 1, rock: 0.5, paper: 0 },
    paper: { siccor: 0, rock: 1, paper: 0.5 },
    siccor: { rock: 0, paper: 1, siccor: 0.5 },
  };
  var yourscore = rpsdatabase[yourchoice][computerchoice];
  var computerscore = rpsdatabase[computerchoice][yourchoice];
  return [yourscore, computerscore];
}

function finalmessage([yourscore, computerscore]) {
  if (yourscore === 0) {
    return { message: "you lost", color: "red" };
  } else if (yourscore === 0.5) {
    return { message: "It is a tie", color: "yellow" };
  } else {
    return { message: "you won!!!", color: "green" };
  }
}

function rpsfrontend(humanimagechoice, computerimagechoice, finalmessage) {
  var imagesdatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    siccor: document.getElementById("siccor").src,
  };
  // removing the images:
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("siccor").remove();

  var humandiv = document.createElement("div");
  var computerdiv = document.createElement("div");
  var messagediv = document.createElement("div");

  humandiv.innerHTML =
    "<img src='" +
    imagesdatabase[humanimagechoice] +
    "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,58,233,1);'>";

  document.getElementById("flex_box_rps_div").appendChild(humandiv);
  messagediv.innerHTML =
    "<h1 style='color: " +
    finalmessage["color"] +
    "; font-size: 60px; padding: 30px; '>" +
    finalmessage["message"] +
    "</h1>";
  document.getElementById("flex_box_rps_div").appendChild(messagediv);

  computerdiv.innerHTML =
    "<img src='" +
    imagesdatabase[computerimagechoice] +
    "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>";
  document.getElementById("flex_box_rps_div").appendChild(computerdiv);
}

//challenge 4: change the color of all buttons:

var allbuttons = document.getElementsByTagName("button"); // returns an array of all the button elemensts.

var copyallbuttons = [];
for (let i = 0; i < allbuttons.length; i++) {
  copyallbuttons.push(allbuttons[i].classList[1]);
}

function buttoncolorchange(buttonthing) {
  if (buttonthing.value === "red") {
    buttonred();
  } else if (buttonthing.value === "green") {
    buttongreen();
  } else if (buttonthing.value === "reset") {
    buttonreset();
  } else if (buttonthing.value === "random") {
    randomcolor();
  }
}

function buttonred() {
  for (let i = 0; i < allbuttons.length; i++) {
    allbuttons[i].classList.remove(allbuttons[i].classList[1]); // removing the second class, which determines the color basically.
    allbuttons[i].classList.add("btn-danger");
  }
}

function buttongreen() {
  for (let j = 0; j < allbuttons.length; j++) {
    allbuttons[j].classList.remove(allbuttons[j].classList[1]); // removing the second class, which determines the color basically.
    allbuttons[j].classList.add("btn-success");
  }
}
function buttonreset() {
  for (let i = 0; i < allbuttons.length; i++) {
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
    allbuttons[i].classList.add(copyallbuttons[i]);
  }
}
function randomcolor() {
  var choices = ["btn-primary", "btn-danger", "btn-success", "btn-warning"];

  for (let i = 0; i < allbuttons.length; i++) {
    var random = Math.floor(Math.random() * 3);
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
    allbuttons[i].classList.add(choices[random]);
  }
}
