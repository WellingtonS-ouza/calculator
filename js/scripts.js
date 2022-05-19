class Calculator {
  constructor () {
    this.upperValue = document.querySelector('#upper-number')
    this.resultValue = document.querySelector('#result-number')
    this.reset = 0
  }

  btnPress() {
    console.log(this)
  }

}

// start obj

let calc = new Calculator

// catch buttons 

let buttons = document.querySelectorAll('.btn')

//map all buttons

/* for (let index = 0; index < buttons.length; index++) {
   buttons[index].addEventListener('click', calc.btnPress)
  
}
 */

for (let btns of buttons) {
  btns.addEventListener('click', calc.btnPress)
  
  
}
