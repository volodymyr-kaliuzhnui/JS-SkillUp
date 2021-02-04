

class Calc {
    a;
    b;
    result;
   constructor() {
       this.a = Number(prompt('Enter number one'));
       this.b = Number(prompt('Enter number two'));
   }
   show () {
       console.log(`Result is ${this.result}`)
   }
    appendage () {
       this.result = this.a + this.b;
       this.show();
   }
    subtract () {
       this.result = this.a - this.b;
       this.show();
    }
    multiplication () {
       this.result = this.a * this.b;
       this.show();
    }

    division () {
       this.result = this.a / this.b;
       this.show();
    }

    newFunctional (callback) {
       callback.call(this);
       this.show();
    }

}

function power() {
    this.result = this.a ** this.b;
}

let calc = new Calc();
calc.appendage();
calc.subtract()
calc.multiplication();
calc.division();
calc.newFunctional(power);
