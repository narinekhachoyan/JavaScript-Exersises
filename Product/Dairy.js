const { Products } = require('./Product.js')

class Dairy extends Products {
    discount() {
        return this.price;
    }
}

module.exports = { Dairy }