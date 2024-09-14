// setTimeout устанавливает this = window для вызова функции

// Результатом вызова func.bind(context) является особый «экзотический объект» (термин взят из спецификации), который вызывается
//  как функция и прозрачно передаёт вызов в func, при этом устанавливая this=context.

// Метод bind возвращает «привязанный вариант» функции func, фиксируя контекст this и первые аргументы arg1, arg2…, если они заданы.

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(() => user.login(true), () => user.login(false));

// свой bind
let user = {
  firstName: "Alex"
};
function myBind(func, context, ...arg) {
	return function() {
  
		return func.call(context, ...arg);
	}
}


function test(a, b) {
console.log(a)
	console.log(this.firstName + a + b);
}

test.myBind = myBind(test, user, ' test a', ' test b');
test.myBind();