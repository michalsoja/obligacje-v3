export default class ShowDate {
    constructor(additionalYears,form) {
        this.additionalYears = Number(additionalYears)
        this.spanEl = form.querySelector('.deb-endTime')
    }
    endDate() {
        if (this.additionalYears) {
            const formatter = new Intl.DateTimeFormat('pl', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            });

            const date = new Date();
            date.setFullYear(date.getFullYear() + this.additionalYears)
            const expectedEndDate = date
            this.spanEl.innerText = formatter.format(expectedEndDate)
        }
        else {
            this.spanEl.innerText = ''
        }
    }
}












