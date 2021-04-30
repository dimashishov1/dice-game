// a random number for dice №1

let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let result1 = "images/dice" + randomNumber1 + ".png";

// a random number for dice №2

let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let result2 = "images/dice" + randomNumber2 + ".png";

// changing images of dices

document.getElementsByClassName("img1")[0].setAttribute("src", result1);
document.getElementsByClassName("img2")[0].setAttribute("src", result2);

// changing h1

if (result1 == result2) {
    document.querySelector("h1").textContent = "It's a draw 🤷‍♂️";
} else if (result1 > result2) {
    document.querySelector("h1").textContent = "🚩 Player 1 wins!";
} else {
    document.querySelector("h1").textContent = "🚩 Player 2 wins!";
}
