
const {Grocery} = require('../Product/Grocery');
const {Dairy} = require('../Product/Dairy');
const {Meat} = require('../Product/Meat')

const cookies = new Grocery("Daroink", 250, 30, '6.11.2024', 'non-organic')
// console.log(cookies);
// console.log(cookies.buyProduct("Daroink",10));

const chocolate = new Grocery("Kinder", 500, 40, '2023.12.21', 'non-organic')
// console.log(chocolate.availibility());
// console.log(chocolate.totalPrice());
// console.log(chocolate.buyProduct("Kinder",4));
// console.log(chocolate);
// console.log(cookies.productDescription());
// console.log(chocolate.dateOfExpire('2023.11.21'));
// console.log(chocolate.discount());

const milk = new Dairy("Marianna", 490, 5, '2023.12.10');
// console.log(milk);
// console.log(milk.dateOfExpire());
// console.log(milk.discount());

const chicken = new Meat('Araks', 3100, 8, '2024.05.07');
// console.log(chicken.productDescription());
// console.log(chicken.discount());




