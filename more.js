// 1. FizzBuzz. Loop from 1 to 20 and print:
//    "Fizz" if divisible by 3, "Buzz" if divisible by 5,
//    "FizzBuzz" if divisible by BOTH, otherwise the number itself.
//    Hint: check the BOTH case first.
// Expected: 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14
//           FizzBuzz 16 17 Fizz 19 Buzz   (each on its own line)
// your code here
function fizz(a){
    for (let i = 1; i < 21; i++){
        if (i % 3 ==0 && i % 5 == 0){
            console.log("fizzbuzz")
        } else if ( i % 5 == 0){
            console.log('buzz')
        } else if (i % 3 ==0 ){
            console.log('fizz')
        }
    }
}
fizz()

// 2. Add up ONLY the even numbers in the array and print the total.
const nums = [4, 7, 10, 13, 6, 9];
function even_sum(a){
    let sum = 0
    for (let i =0; i < a.length; i++){
        if (a[i] % 2==0){
            sum += a[i]
        }
    }
    console.log(sum)
}
// Expected: 20
// your code here


// 3. In a SINGLE loop, count how many numbers are positive,
//    negative, and zero. Print all three counts.
const values = [3, -1, 0, 8, -5, 0, 2];
function po_ne_ze(a){
    let x = 0
    let y = 0
    let z = 0
    for (let i = 0; i < a.length; i++){
        if (a[i] > 0){
            x += 1;
        } else if (a[i] < 0){
            y += 1;
        } else {
            z += 1;
        }
    }
    console.log('positive', x, 'negative', y, 'zero', z)
}
// Expected: positives 3, negatives 2, zeros 2
// your code here


// 4. Find the largest EVEN number in the array and print it.
//    (Ignore odd numbers completely.)
const data = [3, 8, 5, 12, 7, 10];
function max_even(a){
    let even = []
    for (let i = 0; i < a.length; i++){
        if (a[i] % 2==0){
            even.push(a[i])
        }
    }
    let max = even[0]
    for (let i = 1; i < even.length; i++){
        if (max < even[i] ){
            max = even[i]
        }
    }
    console.log(max)
}
// Expected: 12
// your code here


// 5. Check whether the array is sorted in ascending order.
//    Print true or false.
//    Hint: compare each element with the one before it.
const arr = [1, 3, 5, 7, 9];
function sorted(a){
    let sort = []
    let min = a[0]
    for (let i = 1; i < a.length; i++){
        if (min > a[i]){
            min = a[i]
        }
    }
    sort.push(min)
    for (let i = 1; i < a.length; i++){
        if (sort[0] > a[i]){
            sort.unshift(a[i])
        } else {
            sort.push(a[i])
        }
    }
    console.log(sort)
    let sum = 0
    for (let i = 0; i < a.length; i++){
        if (a[i] === sort[i]){
            sum += 1;
        }
    }
    if (sum === a.length){
        return 'true'
    } else {
        return 'false'
    }
    
}
console.log(sorted(arr))
// Expected: true
// your code here


// 6. Find the SECOND largest number in the array and print it.
//    Hint: track two variables — largest and secondLargest —
//    and update them as you go.
const scores = [42, 17, 99, 23, 56];
function max_sec(a){
    let max = a[0]
    for (let i = 1; i < a.length; i++){
        if (max < a[i] ){
            max = a[i]
        }
    }
    let max1 = a[0]
    for (let i = 1; i < a.length; i++){
        if (a[i] === max){
            a[i] = 0;
        }
        if (max1 < a[i] ){
            max1 = a[i]
        }
    }
    console.log(max1)


}
max_sec(scores)
// Expected: 56
// your code here


// 7. Count how many numbers fall within the range 10 to 50 inclusive.
//    (Use a range check: n >= 10 && n <= 50)
const list = [5, 12, 50, 9, 33, 60, 10];
function check(a){
    let sum = 0
    for (let i = 0; i < a.length; i++){
        if (a[i] >= 10 && a[i] <= 50 ){
            sum += 1;
        }
    }
    return sum;
}
console.log(check(list))
// Expected: 4
// your code here


// 8. Find the longest word in the array and print it.
//    Hint: track the longest word seen so far using .length.
const words = ["sun", "banana", "cat", "elephant", "dog"];
function longest_word(a){
    let max = a[0].length
    let max_word = 0;
    for (let i = 1; i < a.length; i++){
        if (a[i].length > max){
            max = a[i].length
            max_word = a[i]
        }
    }
    return max_word;
}
console.log(longest_word(words))
// Expected: elephant
// your code here


// 9. Count vowels and consonants in the string (letters only).
//    Print both counts.
const text = "javascript";
function count(a){
    let v = 0
    let c = 0
    for (let i = 0; i < a.length; i++){
        if (a[i]==='a' || a[i]==='e' || a[i]==='o' || a[i]==='i' || a[i]==='u'){
            v += 1;
        } else {
            c += 1;
        }
    }
    let text1 = []
    text1.push('vowals')
    text1.push(v)
    text1.push('consonants')
    text1.push(c)
    return text1;
}
console.log(count(text))


// Expected: vowels 3, consonants 7
// your code here


// 10. Remove duplicates: build a NEW array containing each value
//     only once, keeping first-seen order. Print it.
//     Hint: before adding a value, loop through your new array to
//     check if it's already in there.
const items = [1, 2, 2, 3, 4, 4, 2, 4, 5];
function set_item(a){
    let setItems = []
    for (let i = 0; i < a.length; i++){
        let isHere = false
        for (let j = 0; j<setItems.length; j++){
            
            if (a[i] === setItems[j]){
                isHere = true
                break;
            }
        }
        if (!isHere){
            setItems.push(a[i])
        }
    }
    return setItems
}
console.log(set_item(items))
// for (let i = 0; i < a.length; i++){
    //     if (a[i] == a[i+1]){
    //         a[i] = 0;
    //     }
    // }
    // for (let i = 0; i < a.length; i++){
    //     if (a[i] != 0){
    //         setItems.push(a[i])
    //     }
    // }
    // return setItems


// Expected: [ 1, 2, 3, 4, 5 ]
// your code here 