
// if (a > 0 && a < 6){
//     console.log("tsetserleg")
// } else if ( a > 5 && a < 18) {
//     console.log("surguuli")
// } else if (a > 17 && a < 22){
//     console.log("oyutan")
// } else {
//     console.log("GG")
// }


// function even_odd(a){
//     if (a%2==0){
//         return "even";
//     } else {
//         return "odd";
//     }
// }
// const result = even_odd(a)
// console.log(result)


/* ========================= EASY ========================= */

// E1. A person can enter the club only if age is 18 or older
//     AND hasID is true. Print "Welcome" or "Denied".
const age1 = 20;
const hasID = true;
if (age1 > 18 && hasID === true){
    console.log("welcome")
} else {
    console.log("Denied")
}
// Expected: Welcome
// your code here


// E2. It is a day off if isWeekend is true OR isHoliday is true.
//     Print "Day off" or "Work day".
const isWeekend = false;
const isHoliday = true;
if (isWeekend === true || isHoliday === true){
    console.log("Day off")
} else {
    console.log("Work Day")
}
// Expected: Day off
// your code here


// E3. Go to the beach only if temperature is above 30 AND isSunny.
//     Print "Beach" or "Stay home".
const temperature = 33;
const isSunny = true;
if (temperature > 29 && isSunny){
    console.log("Beach")
} else {
    console.log("Stay home")
}
// Expected: Beach
// your code here


// E4. Grant admin access if username is "admin" OR username is "root".
//     Print "Admin access" or "Regular user".
const username = "root";
if (username === "admin" || username === "root"){
    console.log("Admin access")
} else {
    console.log("Regular user")
}
// Expected: Admin access
// your code here


// E5. A number is "good" if it is positive (> 0) AND even (n % 2 === 0).
//     Print "Good" or "Not good".
const number = 8;
if ( number > 0 && number % 2 === 0){
    console.log("Good")
} else {
    console.log("Not good")
}
// Expected: Good
// your code here


/* ======================== MEDIUM ======================== */
/* Combine && and || together, or chain several conditions. */

// M1. Login succeeds if the username is "elbeg" AND password is "1234".
//     Print "Login OK" or "Wrong credentials".
const user = "elbeg";
const password = "1234";
if (user === "elbeg" && password === "1234"){
    console.log("Login OK")
} else {
    console.log("Wrong credentials")
}
// Expected: Login OK
// your code here


// M2. A customer gets a discount if they are a member (isMember)
//     OR they spent more than 100000.
//     Print "Discount" or "Full price".
const isMember = false;
const totalSpent = 120000;
if (isMember || totalSpent > 100000){
    console.log("Discount")
} else {
    console.log("Full price")
}
// Expected: Discount
// your code here


// M3. Entry is free if age is under 5 OR over 65. Otherwise paid.
//     Print "Free" or "Paid".
const age3 = 70;
if (age3 < 6 || age3 > 65){
    console.log("Free")
} else {
    console.log("Paid")
}
// Expected: Free
// your code here


// M4. A person may drive only if ALL are true:
//     age is 18+, hasLicense is true, AND isSober is true.
//     Print "Can drive" or "Cannot drive".
const age4 = 25;
const hasLicense = true;
const isSober = false;
if (age4 > 18 && hasLicense && isSober){
    console.log("Can drive")
} else {
    console.log("Cannot drive")
}
// Expected: Cannot drive
// your code here


// M5. Bring an umbrella if it isRaining,
//     OR if it isCloudy AND humidity is above 80.
//     Print "Umbrella" or "No umbrella".
const isRaining = false;
const isCloudy = true;
const humidity = 85;
if (isRaining === true || isCloudy === true && humidity > 80 ){
    console.log("umbrella")
} else {
    console.log("no umbrella")
}
// Expected: Umbrella
// your code here


/* ========================= HARD ========================= */
/* Operator precedence, ranges, and multi-part logic.
   Tip: when mixing && and ||, use parentheses to be explicit. */

// H1. Leap year. A year is a leap year if:
//     it is divisible by 4 AND not by 100,
//     OR it is divisible by 400.
//     Print "Leap year" or "Not a leap year".
//     After it works, mentally test: 1900 (no), 2000 (yes), 2023 (no).
const year = 2024;
if (year % 4 == 0 || year % 400 == 0) {
    console.log("a leap year")
} else {
     console.log("not leap year")
}
// Expected: Leap year
// your code here


// H2. A grade is "valid B" if score is at least 80 AND below 90.
//     Print "Grade B" or "Not B".
const score = 84;
if (score > 80 && score < 90){
    console.log("grade b")
} else {
    console.log("not b")
}
// Expected: Grade B
// your code here


// H3. Access the control panel only if the user isLoggedIn
//     AND (role is "admin" OR role is "moderator").
//     Print "Access granted" or "Access denied".
const isLoggedIn = true;
const role = "moderator";
if (isLoggedIn === true && role === "moderator" || role === "admin" ){
    console.log("Access granted")
} else {
    console.log("Access denied")
}
// Expected: Access granted
// your code here


// H4. Three side lengths form a valid triangle only if EVERY pair
//     of sides sums to more than the third side:
//     a+b > c AND b+c > a AND a+c > b.
//     Print "Valid triangle" or "Invalid triangle".
const a = 3;
const b = 4;
const c = 5;
if (a + b > c && b + c > a && a + c > b ) {
    console.log("Valid triangle")
} else {
    console.log("Invalid triangle")
}
// Expected: Valid triangle
// your code here


// H5. A password is "strong" if its length is at least 8
//     AND it contains a number OR a symbol.
//     (hasNumber and hasSymbol are given as booleans.)
//     Print "Strong" or "Weak".
const pwLength = 10;
const hasNumber = false;
const hasSymbol = true;
if (pwLength > 8 && hasNumber === true || hasSymbol === true){
    console.log("strong")
} else {
    console.log("weak")
}
// Expected: Strong
// your code here
