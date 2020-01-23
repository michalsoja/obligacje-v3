import ShowCost from './ShowCost.js'

export default class ShowProfit{
    constructor(ammountOfYears,interest,quantityOfDebs,form){
        this.ammountOfYears = ammountOfYears
        this.interest = interest
        this.spanEl = form.querySelector('.deb-profit')
        this.quantityOfDebs = quantityOfDebs
        this.cost = new ShowCost(quantityOfDebs,form);
        this.profit = this.cost.calcCost();
        
    }
    calcProfit(){
        for(let i=0;this.ammountOfYears>i;i++){
            this.profit *= this.interest
        }
        this.spanEl.innerText = this.profit.toFixed(2);
    }
}