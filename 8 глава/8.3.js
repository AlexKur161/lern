// Все встроенные объекты следуют одному шаблону:
// Методы хранятся в прототипах (Array.prototype, Object.prototype, Date.prototype и т.д.).
// Сами объекты хранят только данные (элементы массивов, свойства объектов, даты).
// Примитивы также хранят свои методы в прототипах объектов-обёрток: Number.prototype,
//  String.prototype, Boolean.prototype. Только у значений undefined и null нет объектов-обёрток.
// Встроенные прототипы могут быть изменены или дополнены новыми методами.
//  Но не рекомендуется менять их. Единственная допустимая причина – это добавление нового метода из стандарта,
//   который ещё не поддерживается движком JavaScript.

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};

function f() {
  alert("Hello! alex");
}

f.defer(1000); 

Function.prototype.defer = function(ms) {
  let f = this;
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
};
function f(a, b) {
  alert( a + b );
}

f.defer(1000)(3, 8);