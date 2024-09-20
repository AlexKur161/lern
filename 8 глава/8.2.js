// Свойство F.prototype (не путать с [[Prototype]])
//  устанавливает [[Prototype]] для новых объектов при вызове new F().

// Значение F.prototype должно быть либо объектом, либо null.
//  Другие значения не будут работать.

// Свойство "prototype" является особым, только когда оно
//  назначено функции-конструктору, которая вызывается оператором new.

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true


function Rabbit2() {}
Rabbit2.prototype = {
  eats: true
};

let rabbit2 = new Rabbit2();

Rabbit2.prototype = {};

alert( rabbit2.eats ); // true



function Rabbit3() {}


Rabbit3.prototype = {
  eats: true
};

let rabbit3 = new Rabbit3();

Rabbit3.prototype.eats = false;

alert( rabbit3.eats ); // false

function Rabbit4() {}
Rabbit4.prototype = {
  eats: true
};

let rabbit4 = new Rabbit4();

delete rabbit4.eats;

alert( rabbit4.eats ); // true

function Rabbit5() {}
Rabbit5.prototype = {
  eats: true
};

let rabbit5 = new Rabbit5();

delete Rabbit5.prototype.eats;

alert( rabbit5.eats ); // undefined