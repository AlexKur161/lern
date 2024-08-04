// Метод JSON.stringify(student) берёт объект и преобразует его в строку.

// Полученная строка json называется JSON-форматированным или сериализованным объектом.
//  Мы можем отправить его по сети или поместить в обычное хранилище данных.

// Полный синтаксис JSON.stringify:

let json = JSON.stringify(value[replacer, space])
// value
// Значение для кодирования.
// replacer
// Массив свойств для кодирования или функция соответствия function(key, value).
// space
// Дополнительное пространство (отступы), используемое для форматирования.

// Чтобы декодировать JSON-строку, нам нужен другой метод с именем JSON.parse.

// Синтаксис:

let value = JSON.parse(str[reviver]);
// str
// JSON для преобразования в объект.
// reviver
// Необязательная функция, которая будет вызываться для каждой пары (ключ, значение) и может преобразовывать значение.

let user = {
  name: "Василий Иванович",
  age: 35
};

const userJson = JSON.stringify(user);
const userParse = JSON.parse(userJson);
console.log(userParse)

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));
