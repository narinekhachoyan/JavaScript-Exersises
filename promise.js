// 1. Сделайте промис, внутри которого будет задержка в 5 секунд,
//  после которой промис должен выполнится, 
// своим результатом вернув какой-нибудь текст.
//  Выведите этот текст на экран.


const promise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello everybody!")
    }, 5000);
});

promise.then(function (result) {
    console.log(result);
});

// 2. Сделайте асинхронный код, который будет генерировать 
// случайные числа от 0 до 5. Оберните все это в промис. 
// Пусть промис своим возвращает результат деления единицы на сгенерированное число.
//  Пусть промис выполнится с ошибкой, если произошло деление на ноль, 
// и с успехом во всех остальных случаях.

const promiseRandom = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        let random = Math.floor(Math.random() * 6);
        if (!error) {
            resolve(1 / random);
        } else if (random === 0) {
            reject("Error");
        }
    }, 1000);
});

promiseRandom.then(function (result) {
    console.log(result);
}, function (error) {
    console.log(error);
});


// 3.Переделайте следующий код в соответствии с изученным:

let promise3 = new Promise(function (resolve,
    reject) {
    setTimeout(function () {
        let isError = false;
        if (!isError) {
            resolve('success');
        } else {
            throw new Error('error') // reject(new Error('error')); 
        }
    }, 3000);
});

promise3.then(function (res) {
    console.log(res);
}, function (err) {
    console.log(err);
});

// 4. Перепишите следующий код через метод catch:

let promise4 = new Promise(function (resolve,
    reject) {
    setTimeout(function () {
        let isError = false;

        if (!isError) {
            resolve('success');
        } else {
            reject(new Error('error'));
        }
    }, 3000);
});

promise4.then(res => console.log(res));
promise4.catch(err => console.log(err.message));

// 5.Сделайте промис, который выполнится с успехом через некоторое время. 

const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        let str = 'armenia';
        if (!error) {
            resolve(str.toUpperCase());
        } else if (str !== String) {
            reject("Error");
        }
    }, 1000);
});

promise5.then(res => console.log(res));
promise5.catch(err => console.log(err));
;

// 6.Сделайте промис, который выполнится с неудачей через некоторое время. 

const promise6 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        let str = ['armenia'];
        if (!error) {
            resolve(str.toUpperCase());
        } else if (str !== String) {
            reject("Error");
        }
    }, 1000);
});

promise6.then(res => console.log(res));
promise6.catch(err => console.log(err));


