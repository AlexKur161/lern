// Свойство не есть переменная
// Свойство функции, назначенное как sayHi.counter = 0,
// не объявляет локальную переменную counter внутри неё.
//  Другими словами, свойство counter и переменная let counter – это две независимые вещи.

// Мы можем использовать функцию как объект, хранить в ней свойства, но они никак не влияют на её выполнение.
//  Переменные – это не свойства функции и наоборот. Это два параллельных мира.

function sayHi() {
  alert("Hi");

  // давайте посчитаем, сколько вызовов мы сделали
  sayHi.counter++;
}
sayHi.counter = 0; // начальное значение

sayHi(); // Hi
sayHi(); // Hi

alert( `Вызвана ${sayHi.counter} раза` ); // Вызвана 2 раза

// Named Function Expression или NFE – это термин для Function Expression, у которого есть имя.

let sayHi = function func(who) {
  alert(`Hello, ${who}`);
};

// Есть две важные особенности имени func, ради которого оно даётся:

// Оно позволяет функции ссылаться на себя же.
// Оно не доступно за пределами функции.

let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // использует func, чтобы снова вызвать себя же
  }
};

sayHi(); // Hello, Guest

// А вот так - не cработает:
func(); // Ошибка, func не определена (недоступна вне функции)

// Функции – это объекты.

// Их свойства:

// name – имя функции. Обычно берётся из объявления функции,
//  но если там нет – JavaScript пытается понять его из контекста.
// length – количество аргументов в объявлении функции.
//  Троеточие («остаточные параметры») не считается.


// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.


function makeCounter() {

  function counter(){
    return counter.count++
  }
  counter.set = (val) => {
    counter.count = val;
  }
  counter.decrease = ()=> {
    counter.count--;
  }
  counter.count = 0
return counter;
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

counter.set(10); // установить новое значение счётчика

alert( counter() ); // 10

counter.decrease(); // уменьшить значение счётчика на 1

alert( counter() ); // 10 (вместо 11)