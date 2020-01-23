export default class ShowCost {
    constructor(quantityOfDebs, form) {
        this.quantityOfDebs = quantityOfDebs;
        this.spanEl = form.querySelector('.deb-cost');
    }
    calcCost() {
        if (this.quantityOfDebs) {
            this.wholeCost = this.quantityOfDebs * 100
            this.spanEl.innerText = this.wholeCost
            return this.wholeCost
        }
        else {
            this.spanEl.innerText = ''
        }
    }
    

}