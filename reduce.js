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
