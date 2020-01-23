import Validation from './Validation.js'
import ShowDate from './ShowDate.js'
import ShowCost from './ShowCost.js'
import ShowProfit from './ShowProfit.js'

export default class App {
    constructor(form) {
        this.form = form
        this.selectEl = form.querySelector('select')
        this.inputOfDebs = form.querySelector('input[type="number"]')
        this.quantityOfDebs = 0;
        this.ammountOfYears = 0;
        this.interest = 0;
    }
    deployEvents() {
        this.form.addEventListener('submit', event => this.checkValuesEvent(event));
        this.selectEl.addEventListener('change', event => this.getYearsAndInterestEvent(event));
        this.inputOfDebs.addEventListener('change', event => this.getQuantityOfDebsEvent(event));
    }

    checkValuesEvent(event) {
        event.preventDefault();
        const check = new Validation(this.quantityOfDebs, this.ammountOfYears)
        check.isFormValid();
        const show = new ShowProfit(this.ammountOfYears,this.interest,this.quantityOfDebs,this.form);
        show.calcProfit();
    }

    getYearsAndInterestEvent(event) {
        this.ammountOfYears = this.getSelectedOptions(event).dataset.year;
        this.interest = this.getSelectedOptions(event).dataset.interest;
        const show = new ShowDate(this.ammountOfYears, this.form);
        show.endDate();
    }

    getQuantityOfDebsEvent(event) {
        this.quantityOfDebs = event.target.value
        const show = new ShowCost(this.quantityOfDebs, this.form)
        show.calcCost();
    }

    getSelectedOptions(event) {
        return event.target.options[event.target.selectedIndex]
    }


}