// декоратор - специальная функция, которая принимает другую функцию и изменяет её поведение.



/* Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.

Например: */
function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}
function spy(func) {
 	function test (...arg){
  	test.calls.push(arg);
  	return func.apply(this, arg);
  }
  test.calls = [];
  return test;
}
work = spy(work);

work(1, 2); // 3
work(4, 5); // 9
 for (let args of work.calls) {
  alert(`call: ${args}`); // "call:1,2", "call:4,5"
}

/* Задерживающий декоратор
важность: 5
Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:
 */
function f(x) {
  alert(x);
}
function delay(func, time) {
	function later(...arg){
   setTimeout(() => func.apply(this, arg), time);
  }
  return later;
}

// создаём обёртки
let f1000 = delay(f, 10000);
let f1500 = delay(f, 15000);

 f1000("test"); // показывает "test" после 1000 мс 
f1500("test2"); // показывает "test" после 1500 мс
/* Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».

В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this. */


function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { 
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); 

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}