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
    
// ex 3

let number = +prompt("Exercise 3: \n Enter a number and check console to know if it is positive, negative or zero.");

if (isNaN(number)) {
    alert("Exercise 3: \n Please enter a valid number.");
} else if (number>0) {
    console.log("Exercise 3: \n Your number is positive.");
} else if (number<0) {
    console.log("Exercise 3: \n Your number is negative.");
}  else if (number===0) {
    console.log("Exercise 3: \n Your number is zero.");
}


// ex 4

let char1 = prompt("Exercise 4: \n Enter a alphabet and check console to know if it's a vowel.");

if (char1.length !== 1) {
    alert("Exercise 4: \n Please enter a single character.");
} else if (char1=== 'a' ||char1=== 'e' ||char1=== 'i' ||char1=== 'o' ||char1=== 'u') {
    console.log("Exercise 4: \n True. Your alphabet is a vowel.");
} else {
    console.log("Exercise 4: \n False. Your alphabet is not a vowel.");
}

// ex 5

let p1 = 12345;

let p2 = +prompt("Exercise 5: \n Enter your password. \n (Hint: Correct password is 12345.)");

if (p2 == null || p2 == "") {
    alert("Exercise 5: \n Please enter your password.");
} else if (p2 === p1) {
    console.log("Exercise 5: \n Correct! The password you entered matches the original password.");
} else {
    console.log("Exercise 5: \n Incorrect password.");
    
}

// ex 6

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
} else{
greeting = "Good evening";
}
console.log("Exercise 6: \n" + greeting);

// ex 7

let input = prompt("Exercise 7: \n Enter your time in 24-hr format. \n i.e. 1900 (7pm).");

if (input === null || isNaN(+input) || input.length !== 4) {
    alert("Exercise 7: \n Please enter your time in valid 4-digit 24-hr format.");
} else {
    let time = +input;

    if (time >= 0 && time < 1200) {
        console.log("Exercise 7: \n Good Morning!");
    } else if (time >= 1200 && time < 1700) {
        console.log("Exercise 7: \n Good Afternoon!");
    } else if (time >= 1700 && time < 2100) {
        console.log("Exercise 7: \n Good Evening!");
    } else if (time >= 2100 && time <= 2359) {
        console.log("Exercise 7: \n Good Night!");
    } else {
        alert("Exercise 7: \n Please enter a time between 0000 and 2359.");
    }
}
