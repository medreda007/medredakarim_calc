let display = document.querySelector(".numDisplay")
let nums = document.querySelectorAll(".num-box")

let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let multi = document.querySelector(".multiplication")
let division = document.querySelector(".division")

let equal = document.querySelector(".result-box")

let num1 = null
let num2 = null
let sign = null

// ! 50% ana 50% chat gpt 
nums.forEach(number => {
    number.addEventListener("click", () => {
        if (sign === null) {
            if (num1 === null) {
                num1 = parseInt(number.textContent);
            } else if (num1.toString().includes('.')) {
                num1 = num1 + parseInt(number.textContent)
                num1 = parseFloat(num1)
                console.log(num1);
            }
            else if (num1 != null) {
                num1 = num1 * 10 + parseInt(number.textContent);
            }
            display.textContent = num1;
        } else {
            if (num2 === null) {
                num2 = parseInt(number.textContent);
            } else if (num2.toString().includes('.')) {
                num2 = num2 + parseInt(number.textContent)
                num2 = parseFloat(num2)
                console.log(num2);
            }
            else if (num1 != null) {
                num2 = num2 * 10 + parseInt(number.textContent);
            }
            display.textContent = num1 + sign + num2;
        }
    });
});
// ! 50% ana 50% chat gpt 

let result
plus.addEventListener("click", () => {
    sign = "+"
    display.textContent = num1 + sign;
})

minus.addEventListener("click", () => {
    sign = "-"
    display.textContent = num1 + sign
})

multi.addEventListener("click", () => {
    sign = "*"
    display.textContent = num1 + sign
})

division.addEventListener("click", () => {
    sign = "/"
    display.textContent = num1 + sign
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



let dot = document.querySelector(".dot")
dot.addEventListener("click", () => {
    if (sign === null) {
        if (num1 === null) {
            num1 = '0.';
        } else if (!num1.toString().includes('.')) {
            num1 += '.';
        }
        display.textContent = num1;
    } else {
        if (num2 === null) {
            num2 = '0.';
        } else if (!num2.toString().includes('.')) {
            num2 += '.';
        }
        display.textContent = num2;
    };
});


let ac = document.querySelector(".AC")
ac.addEventListener("click", () => {
    num1 = 0
    num2 = 0
    sign = null
    display.textContent = 0
})















