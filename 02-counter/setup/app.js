let count = 0;

// it's better to select buttons using querySelectorAll

// const btnDecrease = document.getElementsByClassName("btn decrease");
// const btnReset = document.getElementsByClassName("btn reset");
// const btnIncrease = document.getElementsByClassName("btn increase");

const btns = document.querySelectorAll(".btn");
const value = document.getElementById("value");

// less code
btns.forEach(function (btn) {
    btn.addEventListener("click", function (el) {
        const styles = el.currentTarget.classList;
        if (styles.contains("decrease")) {
            count -= 1;
            value.textContent = count;
        } else if (styles.contains("increase")) {
            count += 1;
            value.textContent = count;
        } else if (styles.contains("reset")) {
            count = 0;
            value.textContent = count;
        }
        if (count < 0) {
            value.style.color = "red";
        } else if (count > 0) {
            value.style.color = "green";
        } else if ( count === 0) {
            value.style.color = "hsl(209, 61%, 16%)";
        }
    })
})


// btnDecrease[0].addEventListener("click", function () {
//     count -= 1
//     value.textContent = count;
//     getColor()
// })

// btnReset[0].addEventListener("click", function () {
//     count = 0
//     value.textContent = 0
//     getColor()
// })

// btnIncrease[0].addEventListener("click", function () {
//     count += 1
//     value.textContent = count
//     getColor()
// })

// function getColor() {
//     if (count < 0) {
//         return value.style.color = "red"
//     } else if (count > 0) {
//         return value.style.color = "green"
//     } else if (count === 0) {
//         return value.style.color = "hsl(209, 61%, 16%)"
//     }
// };