// 1. Given an array of numbers, use a Set to efficiently remove duplicate elements.

const arr = [1, 2, 3, 4, 1, 2];
const newSet = new Set(arr);
// console.log(newSet);
// console.log(newSet.size === arr.length);

// 2.Create a Map to represent a product inventory.
//  Each product has a unique ID (use time to get unique values) as the key 
// and an object with productName, price, and quantity as the value. 
// Implement functions to add products, update quantities, and calculate 
// the total value of the inventory.
const productInventory = new Map();

function generateID(){
    const now = new Date();
    return now.getTime().toString();
}

function addProduct(productName, price, quantity){
    const productID = generateID();
    if(productInventory.has(productID)){
        return ` Product ID already exists`
    }
    productInventory.set(productID, {productName, price, quantity});
    return `Product added to inventory`
}

function updateQuantity(productID, newQuantity){
    if(productInventory.has(productID)){
        const product = productInventory.get(productID)
        product.quantity = newQuantity;
        productInventory.set(productID, product);
        return `Product quantity updated`
    } else {
        return `Product not found`
    }
}

function calculateTotal(){
    let total = 0;
    for(let {price, quantity} of productInventory.values()){
        total += price*quantity;
    } return total;
}

addProduct('Soap', 300, 150);
console.log(productInventory);
addProduct('Powder',  1980, 90);
console.log(productInventory);
addProduct('ToothPaste', 870, 200);
console.log(productInventory);


console.log(addProduct('Napkin', 430, 300));
updateQuantity('1703162472076', 130);

console.log(productInventory);

console.log(calculateTotal());





// 3. Create a Set to represent followers of a social media account. 
// Implement functions to add followers, 
// remove followers, and check if a user is already following.

const followers = new Set();

function addFollower(name) {
    return followers.add(name);
}
function deleteFollower(name) {
    return followers.delete(name);
}

function checkFollower(name) {
    return followers.has(name);
}

addFollower('DavidTheBest');
addFollower('MananaArt');
addFollower('Ahanita');
addFollower('AngeLika');

// console.log(followers);

// 4. Use a Set to manage the schedule of upcoming events. Each event has 
// a unique identifier, and the set ensures that there are no conflicting events 
// at the same time. Implement functions to add new events and check for scheduling conflicts.

function events(eventID, eventName, eventDate) {
    return {
        eventID: eventID,
        eventName: eventName,
        eventDate: eventDate
    }
}

const schedule = new Set();

function addEvent(event) {
    for (let ev of schedule) {
        if (ev.eventDate === event.eventDate) {
            return `There is an event at the same time`
        }
    }
    schedule.add(event);
    return `Event added to the schedule`
}

const event1 = events(111, 'Meet students', '2023-12-6 09:00');
const event2 = events(222, 'Join the classes', '2023-12-6 10:00')
const event3 = events(333, 'LunchTime', "2023-12-6 13:30");


addEvent(event1);
addEvent(event2);
addEvent(event3);

// console.log(schedule);

const event4 = events(444, 'History seminar', '2023-12-6 10:00');
// console.log(addEvent(event4));

const event5 = events(555, 'History seminar', '2023-12-6 14:45');
// console.log(addEvent(event5));
addEvent(event5);
// console.log(schedule);




// 5. Given an array of email addresses, use a Set to identify and 
// log unique email addresses. This exercise simulates processing 
// a list of user emails and ensuring there are no duplicates.

const emails = [
    'arpine@gmail.com',
    'alina1454@gmail.com',
    'alice8lice@gmail.com',
    'bobby9ybbob@gmail.com',
    'garunhighsun@gmail.com',
    'alice8lice@gmail.com',
    'arpine@gmail.com',
    'silentnight@gmail.com'
]

function checkEmails(arr){
    const setOfEmails = new Set(emails);
    if(setOfEmails.size === arr.length){
        return `There aro no dublicates`
    } else {
        return  setOfEmails;
    }
}

// console.log(checkEmails(emails));

