class Cellar{

    constructor(){
        this.beers = [];
        this.spirits = [];
        this.wines = [];
    }


    searchByNameOrCode(string){
        const beverages = this.beers.concat(this.spirits).concat(this.wines);

        let searchResult = []

        for (const beverage of beverages) {
            let sameName = beverage.name.toLowerCase().includes(string.toLowerCase());
            let sameCode = beverage.code === string;

            if (sameName || sameCode) {
                searchResult.push(beverage);
            }
        }

        return searchResult;
    }

    searchByVine(vine){
        let searchResult = []

        for (const wine of this.wines) {
            let sameVine = wine.vine.toLowerCase().includes(vine);
            if (sameVine) {
                searchResult.push(wine);
            }
        }

        return searchResult;
    }

    addBeverage(beverage){
        switch (beverage.constructor.name) {
            case "Beer":
                this.addBeer(beverage)
                break;
            case "Wine":
                this.addWine(beverage)
                break;
            default:
                this.addSpirit(beverage)
                break;
        }

    }


    addWine(wine){
        if (!this.checkWinePresence(wine)) {
            this.wines.push(wine);
        }
    }

    addBeer(beer){
        if (!this.checkBeerPresence(beer)) {
            this.beers.push(beer);
        }
    }

    addSpirit(spirit){
        if (!this.checkBeerPresence(spirit)) {
            this.spirits.push(spirit);
        }
    }



    checkWinePresence(wine){
        return Cellar.checkPresence(wine, this.wines)
    }

    checkBeerPresence(beer){
        return Cellar.checkPresence(beer, this.beers)
    }

    checkSpiritPresence(spirit){
        return Cellar.checkPresence(spirit, this.spirits)
    }


    static checkPresence(newBeverage, arrayOfBeverages){
        let isPresent = false
        for (const beverage of arrayOfBeverages) {
            if (beverage.code === newBeverage.code) {
                isPresent = true;
            }
        }
        return isPresent;
    }


}
