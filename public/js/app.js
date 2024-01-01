let display = document.querySelector(".numDisplay")
let nums = document.querySelectorAll(".num-box")

let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let multi = document.querySelector(".multiplication")
let division = document.querySelector(".division")

let equal = document.querySelector(".result-box")

let num1 = 0
let num2 = 0
let sign = null


// ! 50% ana 50% chat gpt 
nums.forEach(number => {
    number.addEventListener("click", () => {
        if (sign === null) {
            if (num1 === 0) {
                num1 = parseInt(number.textContent);
            } else {
                num1 = num1 * 10 + parseInt(number.textContent);
            }
            display.textContent = num1;
        } else {
            if (num2 === 0) {
                num2 = parseInt(number.textContent);
            } else {
                num2 = num2 * 10 + parseInt(number.textContent);
            }
            display.textContent = num2;
        }
    });
});
// ! 50% ana 50% chat gpt 

let result
plus.addEventListener("click", () => {
    sign = "+"
})


minus.addEventListener("click", () => {
    sign = "-"
    result = num1 - num2;

})

multi.addEventListener("click", () => {
    sign = "*"
    result = num1 * num2;
})

division.addEventListener("click", () => {
    sign = "/"
    result = num1 / num2;
})

equal.addEventListener("click", () => {
    switch (sign) {
        case "+":
            result = num1 + num2;
            display.textContent = result
            break;
        case "-":
            result = num1 - num2;
            display.textContent = result
            break;
        case "*":
            result = num1 * num2;
            display.textContent = result
            break;
        case "/":
            result = num1 / num2;
            display.textContent = result
            break;
        default:
            break;
    }
})

let ac = document.querySelector(".AC")
ac.addEventListener("click",()=>{
    num1= 0
    num2= 0
    sign= null
    display.textContent= 0
})














