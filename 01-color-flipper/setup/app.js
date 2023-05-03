const colors = ["rgb(239, 71, 111)", "#FFD166", "#06D6A0", "rgb(17, 138, 178)", "#073B4C"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    //get random number between 0 - (color.length - 1)
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = hex[randomNumber];
    color.textContent = hex[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}