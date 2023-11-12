// 1.
//  check string's first character is uppercase or not

function checkFirstChar(str){
    regexp = /^[A-Z]/;
    
    if(regexp.test(str)){
        return `The first character is Uppercase`
    } else {
        return `The fisrt character is not Uppercase`
    }
}

const string1 = 'Armenia';
const string2 = 'yerevan';
//  console.log(checkFirstChar(string1));
//  console.log(checkFirstChar(string2));

// 2.
// check a credit card number
// American Express :- Starting with 34 or 37, length 15 digits.
// Visa :- Starting with 4, length 13 digits.
// MasterCard :- Starting with 51 through 55, length 16 digits.

function checkCreditCard(str){
    regexp = /^4[0-9]{12}|^5[1-6][0-9]{14}|^34|37[0-9]{13}/;
    if(regexp.test(str)){
    return `This is a true credit card number`
    } else {
        return `This is not a credit card number`
    }
}

const card1 = '341256457845915';
const card3 = '5213456784591546';
const card4 = '4154567895456';
const card2 = '56789';
// console.log(checkCreditCard(card1));
// console.log(checkCreditCard(card2));
// console.log(checkCreditCard(card3));
// console.log(checkCreditCard(card4));


// 3.
// check email pattern
// Uppercase (A-Z) and lowercase (a-z) English letters.
// Digits (0-9).
// Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.

function checkMail(str){
    regexp =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regexp.test(str)){
        return `The email matches`
    } else {
        return `The email does not match`
    }
}

const email1 = "armKarap@gmail.com";
const email2 = "@154.ur";
//  console.log(checkMail(email1));
//  console.log(checkMail(email2));

// 4.
//  search a date within a string
 function searchDate(str){
    regexp = /^(?=.*[0-9])(?=.*\w)(?=.*[0-9])/
    regexp2 = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;
    if(regexp.test(str)){
        return `Date matches`
    } else {
        return `Not found date`
    }
 }

 const date1 = '04 March 2024';
 const date2 = 'amsativ';
//  console.log(searchDate(date1));
//  console.log(searchDate(date2));


// 5.
//  check a given value contains alpha, dash and underscore

function checkAlfa(str){
    regexp = /^[a-z0-9_\-]+$/i;
    if(regexp.test(str)){
        return `Found matches`
    } else {
        return `Matches not found`
    }
}
const alfa1 = 'kala_lal-a';
const alfa2 = '%%%%';
// console.log(checkAlfa(alfa1));
// console.log(checkAlfa(alfa2));

 


