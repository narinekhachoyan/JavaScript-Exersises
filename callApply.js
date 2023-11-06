// 1.Write a function called greet that takes a name as an argument 
// and logs a greeting message with the name. 
// Use call and apply to invoke the greet function

function greet(name) {
    return `Hello` + ' ' + this.name;

}

const name1 = {
    name: 'Armine',
    surname: 'Sargsyan'
}

const name2 = {
    name: 'Petros',
    surnmae: 'Adamyan'
}

// console.log(greet.call(name1)); 
// console.log(greet.apply(name2));


// 2. Create a function called calculate that takes two numbers and 
// performs a mathematical operation specified by a callback function. 
// Use the call method to pass the arguments to the callback function.

function calculate(num1, num2, cb){
    return cb.call(this, num1, num2)
}

function add(num1,num2){
    return num1+num2;
}
function sub(num1, num2){
    return num1-num2;
}
function multi(num1, num2){
    return num1*num2;
}
function div(num1, num2){
    if(num2===0){
        return`Cannot perform the opreation`
    }
    const result = num1/num2;
    return result.toFixed(3);
}

// console.log(calculate(5,3,add));
// console.log(calculate(5,3,sub));
// console.log(calculate(5,3,multi));
// console.log(calculate(5,3,div));

// 3. Create 2 objects customers and teachers . 
// Write function that will count yearly salary of customers and teachers.

const customers =
{
    name: 'Angela',
    surname: 'Hovhannisyan',
    salary: 1500,
    yearlySalary: calculateYearly
}


const teachers =
{
    name: 'Karine',
    surname: 'Dallaqyan',
    salary: 1700,
    yearlySalary: calculateYearly
}



function calculateYearly() {
    return this.salary * 12;
}

function calculateYearly(bonus) {
    return this.salary * 12 + ` +  bonus:`+bonus;
}

// console.log(calculateYearly.call(teachers));
// console.log(calculateYearly.call(teachers, 560));
// console.log(calculateYearly.call(customers));

const teacher =
{
    name: "Karine",
    surname: "Dallaqyan",
    salary: 1500,
    yearly: function calcYearly() {
        return this.salary * 12;
    }
}
const calcYear = teacher.yearly();
// console.log(`yearly salary is ${calcYear}`);

const obj = [
    {
        name: 'Petros',
        salary: 1400
    },
    {
        name: "Poghos",
        salary: 1200
    },
    {
        name: "Martiros",
        salary: 1300
    }
]

function calculateYearlySalary(obj){
    return obj.salary*12;
}

obj.forEach(function(obj){
    obj.yearlySalary = calculateYearlySalary(obj)
})
// console.log(obj);

 

// Create 2 objects customers and teachers. Write function that will count yearly salary of customers and teachers.

const customers1 = {
    1: { name: "Meri", salary: 15, age: 24 },
    2: { name: "Kevin", salary: 100, age: 16 },
    3: { name: "Annie", salary: 30, age: 30 },
  };
  
  const teachers1 = {
    1: { name: "Joe", salary: 5, age: 50 },
    2: { name: "Rosie", salary: 4, age: 30 },
    3: { name: "Ruby", salary: 3, age: 62 },
  };
  
  function countYearlySalary() {
    let sal = 0;
  
    for (const key in this) {
      sal += this[key].salary * 12;
    }
  
    return sal;
  }
  
  const customersSalary = countYearlySalary.call(customers1);
  const teachersSalary = countYearlySalary.call(teachers1);
  
//   console.log(
//     `Customers' salary is ${customersSalary}, Teachers' salary is ${teachersSalary}`
//   );

function func(arr) {
    let maxProd = -Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        const prod = arr[i] * arr[i + 1];
        if (prod > maxProd) {
            maxProd = prod
        }
    } return maxProd;
}
const arr = [3,7,-1,-5,6];
console.log(func([-23, 4, -3, 8, -12]));


