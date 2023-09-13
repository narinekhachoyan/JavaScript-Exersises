// 1.Exercise 1: Check if Any Number is Even

const numbers = [1, 5, 7, 89, 25, 154, 267, 548, 26, 98];

const checkEvens = numbers.some((num) => num%2 === 0);
// console.log(checkEvens);

function checkEven(arr) {
    return arr.some(num => num % 2 === 0)
};

// console.log(checkEven(numbers));
// console.log(checkEven([5, 7, 9,,11]));


// Exercise 2: Check if All Numbers are Positive

const positives = numbers.every((num) => num > 0);
// console.log(positives);

function checkPositives(arr) {
    return arr.every(num => num >0)
};

// console.log(checkPositives(numbers));
// console.log(checkPositives([1, 9, 5, 8, -9]));

// Exercise 3: Check if Any String Contains a Specific Character

const strings = ["Ani", "Syuzan", "Sirik", "Ruzan"];

const checkZ = strings.some((str) => str.includes("z"));
// console.log(checkZ);

function checkCharacter(arr, char) {
    return arr.some((str) => str.includes(char))
};

// console.log(checkCharacter(strings, "z"));
// console.log(checkCharacter(strings, "f"));

// Exercise 4: Check if All Names Start with the Same Letter

const first = strings.every((el) => el.startsWith(strings[0][0]));
// console.log(first);

function checkFirstLetter(arr) {
   
    let char = arr[0][0];
    return arr.every(str => str[0] === char)
};

// console.log(checkFirstLetter(strings));
// console.log(checkFirstLetter(["Daddy", "Danny", "Dilly", "Destiny"]));