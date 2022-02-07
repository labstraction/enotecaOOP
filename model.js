class Beverage {

    constructor(name, brand, price, alcoholContent) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.alcoholContent = alcoholContent;
        this.dateAdded = new Date();
        this.tax = 0.22;
        this.quantity = 0;
    }

    get costumerPrice(){
        return this.price + (this.price * this.tax);
    }

    get code(){
        return this.constructor.name.toLowerCase() 
             + this.brand.toLowerCase().substring(0,2)
             + this.name.toLowerCase().substring(0,2)
             + this.dateAdded.getTime();
    }

    toString() {
        let description = this.constructor.name + "\n"
        for (const key in this) {
            if (Object.hasOwnProperty.call(this, key)) {
                const value = this[key];
                description += key + ": " + value + "\n";
            }
        }
        description += "costumerPrice: " + this.costumerPrice + "\n";
        description += "code: " + this.code + "\n";
        return description;
    }

    addQuantity(quantityToAdd){
        // this.quantity = this.quantity + quantityToAdd;
        this.quantity += quantityToAdd;
    }

    removeQuantity(quantityToRemove){
        const newValue = this.quantity - quantityToRemove;
        if (newValue < 0) {
            return false;
        }
        else {
            this.quantity = newValue;
            return true;
        }

        // if (this.quantity >= quantityToRemove) {
        //     this.quantity -= quantityToRemove;
        //     return this.quantity;
        // } else {
        //     return "errore!!!"
        // }
    }
}
 
 
class Wine extends Beverage { 
    constructor(name, brand, price, alcoholContent, prodYear, vine) { 
        super(name, brand, price, alcoholContent) 
        this.prodYear = prodYear; 
        this.vine = vine; 
    } 
 
    get costumerPrice(){ 
        const taxedPrice = this.price + (this.price * this.tax);
        const now = new Date(); 
        const ageTax = (now.getFullYear() - this.prodYear) / 100;
        const agedPrice = taxedPrice + (taxedPrice * ageTax)

        // const roundedAgePrice = Math.round(agedPrice * 100)/100;

        return agedPrice.toFixed(2);
    }
}


class Beer extends Beverage {
    constructor(name, brand, price, alcoholContent, type) {
        super(name, brand, price, alcoholContent)
        this.type = type;
    }
}


class Spirit extends Beverage {
    constructor(name, brand, price, alcoholContent) {
        super(name, brand, price, alcoholContent)
        this.tax = 0.30;
    }
}