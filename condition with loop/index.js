// 1
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// 2

// let n = parseInt(prompt("Enter a number:"));
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum += i;
// }

// console.log("The sum of the first " + n + " natural numbers is: " + sum);


// 3

// let num = 5;

// for (let i = 1; i <= 10; i++) {
//     console.log(num + " x " + i + " = " + (num * i));
// }


// 4

// let n = 5; 
// let fact = 1;

// for (let i = 1; i <= n; i++) {
//     fact *= i;
// }

// console.log("Factorial of " + n + " is " + fact);

// 5

// let num = 7; 

// if (num % 2 === 0) {
//     console.log(num + " is Even");
// } else {
//     console.log(num + " is Odd");
// }

// 6

// let num = 12345;  
// let reverse = 0;

// while (num > 0) {
//     let digit = num % 10;       
//     reverse = reverse * 10 + digit; 
//     num = Math.floor(num / 10);  
// }

// console.log(reverse);


// 7

// for (let i = 1; i <= 5; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += "*";
//     }
//     console.log(pattern);
// }

// 8

// let num = 12345; 
// let count = 0;
// let temp = num;

// while (temp > 0) {
//     temp = Math.floor(temp / 10); 
//     count++;                     
// }

// console.log("Number of digits in " + num + " is " + count);

// 9

// let num = 17; 
// let isPrime = true;

// if (num <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// if (isPrime) {
//     console.log(num + " is a prime number");
// } else {
//     console.log(num + " is not a prime number");
// }



var a = true;
var b = true;
var c = a && b;
console.log(c);

a = true;
b = false;
console.log(a && b);

a = false;
b = true;
console.log(a && b);

a = false;
b = false;
console.log(a && b);

