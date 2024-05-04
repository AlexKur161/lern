let value = prompt('Какое "официальное" название JavaScript?', '');

    if (value == 'ECMAScript') {
      alert('Верно!');
    } else {
      alert('Не знаете? ECMAScript!');
    }

let value2 = prompt('Введите число', 0);

if (value2 > 0) {
  alert( 1 );
} else if (value2 < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

let result = (a + b < 4) ? 'Мало' : 'Много';


let message = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' : 
(login == '') ? 'Нет логина' : '';