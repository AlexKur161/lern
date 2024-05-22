const obj = {
  say: () => {
    let test = new function() {
      console.log(this)
    }
  }
}
obj.say()
const keks = function(){
  this.name = 'alex'
}
const test = new keks()
console.log(test);

// Обычно конструкторы не имеют оператора return. Их задача – записать все необходимое в this, и это автоматически становится результатом.

// Но если return всё же есть, то применяется простое правило:

// При вызове return с объектом, вместо this вернётся объект.
// При вызове return с примитивным значением, оно проигнорируется.

function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // <-- возвращает этот объект
}

alert( new BigUser().name );  // Godzilla, получили этот объект

// А вот пример с пустым return (или мы могли бы поставить примитив после return, неважно):

function SmallUser() {

  this.name = "John";

  return; // <-- возвращает this
}

alert( new SmallUser().name );  // John

// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:
function Calculator() {
  this.read = function(){
    this.op1 = +prompt('Введите первое число', 0);
    this.op2 = +prompt('Введите второе число', 0);
  }
  this.sum = function(){
    return this.op1 + this.op2;
  }
  this.mul = function(){
    return this.op1 * this.op2;
  }
}

let calculator = new Calculator();

console.log(calculator.sum());
console.log(calculator.mul());


// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:


function Accumulator(numb) {
  this.value = numb;
  this.read = function() {
  const a = +prompt('введите число', 0);
  this.value += a;
  }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений

// Вопрос почему стрелочные функции не теряют this при использовании функций конструкторов
// вот так теряет
const a = {
  value: 'test',
  say: () => {
    console.log(this);
  }
}
a.say();

// а так нет
function Test() {
  this.value = 'test';
  this.say = () => {
    console.log(this);
  }
}
let b = new Test();
b.say()