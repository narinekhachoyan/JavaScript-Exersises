// // 1. Create an async function

async function boom() {
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Uraaa!"), 2000)
    })
    const res = await prom;
    console.log(`It's ok:`, res);
}
boom();

// // 2. Create an async function

async function boom2() {
    console.log(`I'm waiting`);
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Uraaa!"), 2000)
    })
    setTimeout(() => {
        console.log(`Still waiting`);
    }, 1000)

    const res = await prom;
    console.log(`It's ok:`, res);
}
boom2();



// // 3. Create async functions that will resolve after 1 sec one after another

function first() {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, 1000, 'Hello world 1');
    });
}

async function second() {
    let message = await first();
    console.log(message);

    return 'Hello world 2';
}

second().then(function (message) {
    console.log(message);
});

// // 4. Error handling try-catch-ի միջոցով

function oops() {
    return new Promise(function (resolve, reject) {
        setTimeout(reject, 500, 'Error happened');
    });
}

async function test() {
    try {
        let message = await oops();
        console.log(message);

        return 'Hello world';
    } catch (error) {
        return 'Error happened during test';
    }
}

test().then(function (message) {
    console.log(message);
});




// // 5. Ստեղծել ասինխրոն ֆոանկցիա։

function barev() {
    return 'Barev dzez!';
}

async function hi() {
    let message = await barev();

    console.log(message);
}

hi();


// // 6. Ստեղծել ասինխրոն ֆունկցիա, որը կվերադարձնի նախ առաջին արժեքը,
// // իսկ հետո երկրորդը մէկ վայրկյան ինտերվալով։

function callback1(val) {
    return 1;
}
function callback2(val) {
    return 2;
}

async function job() {

    let res = await callback1()
    setTimeout(() => {
        console.log(res, `This is callback1`);
    }, 0)
    let counter = 0;
    let res2 = await callback2()
    let timer = setInterval(() =>
        console.log(res2, `This is callback2`)
        , 1000)
    setTimeout(() => clearInterval(timer), 4000);

    return res, res2
}
job();



// // 7. Promise.all

function sayHi(){
    const res = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`Hello`);
        },1000);
    }) 
    return res;
}

async function one(){
    let eldest = await sayHi()
    console.log(eldest, `Marianna!`);
}
async function two(){
    let elder = await sayHi()
    console.log(elder, `David!`);
}
async function three(){
    let smallest = await sayHi()
    console.log(smallest, `Anahit!`);
}

Promise.all([one(), two(), three()]);



// // 8. an example of promise from codeInGame

async function job(data) {
    return new Promise(function (resolve, reject) {
        if (data % 2 === 1) {
            setTimeout(function () {
                resolve(`odd`);
            }, 1000);
        } else if (data % 2 === 0) {
            setTimeout(function () {
                resolve(`even`);
            }, 2000);
        } else if (data === isNaN) {
            return new Error(`Error`)
        }
    })
}
job().then(r => console.log(`success`)).catch(r => console.log(`failure`));




// // 9. change the function using async/await

function fetchDataFromAPI(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}
const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
];
async function fetchMultipleAPIs(apiUrls) {

    const promises = await Promise.all(apiUrls.map(url => fetchDataFromAPI(url)));
    return promises;
}

fetchMultipleAPIs(apiUrls)
    .then(results => {
        console.log('Combined Results:', results);
    })
    .catch(error => {
        console.log('Error:', error.message);
    });

// // variant 1

(async function fetchMultipleAPIs() {
    const response = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts/4'),
        fetch('https://jsonplaceholder.typicode.com/posts/5'),
        fetch('https://jsonplaceholder.typicode.com/posts/6')
    ]);

    return response;

})()





// // variant 2

(async function fetchMultipleAPIs() {
    try {
        const response = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts/4'),
            fetch('https://jsonplaceholder.typicode.com/posts/5'),
            fetch('https://jsonplaceholder.typicode.com/posts/6')
        ]);

        const result = JSON.stringify(response);
        return result;
    } catch (err) {
        console.log(err);
    }
})()




// // 10. An example of Promise.allSettled()

Promise.allSettled([
    Promise.resolve(`This is resolved promise`),
    Promise.reject(`This is rejected peomise`),
    new Promise((resolve)=> setTimeout(()=>resolve(24),1000)),
    new Promise((reject) => setTimeout(()=> reject(42),2000))
]).then(result=>console.log(result));


// 11. invitation

async function invite(){
    const result1 = await addName()
    const result2 = await addDate()
    setTimeout(()=> {
        console.log(` Dear ${result1}! 
         You are invited to visit the Museum! Join us on ${result2}`);
    }, 2000)
}
function addName(name){
return `Armen`
}
function addDate(date){
return `17.10.2023`
}

// invite();

