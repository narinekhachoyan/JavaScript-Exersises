//1. Use the spread operator to concatenate two arrays.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const merged = [...array1,...array2];
// console.log(merged);

//2. Use object destructuring to extract values from an object.
const person = {
       firstName: "John",
       age: 25,
       city: "New York"
};

const {name, age, city} = person;

// console.log(firstName);
// console.log(age);
// console.log(city);

// 3. Create a function that uses both 
// the rest parameter and destructuring to process an array of objects.
const users = [
       { id: 1, anun: 'Alice' },
       { id: 2, anun: 'Bob' },
       { id: 3, anun: 'Charlie' }
];

function processObj(...obj){
const data = obj.map(({id, anun}) => {
       return `id: ${id}, name: ${anun}`
})
return data;
}
const result = processObj(...users)
// console.log(result);

// 4. Create a function that uses the rest parameter 
// to accept any number of arguments and returns their sum.

function sum(...args) {
       let sum = 0;
       for (let arg of args) sum += arg;
       return sum
}

// console.log(sum(1,2,3));
// console.log(sum(1,2,3,4,5));
// console.log(sum(60,50,100));

