// 1. Write a JavaScript function to check whether an object contains a given property.
function checkProperty(obj, prop){
        if(obj.hasOwnProperty(prop)){
            return `This object contains property "${prop}"`
        } else {
            return `This object does not contain property "${prop}"`
        }
    
}
const object = {
    name:"Lusine",
    surname:"Asatryan",
    address:"Tumanyan5",
    city: "Yerevan",
    country:"Armenia"
}
// console.log(checkProperty(object, 'address'));
// console.log(checkProperty(object, 'luys'));

// 2. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.

function copyObject(obj){
    let obj2 = {};
    for(let key in obj){
        obj2[obj[key]] = key;
    }
    return obj2;
}

//  These are from google...

// function copyObject2(obj){
//     return Object.keys(obj).reduce((acc, key) => {
//         acc[obj[key]] = key;
//         return acc;
//       }, {});
// }
// function copyObject3(obj){
//     return Object.assign({}, ...Object.entries(obj).map(([a,b]) => ({ [b]: a })))
// }


// console.log(copyObject(object));

// 3. Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
function findCentury(year){
const century = Math.ceil(year/100);
return century;
}
// console.log(findCentury(1914));

// 4. Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
function func(arr) {
    let maxProd = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        const prod = arr[i] * arr[i + 1];
        if (prod > maxProd) {
            maxProd = prod
        }
    } return `The largest product is ${maxProd}`;
}
const arr = [3,7,-1,-5,6];
console.log(func([1,6,3,9]));

// 5. Given an object or an array, return if it is empty.
// An empty object contains no key-value pairs.
// An empty array contains no elements.

function checkIfEmpty(obj){
    if(Object.keys(obj).length > 0){
return `This object is not empty`
    } else{
        return `This object is empty`
    }
}
const obj = {};
const objj = {name:"Arthur"};
// console.log(checkIfEmpty(objj));


function checkIfEmpty2(arr){
    if(arr.length > 0){
        return ` This array is not empty`
    } else {
        return `This array is empty`
    }
}
const array = []
// console.log(checkIfEmpty2(array));


// 6. Given an object or array obj, return a compact object.
function filteringFalsy(arr){
    const filtered = arr.filter(Boolean);
    return filtered;
}

const ar1 = [2,4,null, 6, '', 7, undefined];
// console.log(filteringFalsy(ar1));

function removingFalse(obj) {
    let values = Object.values(obj).filter(Boolean);
    return values;
}

const obj1 = {
    name:'',
    surname:"Aghajanyan",
    age:null,
    city:undefined,
    country:"USA"
}

// console.log(removingFalse(obj1));




// These are not mine...

// const ar2 = [2,4,null, 6, [],'', [6,9,10], 7, undefined];
// const obj2 = {
//     name:'',
//     surname:{a:"", b: "Aghajanyan"},
//     age:null,
//     city:undefined,
//     country:"USA"
// }



// const compactObject = val => {
//     const data = Array.isArray(val) ? val.filter(Boolean) : val;
//     return Object.keys(data).reduce(
//       (acc, key) => {
//         const value = data[key];
//         if (Boolean(value))
//           acc[key] = typeof value === 'object' ? compactObject(value) : value;
//         return acc;
//       },
//       Array.isArray(val) ? [] : {}
//     );
//   };
// // console.log(compactObject(obj2));
  


// Object.prototype.compact = function() {
//     var key, compacted;
//     compacted = {};
//     for(key in this) {
//       if(this[key]) {
//         compacted[key] = this[key];
//       }
//     }
//     return compacted;
//   }
// //   console.log(compactObject(ar2));