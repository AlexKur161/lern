// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  read(arg1, arg2) {
    this.a = arg1;
    this.b = arg2;
  },
  sum(a, b) {
   return a + b;
  },
  mul(a, b) {
   return a * b;
  }
};

calculator.read(5,5);
console.log( calculator.sum(5,5) );
console.log( calculator.mul(5,5) );
console.log(calculator);

// Потеря контекста 

let obj = {
  parent() {
	  console.log(this); 
	  function child() {
		  console.log(this); 
	  }
	  child();
  }
}

obj.parent()


// Контекст не теряется

// стрелочная функция не имеет своего контекста
let obj2 = {
  parent() {
	  console.log(this); 
	  let child = () => {
		  console.log(this); 
	  }
	  child();
  }
}

obj2.parent()


// Вложенная функция не имеет доступа к контексту внешней но имеет доступ к ее переменным 

let obj3 = {
  parent() {
    console.log(this);
	  let self = this;
	  function child() {
		  console.log(self); 
	  }
	  child();
  }
}

obj3.parent()

// Контекст можно передать в качестве аргумента при вызове дочерней функции

let obj4 = {
  parent() {
    console.log(this);
	  function child(param) {
		  console.log(param); 
	  }
	  child(this);
  }
}

obj4.parent()
