
// Task 1: Identifying Legal and Illegal Variable Names 

// a) myVariable: Legal 
// b) 123variable: Illegal (variable names cannot start with a number) 
// c) _special: Legal 
// d) first name: Illegal (variable names cannot contain spaces) 
// e) 7eleven: Illegal (variable names cannot start with a number) 
// f) $price: Illegal (variable names cannot start with a special character) 
// g) your-variable: Illegal (variable names cannot contain hyphens)


// Task 2: Assignment Operators 


javascript
let total = 10;
total += 5; // total is now 15
total -= 3; // total is now 12
total *= 2; // total is now 24
console.log(total); // Output: 24

// Task 3

var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");
var sum = num1 + num2;
console.log("The sum of the two numbers is: " + sum);

// Task 4: String Concatenation


var title = "The Catcher in the Rye";
var author = "J.D. Salinger";
var year = 1951;
console.log("The book '" + title + "' by " + author + " was published in " + year + ".");


// Task 5: Checking Even or Odd


let num = prompt("Enter a number:");

if (num % 2 === 0) {
 console.log(num + " is even.");
} else {
 console.log(num + " is odd.");
}

// 6. Grade Calculation 

let score = prompt("Enter your exam score (out of 100):");

if (score >= 90) {
 console.log("Your grade is A.");
} else if (score >= 80) {
 console.log("Your grade is B.");
} else if (score >= 70) {
 console.log("Your grade is C.");
} else if (score >= 60) {
 console.log("Your grade is D.");
} else {
 console.log("Your grade is F.");
}


let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");
if (num1 >= num2 && num1 >= num3) {
    console.log(num1 + " is the maximum.");
} else if (num2 >= num1 && num2 >= num3) {
    console.log(num2 + " is the maximum.");
} else {
    console.log(num3 + " is the maximum.");
}

// Task 08

let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log("The sum of all even numbers from 1 to 100 is: " + sum);

// Task 9: Output ? 

// 1) a = 5, b= 3, c = 7, result = 2 
// 2) a = 2, b= 2, c = 1, result = 2 
// 3) a = 3, b= 4, c = 6, result = 5 
// 4) a = 11, b= 4, c = 7, result = 13 
// 5) a = 3, b= 5, c = 1, result = 4 
// 6) a = 2, b= 5, c = 4, result = 7 
// 7) a = 8, b= 0, c = 1, result = 10 
// 8) a = 2, b= 4, c = 8, result = 11 
// 9) a = 5, b= 4, c = 2, result = 6 
// 10) a = 11, b= 4, c = 7, result = 15 

// TASK 10 :

// 1. console.log(undefined && false); 
// Output: false

// 2. console.log(true && false); 
// Output: false

// 3. console.log(true && undefined); 
// Output: undefined

// 4. console.log(undefined && undefined); 
// Output: undefined

// 5. console.log('undefined' || 'true'); 
// Output: 'true'

// 6. console.log(null || 'true'); 
// Output: 'true'

// 7. console.log(null || undefined); 
// Output: undefined

// 8. console.log(null && true || false); 
// Output: false

// 9. console.log(null && true || false && true); 
// Output: false

// 10. console.log(null && true || true && true); 
// Output: true

// 11. console.log((null && true) || (true && 1)); 
// Output: 1
