class Calculator{
    constructor(previousOperandText, currentOperandText){
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear()
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return;

        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){
        if (this.currentOperand ==='') return

        if (this.previousOperand !== '') {
            this.calculate()
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    updateDisplay(){
        this.currentOperandText.innerText =
        this.getDisplayNumber(this.currentOperand)

        if(this.operation != null){
            this.previousOperandText.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandText.innerText = '';
        }
    }

    calculate(){
        let calculation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current)) return

        switch (this.operation){
            case '+':
                calculation = prev + current;
                break;
            case '-':
                calculation = prev - current;
                break;
            case '*':
                calculation = prev * current;
                break;
            case '/':
                calculation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = calculation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number){
        const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
        
        let integerDisplay;

        if(isNaN(integerDigits)){
            integerDisplay =''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximalFractionDigits: 0
            })
        }

        if (decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }
}

const numberBtns = document.querySelectorAll('[number]');
const operationBtns = document.querySelectorAll('[operation]');
const equalsBtn = document.querySelector('[equals]');
const deleteBtn = document.querySelector('[delete]');
const previousOperandText = document.querySelector('[previous-operand]');
const currentOperandText = document.querySelector('[current-operand]');

const calculator = new Calculator(previousOperandText, currentOperandText)


numberBtns.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

operationBtns.forEach(button => {
    button.addEventListener ('click', () =>{
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsBtn.addEventListener('click', button =>{
    calculator.calculate();
    calculator.updateDisplay();
})

deleteBtn.addEventListener('click', button =>{
    calculator.clear();
    calculator.updateDisplay();
})