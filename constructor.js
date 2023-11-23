function Library(name, type) {
    this.name = name;
    this.type = type;
    this.availibility = true;
    this.borrow = function(){
        return this.availibility = false;

    }
    this.returnBook = function(){
        if(this.name && !this.availibility)
        return this.availibility = true;
    }
    this.checkAvailibility = function(){
        if(this.name && this.availibility){
        return `The book is available`
        } else {
            return `The book is not available`
        }
    }
}
const book1 = new Library("Homer", 'Iliad');
const book2 = new Library('Homer','Odyssey');
const book3 = new Library("Dante Alighieri","Divine Comedy")
const book4 = new Library("William Faulkner","The Sound and the Fury") 
const book5 = new Library("Boris Pasternak", "Doctor Zhivago")

console.log(book1);

book3.borrow();
console.log(book3.checkAvailibility());

book5.borrow();
console.log(book5.checkAvailibility());

book3.returnBook();
console.log(book3);