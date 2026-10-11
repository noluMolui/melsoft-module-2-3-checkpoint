
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



// CHALLENGE 11 —  (Fixed Code)


let item1Price = Number("199.99");
let item2Price = Number("49.50");
let item3Price = Number(125);
let quantity = Number("2");
let discountCode = "SAVE10";
let isLoggedInUser = true;
let customerAge = 25;

let subtotal = (item1Price + item2Price + item3Price) * quantity;
let discount = discountCode === "SAVE10" ? 0.1 : 0;
let discountAmount = subtotal * discount;
let afterDiscount = subtotal - discountAmount;
let vat = afterDiscount * 0.15;
let total = afterDiscount + vat;

let canCheckOut = isLoggedInUser && customerAge > 18;
let seniorDiscount = customerAge >= 60 ? total * 0.05 : 0;
let finalTotal = total - seniorDiscount;

console.log("Final Total: R" + finalTotal.toFixed(2));

// CHALLENGE 9 — Payroll & Banking

// turns the text "45000" into a real number.
let grossInput = "45000";
let sal = Number(grossInput);
let taxAmt = sal * 0.25;

let uifAmt = Math.min(sal * 0.01, 177.12);

// flat medical aid fee
let medAid = 2500;

// 7.5% going to pension
let pension = sal * 0.075;

let netSalary = sal - (taxAmt + uifAmt + medAid + pension);

// print it out, toFixed(2) makes sure it shows two decimal places for cents
console.log("Calculated Net Salary:", netSalary.toFixed(2));


let principal = 25000;      // starting money
let annualRate = 0.075;   // 7.5% interest per year
let n = 12;               // compounded monthly (12 times a year)
let t = 3;                // leaving it in there for 3 years

let compoundBal = principal * ((1 + (annualRate / n)) ** (n * t));
console.log("Compound balance:", compoundBal.toFixed(2));

// changing rands to dollars
let zar = 15750.33;      
let rate = 18.42;  

// bank takes a 2.5% fee first
let fee = zar * 0.025;
// take the fee off rands, then divide by the exchange rate to get dollars
let usd = (zar - fee) / rate;
console.log("USD received:", usd.toFixed(2));
