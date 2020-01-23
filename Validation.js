export default class Validation{
    constructor(quantityOfDebs,ammountOfYears){
        this.quantityOfDebs = Number(quantityOfDebs)
        this.ammountOfYears = Number(ammountOfYears)
    }

    isFormValid(){
        if(this.isSelectValueValid() && this.isQuantityOfDebsANumber()){
            return true
        }
        return false
    }

    isQuantityOfDebsANumber(){
        if(isNaN(this.quantityOfDebs) || this.quantityOfDebs == 0){
            alert('Proszę podać poprawną wartość w rubryce "Ilość obligacji".')
            return false
        }  
        return true
    }

    isSelectValueValid(){
        if(this.ammountOfYears){ 
            return true
        }
        alert('Proszę wybrać ofertę obligacji.')
        return false
    }
}