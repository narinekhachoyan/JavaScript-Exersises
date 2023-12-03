class Products {
    constructor(name, price, quantity, expDate) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.expDate = expDate;
    }
    dateOfExpire(date) {
        let today = new Date();
        let exp = new Date(date);
       
        if (exp > today) {
            return `OK`
        } else {
            return `The product is already expired`
        }
    }
    buyProduct(anvanum, qanak) {
        let result = 0;
        if (this.name === anvanum) {
            result += this.quantity - qanak;
        }
        return this.quantity = result;
    }
    totalPrice() {
        return this.quantity * this.price
    }
    productDescription() {
        return `${this.name}: ${this.quantity}, price: ${this.price}`
    }
    availibility() {
        return this.quantity > 0;
    }
    discount() {
        let currentDate = new Date();
        let expiryDate = new Date(this.expDate);
        let diff = expiryDate.getTime() - currentDate.getTime();
        // console.log(diff);
        let daysRemaining = Math.ceil(diff / (1000*60*60*24));
        // console.log(daysRemaining);
        

        let discount = 0;
        if (daysRemaining > 0 && daysRemaining <= 10) {
            discount = 50;
        } else if (daysRemaining > 10 && daysRemaining <= 40) {
            discount = 30;
        } else if (daysRemaining > 40 && daysRemaining <= 60) {
            discount = 10;
        }
        
        const discAmount = (this.price * discount) / 100;
        const discPrice = this.price - discAmount;
           
        return discPrice;
    }

}

module.exports = { Products }