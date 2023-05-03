const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = "#" + randomNumber;
    color.textContent = "#" + randomNumber;
});


function getRandomNumber() { 
    const randomElements = [];

    for (let i = 0; i < 6; i++) {
        let randomEl = hex[Math.floor(Math.random() * hex.length)]
        randomElements.push(randomEl)
    }
    return randomElements.join("")
};
