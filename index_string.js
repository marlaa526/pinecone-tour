// 1. Print each character of the word on its own line.
const word = "code";
for (let i = 0; i < 4; i++){
    console.log(word[i])
}
// Expected:
//   c
//   o
//   d
//   e
// your code here


// 2. Count the characters using a loop (increment a counter).
//    Do NOT just print .length — count them one by one.
const text = "javascript";
console.log(text.length)
// Expected: 10
// your code here


// 3. Count how many vowels (a, e, i, o, u) are in the string.
const phrase = "education";
let sum = 0;
for (let i = 0; i < phrase.length; i++){
    if (phrase[i] == 'a' || phrase[i] == 'e' || phrase[i] == 'i' || phrase[i] == 'o' || phrase[i] == 'u'){
        sum += 1;
    }
}
console.log(sum)
// Expected: 5
// your code here


// 4. Count how many times the letter "a" appears.
const sentence = "banana";
let sum1 = 0;
 for (let i = 0; i < 6; i++){
    if (sentence[i] == 'a'){
        sum1 += 1;
    }
 }
 console.log(sum1)
// Expected: 3
// your code here


// 5. Reverse the string into a NEW string (don't use a built-in reverse).
//    Build it character by character, then print it.
const name = "elbeg";
console.log(reverse(name))
// Expected: geble
// your code here


// 6. Build a NEW string with all the spaces removed, then print it.
const spaced = "h e l l o";
let space = []
for (let i = 0; i < 5; i++){
    space.push(spaced[i]);
}
console.log(space)
// Expected: hello
// your code here


// 7. Build a NEW string where every space is replaced with a dash "-".
const title = "learn java script";
let title1 = title.split(" ").join('-')
console.log(title1)

// Expected: learn-java-script
// your code here


// 8. Check if the word is a palindrome (reads the same forwards and
//    backwards). Print true or false.
const candidate = "level";
let palindrome = []
let sum2 = 0
for (let i = candidate.length - 1; i > -1 ; i--){
    palindrome.push(candidate[i])
}
for (let i = 0; i < candidate.length; i++){
    if (candidate[i] === palindrome[i]){
    sum2 += 1;
    } 
}
if (sum2 === candidate.length){
    console.log('true')
} else {
    console.log('false')
}

// Expected: true
// your code here


// 9. Count how many words are in the sentence.
//    Hint: words are separated by spaces.
const line = "I love javascript a lot";
let text1 = line.split(' ')
console.log(text1.length)
// Expected: 5
// your code here


// 10. Count how many UPPERCASE letters are in the string.
//     Hint: a character ch is uppercase when  ch >= "A" && ch <= "Z"
const mixed = "HelloWorldJS";
console.log(mixed.toUpperCase())
// Expected: 4
// your code here