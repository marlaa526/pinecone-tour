// 1. Print every element of the array, each on its own line.
const fruits = ["apple", "banana", "cherry"];
function print_fruits(a){
    for (let i = 0; i < a.length; i++){
        console.log(a[i])
    }
}
print_fruits(fruits)
// Expected:
//   apple
//   banana
//   cherry
// your code here


// 2. Add up all the numbers and print the total.
const nums = [4, 8, 15, 16, 23, 42];
function sum(a){
    let sum = 0
    for (let i = 0; i < a.length; i++){
        sum += a[i];
    }
    console.log(sum)

}
sum(nums)

// Expected: 108
// your code here


// 3. Count how many numbers in the array are even, and print the count.
const values = [3, 6, 9, 12, 15, 18];
function check_even_odd(a){
    let sum = 0
    for (let i = 0; i < a.length; i++){
        if (a[i] % 2 == 0){
            sum += 1;
        }
    }
    console.log(sum)

}
// Expected: 3
// your code here


// 4. Find and print the largest number in the array.
const scores = [42, 17, 99, 23, 56];
function max_num(a){
    let max_n = a[0];
    for (let i = 1; i < a.length; i++){
        if (a[i] > max_n){
            max_n = a[i]
        }
    }
    console.log(max_n)

}
max_num(scores)
// Expected: 99
// your code here


// 5. Find the smallest number AND the index where it sits.
//    Print:  smallest <value> at index <i>
const temps = [12, 5, 8, 3, 20];
function min_num(a){
    let min_n = a[0];
    let index = 0;
    for (let i = 1; i < a.length; i++){
        if (a[i] < min_n){
            min_n = a[i]
            index = i;
        }
    }
    console.log("smallest", min_n, "at index", index)

}
min_num(temps)

// Expected: smallest 3 at index 3
// your code here


// 6. Build a NEW array where every number is doubled, then print it.
let base = [1, 2, 3, 4];
function double_num(a){
    for (let i = 0; i < a.length; i++){
        a[i] *= 2;
    }
    console.log(a)
}
double_num(base)
// Expected: [ 2, 4, 6, 8 ]
// your code here


// 7. Count how many times the target value appears in the array.
const items = [1, 2, 2, 3, 2, 4];
const target = 2;
function target_num(a, b){
    let sum = 0;
    for (let i = 0; i < a.length; i++){
        if (a[i] == b){
            sum += 1;
        }
    }
    console.log(sum)
}
// Expected: 3
// your code here


// 8. Calculate and print the average of the numbers.
const data = [10, 20, 30, 40];
function av_num(a){
    let sum = 0;
    for (let i = 0; i < a.length; i++){
        sum += a[i];
    }
    console.log(sum/a.length)
}
// Expected: 25
// your code here


// 9. Build a NEW array containing only the numbers greater than 10,
//    then print it.
const list = [5, 12, 8, 20, 3, 15];
function new_list(a){
    let b = []
    for (let i = 0; i < a.length; i++){
        if (a[i] > 10){
            b.push(a[i])
        }
    }
    console.log(b)
}
new_list(list)
// Expected: [ 12, 20, 15 ]
// your code here


// 10. Reverse the array into a NEW array WITHOUT using .reverse().
//     Then print the new array.
const letters = ["a", "b", "c", "d"];
function reverse_list(a){
    let b = []
    for (let i = a.length- 1; i > -1; i--){
        b.push(a[i])
    }
    console.log(b)
}
reverse_list(letters)
// Expected: [ 'd', 'c', 'b', 'a' ]
// your code here