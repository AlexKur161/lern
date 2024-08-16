// Замыкание – это функция, которая запоминает свои внешние переменные и может получить к ним доступ.

// в JavaScript, все функции изначально являются замыканиями

let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // "Pete"

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // 0
alert( counter2() ); // 1

function sum(a) {

  return function(b) {
    return a + b; // берёт "a" из внешнего лексического окружения
  };

}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1) ); // 4

/* arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
Например: */

/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a,b){
	return function(x){
  	return x >= a && x <= b;
  }
}
function inArray(arr) {
 return function(x) {
 	return arr.includes(x);
 }
}
console.log( arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2 


let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" }
];

function byField(fild) {
	return function(x,b) {
  	return x[fild] > b[fild] ? 1 : -1;
  }
}


users.sort(byField('name'));
console.log(users)
/* users.sort(byField('age')); */