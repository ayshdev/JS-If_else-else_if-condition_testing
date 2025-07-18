// ex 1
let char = prompt("Exercise 1: \n Enter a single character and check the console to know the type.");
let charCode = char.charCodeAt(0);

if (char.length !== 1) {
  alert("Exercise 1: \n Please enter a single character.");
} else if (charCode >= 48 && charCode <= 57) {
  console.log("Exercise 1: \n Your character is a number.");
} else if (charCode >= 65 && charCode <= 90) {
  console.log("Exercise 1: \n Your character is an uppercase letter.");
} else if (charCode >= 97 && charCode <= 122) {
  console.log("Exercise 1: \n Your character is a lowercase letter.");
} else {
  alert("Exercise 1: \n Your character is not a number or letter.");
}

// ex 2

let num1 = +prompt("Exercise 2: \n Enter the first number to be checked.");

if (isNaN(num1)) {
    alert("Exercise 2: \n Please enter a valid number.");
} else {
    let num2 = +prompt("Exercise 2: \n Enter the second number to be checked and check console to know which is greater.");
    if (isNaN(num2)) {
    alert("Exercise 2: \n Please enter a valid number.");
    } else if (num1 > num2) {
    console.log("Exercise 2: \n First number is greater than the second.");
} else if (num2 > num1) {
    console.log("Exercise 2: \n Second number is greater than the first.");
} else if (num1 === num2 ) {
    console.log("Exercise 2: \n Both numbers are equal.");
}
}
    
