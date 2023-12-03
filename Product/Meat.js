const {Products} = require('./Product.js')

class Meat extends Products{
    discount() {
        return this.price;
    }
}

module.exports = {Meat}