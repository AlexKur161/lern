// Object.create(proto[, descriptors]) – создаёт пустой объект со свойством [[Prototype]],
//  указанным как proto (может быть null), и необязательными дескрипторами свойств.


// Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта
//  obj (то же самое, что и геттер __proto__).


// Object.setPrototypeOf(obj, proto) – устанавливает
//  свойство [[Prototype]] объекта obj как proto (то же самое, что и сеттер __proto__).

//  __proto__ – это геттер/сеттер для свойства [[Prototype]], и находится он в Object.prototype, как и другие методы.

// Мы можем создавать объекты без прототипов с помощью Object.create(null).

let dictionary = Object.create(null, {
  toString: { 
    value() { 
      return Object.keys(this).join();
    }
  }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for(let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

alert(dictionary); // "apple,__proto__"

