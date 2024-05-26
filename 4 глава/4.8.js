// Существует всего 3 типа (хинта):

// "string" (для alert и других операций, которым нужна строка)
// вывод
alert(obj);

// используем объект в качестве ключа
anotherObj[obj] = 123;


// "number" (для математических операций)

// явное преобразование
let num = Number(obj);

// математические (не считая бинарного плюса)
let n = +obj; // унарный плюс
let delta = date1 - date2; // даты

// сравнения больше/меньше
let greater = user1 > user2;


// "default" (для некоторых других операторов, обычно объекты реализуют его как "number")

// бинарный плюс использует хинт "default"
let total = obj1 + obj2;

// obj == number использует хинт "default"
if (user == 1) {  };


// Спецификация явно описывает для каждого оператора, какой ему следует использовать хинт.

// Алгоритм преобразования таков:

// Сначала вызывается метод obj[Symbol.toPrimitive](hint), если он существует,
// В случае, если хинт равен "string"
// происходит попытка вызвать obj.toString() и obj.valueOf(), смотря что есть.
// В случае, если хинт равен "number" или "default"
// происходит попытка вызвать obj.valueOf() и obj.toString(), смотря что есть.
// Все эти методы должны возвращать примитив (если определены)


// При сложении вызывает хинт default и ведет себя как number
let test = {
  a: 'keks',
  numb: 5,
  toString(){
    return this.a;
  },
  valueOf() {
    return this.numb;
  }
}

let test2 = {
  a: 'keks',
  numb: 5,
  toString(){
    return this.a;
  },
  valueOf() {
    return this.numb;
  }
}

console.log(test + test2); // 10 
console.log(Number(test) == Number(test2)); // true
console.log(test == 5); // true
console.log(test == test2); // false

// Почему в последнем false, это потому что он не преобразует обьект в примитив?


