// В браузере глобальные функции и переменные, объявленные
//  с помощью var (не let/const!), становятся свойствами глобального объекта:

var gVar = 5;

alert(window.gVar); // 5 (становится свойством глобального объекта)

let gLet = 5;

alert(window.gLet); // undefined (не становится свойством глобального объекта)

// Глобальный объект хранит переменные,
//  которые должны быть доступны в любом месте программы.

// Это включает в себя как встроенные объекты, например,
//  Array, так и характерные для окружения свойства,
//   например, window.innerHeight – высота окна браузера.

// Глобальный объект имеет универсальное имя – globalThis.