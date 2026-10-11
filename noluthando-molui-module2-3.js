
// CHALLENGE 1 — Variables and Types


const fullName = "Noluthando Molui";
let age = 23;
const likesJavaScript = true;
const roomTemp = 22.5;
const notANumber = Number("abc");
const infinityVal = 1 / 0;
const maxNum = Number.MAX_SAFE_INTEGER;
const emptyVal = null;
let unassigned;
let intro = "My name is " + fullName + " and I am " + age + " years old.";

console.log(intro);

// typeof checks
console.log(typeof fullName);
console.log(typeof age);
console.log(typeof likesJavaScript);
console.log(typeof roomTemp);
console.log(typeof notANumber);
console.log(typeof infinityVal);
console.log(typeof maxNum);
console.log(typeof emptyVal);
console.log(typeof unassigned);
console.log(typeof intro);

// Odd typeof cases
console.log(typeof null); // returns object 
console.log(typeof NaN); // returns number
console.log(typeof undefined);
console.log(typeof "42");
console.log(typeof (typeof 42));
console.log(typeof [1, 2, 3]); // returns object
console.log(typeof function() {});
