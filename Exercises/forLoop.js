// 1. Print numbers from 1 to 10
for (let i = 1; i < 10; i++) {
    // console.log(i);
}

// 2. print numbers from 10 to 1
for (let i = 10; i > 0; i--) {
    // console.log(i);
}

// 3. Print numbers from 11 to 33
for (let i = 11; i <= 33; i++) {
    // console.log(i);
}

// 4. Print even numbers from 0 to 10

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        // console.log(i);
    }
}

// 5. Print odd numbers from 0 to 10
for (let i = 0; i < 10; i++) {
    if (i % 2 === 1) {
        // console.log(i);
    }
}

// 6. Print elements without the first and the last element
const arr = [1, 5, 4, 7, 9];
for (let i = 1; i < arr.length - 1; i++) {
    // console.log(arr[i]);
}

// 7. Print elements in reverse order
const arr1 = [1, 2, 3, 4, 5]
for (let i = arr.length - 1; i >= 0; i--) {
    // console.log(arr1[i]);
}

// 8.Print numbers that are greater than 3 and less than 10
const arr2 = [2, 5, 78, 53, 14, 9];
for (let elem of arr2) {
    if (elem > 3 && elem < 10) {
        // console.log(elem);
    }
}

// 9. Print the sum of numbers from 1 to 20
let result = 0;
for (let i = 1; i <= 20; i++) {
    result += i;
}
// console.log(result);


// 10. Print the product of numbers from 1 to 5
let res = 1;
for (let i = 1; i <= 5; i++) {
    res *= i
}
// console.log(res);

// 11. Print the sum of odd numbers of the given array
const arr3 = [2, 5, 9, 3, 1, 4];
let resul = 0
for (let elem of arr3) {
    if (elem % 2 === 1) {
        resul += elem;
    }
}
// console.log(resul);

// 12. print the sum of squareroots of numbers
let ard = 0;
for (let elem of arr3) {
    ard += elem * elem;
}
// console.log(ard);

// 13. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'
let str = '';
for (let i = 1; i <= 9; i++) {
    str += '-' + i;
}
// console.log(str);


// 14. Print the first digit of given numbers
for (let i = 25; i <= 31; i++) {
    let str = String(i);
    // console.log(str[0]);
}

// 15. Print the sum of first two digits of each number
let sum = 0;
for (let i = 22; i <= 27; i++) {
    let str = String(i);
    sum += Number(str[0]) + Number(str[1]);
    // console.log(sum);
}

// 16. Print the numbers if the sum of first two digit is 5
let summ = 0;
for (let i = 31; i < 36; i++) {
    let str = String(i);
    summ = Number(str[0]) + Number(str[1]);
    if (summ === 5) {
        // console.log(str[0]+str[1]);
    }
}

// 17. Check if there is any negative number in the given array

const z = [4, 5, 7, 9, -1, 3, 1];
for (let elem of z) {
    if (elem < 0) {
        // console.log(`Negative number`);
        break;
    }
}

// 18. Print the sum of numbers until the first negative number
let gum = 0;
for (let elem of z) {
    gum += elem;
    if (elem < 0) {
        // console.log(gum); 
        // console.log(`Stopped - negative number!!`);
        break;
    }
}

// 19.числа, которые делятся на 2, возведем в квадрат и выведем в консоль, 
// а числа, которые делятся на 3, возведем в куб и выведем в консоль.
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let elem of arr4) {
    let ardyunq;
    if (elem % 2 === 0) {
        ardyunq = elem * elem;
    } else if (elem % 3 === 0) {
        ardyunq = elem * elem * elem;
    } else {
        continue;
    }
    // console.log(ardyunq);
}


// 20. С помощью двух вложенных циклов выведите на экран следующую строку:
//      111222333444555666777888999
let stri = '';
for (i = 1; i <= 9; i++) {
    for (j = 1; j <= 3; j++) {
        stri += i;
    }
}
// console.log(stri);


// 21. С помощью двух вложенных циклов выведите на экран следующую строку:
//     11 12 13 21 22 23 31 32 33
let s = '';
for (i = 1; i <= 3; i++) {
    for (j = 1; j <= 3; j++) {
        s += `${i}${j} `;
    }
}
// console.log(s);


// 22. Дан массив с числами. Переберите его циклом и 
// запишите в новый массив только положительные из чисел.
const anArr = [4, 5, -7, 56, -9, 1, -3];
const newAr = [];
for (let elem of anArr) {
    if (elem > 0) {
        newAr.push(elem);
    }
}
// console.log(newAr);

// 23. Дан массив с числами. Переберите этот массив циклом и 
// возведите каждый элемент этого массива в квадрат.

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr5.length; i++) {
    arr5[i] *= arr5[i];
}
// console.log(arr5);


// 24. Даны два массива: первый с названиями дней недели, 
// а второй - с их порядковыми номерами.
// С помощью цикла создайте объект, 
// ключами которого будут названия дней, а значениями - их номера.

const arr6 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr7 = [1, 2, 3, 4, 5, 6, 7];

let obj = {};
for(i=0; i<7; i++){
    obj[arr6[i]] = arr7[i];

}
// console.log(obj);


// // 25.Переберите этот объект циклом и запишите в новый объект те элементы, 
// // которые являются четными числами.

const obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let newObj1 = {};
for (let key in obj1) {

    if (obj1[key] % 2 === 0) {
        newObj1[key] = `${obj1[key]}`;
    }
}
console.log(newObj1);                           


// 26.Переберите этот объект циклом и 
// возведите каждый элемент этого объекта в квадрат.

const obj2 = {x: 1, y: 2, z: 3};
for(let key in obj2){
obj2[key] = obj2[key]*obj2[key];
}
// console.log(obj2);

// 27. Проверьте, что в этом массиве есть элемент 'c'.
const arr61 = ['a', 'b', 'c', 'd', 'e'];
let flag = false;
for (let elem of arr61) {
    if (elem === 'c') {
        flag = true;
        break;
    }
}
if(flag === true){
    // console.log(`+++`);
} else {
    // console.log(`---`);
}

// 28. Возьмите из этого массива те элементы, 
// у которых первая цифра 1 или 2, и найдите их сумму.

const arr71 = [10, 20, 30, 40, 21, 32, 51];
let neww = 0;
for (let elem of arr71) {
    elem = String(elem);
    if (elem[0] === '1' || elem[0] === '2') {
        neww += Number(elem);
    }
}
// console.log(neww);

// 29. Print the sum of element which value start with 1 and 2.
let obj11 = { a: 10, b: 20, c: 30, d: 40, e: 50 };

let sum11 = 0;
for (let key in obj11) {
    let value = String(obj11[key]);
    if (value[0] === "1" || value[0] === "2") {
        let temp = value;
        sum11 += Number(temp);
        console.log(sum11);
    } 
}




// 30. Sort an array with for loop (from big to small )

const ar = [5, 7, 4, 6, 3, 1];

function sortBgSm(arr) {
    let tempAr = [];
    for (let i = 0; i < arr.length; i++) {
        for (j = i; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        tempAr.push(arr[i])
    } return tempAr;
}
// console.log(sortBgSm(ar));

// 31. Sort an array with for loop (from small to big )

function sortSmBg(arr) {
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
    } return tempAr;
}
// console.log(sortSmBg(ar));

// 32. Find the sum of numbers using for loop instead of reduce

function gumar(arr) {
    let ard = 0;
    for (let elem of arr) {
        ard += elem;
    } return ard;
}

// console.log(gumar(ar));

// 33. Filter an array with for loop

function filtering(arr, condition) {
    let filtered = [];
    for (i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            filtered.push(arr[i])
        }
    } return filtered;
}
const filterEvens = filtering(ar, (number) => number % 2 === 0);
//  console.log(filterEvens);

// 34. Split an array with for loop

function spliting(arr, str) {
    let tempor = [];
    for (i = 0; i < arr.length; i++) {
        if (str) {
            let tempor2 = [];
            tempor2 = arr[i] + str;
            tempor += tempor2;
        }
    } return tempor;
}
const splitted = spliting(ar, ' ');
// console.log(splitted);
// console.log(ar);


// 35. Splice an array with for loop

function splicing(arr, startPosition, delCount) {
    let temp = [];
    let del = [];
    for (let i = 0; i < arr.length; i++) {
        if (i >= startPosition && i < startPosition + delCount) {
            del.push(arr[i])
        } else {
            temp.push(arr[i]);
        }
    } return temp;

}
// console.log(splicing(ar, 1, 2));


// 36. stringify with for loop

function stringify(arr) {
    let str = '';
    for (let elem of arr) {
        elem = String(elem);
        str += elem + ',';
    } return str;
}
// console.log(stringify(ar));


// 37. join with for loop

function join(arr, str) {
    let temporary = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (str) {
            let tempor2 = [];
            tempor2 = arr[i] + str;
            temporary += tempor2;
        }
    } return temporary;

}
const joined = join(ar, ' + ');
console.log(joined);

// 38. find with for loop

function finding(arr, el) {
    let found;
    let condition = false;
    for (let elem of arr) {
        if (elem === el) {
            condition = true;
            found = elem;
            break;
        }
    }
    if (condition === true) {
        console.log(found);
    } else {
        console.log(`No such element`);
    }
}
const ar1 = [5, 7, 4, 6, 3, 1]
// console.log(finding(ar1, 8));

// 39. reverse with for loop

function reverse(arr) {
    let temp = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        temp.push(arr[i]);
    } return temp;
}
// console.log(reverse(ar));
