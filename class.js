class Lib {
    constructor(book, title, availibility) {
        this.book = book;
        this.title = title;
        this.availibility = true;
    }
    borrow() {
        this.availibility = false;
        return `The book is borrowed`;
    }
    returnBook() {
        return `The book ${this.title} is available`;
    }
    checkavailibility() {
        if (this.availibility) {
            return `The book is available`
        } else {
            return `The book is not available`
        }
    }

}
const book11 = new Lib("Homer", 'Iliad');
const book22 = new Lib('Homer', 'Odyssey');
const book33 = new Lib("Dante Alighieri", "Divine Comedy")
const book44 = new Lib("William Faulkner", "The Sound and the Fury")
const book55 = new Lib("Boris Pasternak", "Doctor Zhivago")

console.log(book11);

console.log(book11.borrow());
console.log(book11);

console.log(book11.returnBook());

console.log(book11.checkavailibility());
console.log(book11.borrow());
console.log(book11.checkavailibility());