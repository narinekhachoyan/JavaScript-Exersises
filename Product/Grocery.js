const {Products} = require('./Product.js')

class Grocery extends Products{
    constructor(name, price, quantity, expDate, isOrganic){
    super(name, price, quantity, expDate)
    this.isOrganic = isOrganic;
    }
    organic(){
        return this.isOrganic
    }
    
}

module.exports = {Grocery}