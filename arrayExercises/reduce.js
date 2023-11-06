// 1. Group people by age
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 }
];

function grouping(obj, prop) {
    return obj.reduce(function (acc, cur) {
        let key = cur[prop];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(cur);
        return acc;
    }, {});
}

let grouped = grouping(people, "age");
// console.log(grouped);



//   2 . Given an array of words, group them by their 
// length and count how many words have each length.

const words = ["apple", "banana", "cat", "dog", "elephant", "fox"];

function countLength (arr){
    return words.reduce((acc, cur) => {
        let key = cur.length;
        if (!acc[key]) {
            acc[key] = 0;
        }
        acc[key]++;
        return acc;
    }, {});
}

console.log(countLength(words));


// 3. You are given a two-digit integer n. Return the sum of its digits.

function sumOfDigits(num) {
    let str = String(num);
    let sum = str.split('').reduce((acc, cur) =>
        acc + Number(cur), 0)
    return sum;
}
// console.log(sumOfDigits(19));








//Given array of numbers , find max number in array and print it

const numbers = [5, 89, 46, 21, 560, 1045];
const max = numbers.reduce((max, num) => {
    if (num > max) {
        return num
    } else {
        return max
    }


}, numbers[0]);
// console.log(max);




//Given Array of string , write a function that concatenates all strings in an array

const str = ['ant', 'an', 'ana', 'ri', 'vu']
const word = str.reduce((acc, el) => acc.concat(el), str[0]);

// console.log(word);




//Write a function that flattens a nested array

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flat = arr.reduce((acc, el) => acc.concat(el), []);

// console.log(flat);


//GIven Array of numbers. Write a function that calculates the sum of all numbers in an array

const nums = [45, 26, 89, 105, 260, 488];
const summa = nums.reduce((acc, cur) => acc + cur, 0);

// console.log(summa);
