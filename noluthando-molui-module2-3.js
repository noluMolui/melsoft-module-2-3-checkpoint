
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


// CHALLENGE 2 — Type Conversion


let testValues = ["123", "3.14", "hello", "42abc", "", 0, null, undefined];

for (let i = 0; i < testValues.length; i++) {
  let val = testValues[i];
  console.log("Value:", val);
  console.log("Number:", Number(val));
  console.log("parseInt:", parseInt(val));
  console.log("parseFloat:", parseFloat(val));
  console.log("Boolean:", Boolean(val));
  console.log("String:", String(val));
}

//  Number('42abc') gives NaN because of letters, but parseInt stops at the letter and gives 42.

// CHALLENGE 3 — Operators
// ==========================================

// Salary math
let grossSalary = 45000;
let tax = grossSalary * 0.25;
let uif = grossSalary * 0.01;
let medical = 2500;
let net = grossSalary - (tax + uif + medical);
console.log("Net salary:", net);

// Shopping cart 
let cartTotal = 0;
cartTotal += 150;
cartTotal += 85;
cartTotal += 220;
cartTotal *= 0.9;
cartTotal *= 1.15;
console.log("Cart total:", cartTotal);

// Signup check
let userAge = 20;
let pass = "Mol677667";
let email = "nolu@gmail.com";
let confirmEmail = "nolu@gmail.com";
let isValid = userAge >= 18 && pass.length >= 8 && email === confirmEmail;
console.log("Form valid:", isValid);

// Logical & Unary
// 1. The "AND" Check
let loggedIn = true;
let verified = true;
let access = loggedIn && verified; // true

// 2. The Number Translator 
let strNumber = "25";
let converted = +strNumber; // 25 (as a real number)

// 3. The Light Switch
let darkMode = false;
darkMode = !darkMode; // now it becomes true

// Ternary
let membership = "premium";

// A lookup list to match the membership name to its badge
let badges = {
  premium: "Premium Member",
  trial: "Trial Member",
  free: "Free Member"
};

// Look up the badge, or default to "Free Member" if it's not found
let badge = badges[membership] || "Free Member";

console.log("Badge:", badge);

