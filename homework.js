// Task 1
// Create a function that takes an array of numbers and return both the minimum and 
// maximum numbers, in that order

function minMax(arr) {
    let tempAr = [];
    for (let i = 0; i < arr.length; i++) {
        for (j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        tempAr.push(arr[i])
    } return [tempAr[0], tempAr[tempAr.length - 1]]
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
    let tempAr1 = [];
    for (let i = 0; i < arr1.length; i++) {
        for (j = i; j < arr1.length; j++) {
            if (arr1[i] > arr1[j]) {
                let temp1 = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = temp1;
            }
        }
        tempAr1.push(arr1[i])
    }
    let tempAr2 = [];
    for (let i = 0; i < arr2.length; i++) {
        for (j = i; j < arr2.length; j++) {
            if (arr2[i] > arr2[j]) {
                let temp2 = arr2[i];
                arr2[i] = arr2[j];
                arr2[j] = temp2;
            }
        }
        tempAr2.push(arr2[i])
    }
    return (tempAr1[0] > tempAr2[0] && tempAr1[tempAr1.length - 1] < tempAr2[tempAr2.length - 1])
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
    for (let i = 0; i < arr.length; i++) {
        for (j = i; j < arr.length - i - 1; j++) {
            if (arr[i].length > arr[j + 1].length) {
                let temp = arr[i];
                arr[i] = arr[j + 1];
                arr[j + 1] = temp;

            }
        }
        return arr;
    }
}


const array4 = ["Google", "Apple", "Microsoft"];
const array5 = ["Leonardo", "Michelangelo", "Raphael", "Donatello"];
// console.log(sortByLength(array4));
// console.log(sortByLength(array5));


// Task 4 
// Create a function that takes a number as an argument and returns the highest digit in 
// that number
function highestDigit(num) {
   let highest = 0;
   const str = String(num);
   for(let i = 0; i < str.length; i++){
    const digit = parseInt(str[i]);
    if(digit > highest){
        highest = digit;
    }
   } return highest;
}

const number1 = 379;
const number2 = 2;
// console.log(highestDigit(number1));
// console.log(highestDigit(number2));