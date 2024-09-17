// В JavaScript все объекты имеют скрытое свойство [[Prototype]], которое является либо другим объектом, либо null.

// Мы можем использовать obj.__proto__ для доступа к нему
// (исторически обусловленный геттер/сеттер, есть другие способы, которые скоро будут рассмотрены).

// Объект, на который ссылается [[Prototype]], называется «прототипом».

// Если мы хотим прочитать свойство obj или вызвать метод, которого не существует у obj, тогда JavaScript попытается найти его в прототипе.

// Операции записи/удаления работают непосредственно с объектом, они не используют прототип (если это обычное свойство, а не сеттер).

// Если мы вызываем obj.method(), а метод при этом взят из прототипа,
// то this всё равно ссылается на obj. Таким образом, методы всегда работают с текущим объектом, даже если они наследуются.

// Цикл for..in перебирает как свои, так и унаследованные свойства.
// Остальные методы получения ключей/значений работают только с собственными свойствами объект


let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;


let hamster = {
  stomach: [],

  eat(food) {
    let isOwn = this.hasOwnProperty('stomach')
    if(isOwn){
      this.stomach.push(food);
    }else{
      this.stomach = [];
      this.stomach.push(food);
    }
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log( speedy.stomach ); // apple
lazy.eat("aboba");
console.log(lazy.stomach); // "aboba"
lazy.eat("beer");
console.log(lazy.stomach) ; // "aboba", "beer"
console.log(speedy.stomach); // apple