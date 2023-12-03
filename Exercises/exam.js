// Task 1
// Create a function that takes an array of numbers and return both the minimum and 
// maximum numbers, in that order

function minMax(arr) {
    const sorted = arr.sort(function (a, b) { return a - b });
    console.log(sorted);
    return newArr = [sorted[0], sorted[sorted.length - 1]]
}
const array1 = [1, 22, 5, 7, 3];
// console.log(minMax(array1));


// Task 2
// Create a function that returns true if the first array can be nested inside the second and 
// false otherwise.
// arr1 can be nested inside arr2 if:
// 1.arr1's min is greater than arr2's min.
// 2.arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
    const arr1Min = Math.min(...arr1);
    const arr1Max = Math.max(...arr1);
    const arr2Min = Math.min(...arr2);
    const arr2Max = Math.max(...arr2);
    if (arr1Min > arr2Min && arr1Max < arr2Max) {
        return true
    } else {
        return false
    }

}
const array21 = [1, 2, 3, 4];
const array22 = [0, 6]
const array31 = [1, 2, 3, 4]
const array32 = [2, 3];
// console.log(canNest(array21, array22));
// console.log(canNest(array31, array32));


// Task 3
// Create a function that takes an array of strings and return an array, sorted from shortest
// to longest.

function sortByLength(arr) {
    return arr.sort(function (a, b) {
        return a.length - b.length;
    });

}


const array4 = ["Google", "Apple", "Microsoft"];
const array5 = ["Leonardo", "Michelangelo", "Raphael", "Donatello"];
// console.log(sortByLength(array4));
// console.log(sortByLength(array5));


// Task 4 
// Create a function that takes a number as an argument and returns the highest digit in 
// that number

function highestDigit(num) {
    const arr = num.toString().split('');
    const sorted = arr.sort();
    return Number(sorted[sorted.length - 1]);

}
const number1 = 379;
const number2 = 2;
// console.log(highestDigit(number1));
// console.log(highestDigit(number2));

// Bonus

// Create a function that takes an array of character inputs from a Tic Tac Toe game. 
// Inputs will be taken from player1 as "X", player2 as "O", and empty spaces as "#". The 
// program will return the winner or tie results.

function TicTacToe(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (
                matrix[i][j] &&
                matrix[i][j] === matrix[i + 1][j + 1] &&
                matrix[i][j] === matrix[i + 2][j + 2]
            ) {
                return `The winner is ${matrix[i][j]}`;
            }
            if (
                matrix[i + 2][j] &&
                matrix[i + 2][j] === matrix[i - 1][j + 1] &&
                matrix[i + 2][j] === matrix[i - 2][j + 2]
            ) {
                return `The winner is ${matrix[i + 1][j]}`;
            }
            if (
                matrix[i][j] &&
                matrix[i][j] === matrix[i][j + 1] &&
                matrix[i][j] === matrix[i][j + 2]
            ) {
                return `The winner is ${matrix[i][j]}`;
            }
            if (
                matrix[i + 1][j] &&
                matrix[i][j] === matrix[i + 1][j + 1] &&
                matrix[i][j] === matrix[i + 1][j + 2]
            ) {
                return `The winner is ${matrix[i + 1][j]}`;
            }
            if (
                matrix[i + 2][j] &&
                matrix[i][j] === matrix[i + 2][j + 1] &&
                matrix[i][j] === matrix[i + 2][j + 2]
            ) {
                return `The winner is ${matrix[i + 2][j]}`;
            }
            if (
                matrix[i][j] &&
                matrix[i][j] === matrix[i + 1][j] &&
                matrix[i][j] === matrix[i + 2][j]
            ) {
                return `The winner is ${matrix[i][j]}`;
            }
            if (
                matrix[i][j + 1] &&
                matrix[i][j] === matrix[i + 1][j + 1] &&
                matrix[i][j] === matrix[i + 2][j + 2]
            ) {
                return `The winner is ${matrix[i][j + 1]}`;
            }
            if (
                matrix[i][j + 2] &&
                matrix[i][j] === matrix[i + 1][j + 2] &&
                matrix[i][j] === matrix[i + 2][j + 2]
            ) {
                return `The winner is ${matrix[i][j + 2]}`;
            }

        } return `No winner!`

    }
}

const mat1 = [
    ["X", "O", "O"],
    ["O", "X", "O"],
    ["O", "#", "X"]
]
const mat2 = [
    ["X", "O", "O"],
    ["O", "X", "O"],
    ["X", "#", "O"]
]
const mat3 = [
    ["X", "X", "O"],
    ["O", "X", "O"],
    ["X", "O", "#"]
]
const mat4 = [
    ["O", "#", "O"],
    ["X", "O", "O"],
    ["X", "X", "X"]
]
const mat5 = [
    ["O", "#", "O"],
    ["X", "O", "X"],
    ["O", "X", "X"]
]
// console.log(TicTacToe(mat1));
// console.log(TicTacToe(mat2));
// console.log(TicTacToe(mat3));
// console.log(TicTacToe(mat4));
// console.log(TicTacToe(mat5));  