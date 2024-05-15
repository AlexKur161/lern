// У нас есть следующий объект:

let user = {
  name: "John",
  age: 30
};
// Проверьте, что этот объект не пустой и что в нем есть ключ age.
console.log('age' in user);

// Имеется массив объектов:

// Напишите программу на JavaScript, чтобы получить список ключей объекта JavaScript, их значений.

const obj = {
  name: 'ivan',
  age: 32,
  job: 'dev'
}

for(let key in obj){
  console.log(key);
  console.log(obj[key]);
}


// Напишите программу на JavaScript, чтобы получить длину объекта JavaScript.

// Метод Object.keys() возвращает массив ключей.

const address = {
    city: 'Bngalore',
    name: 'John',
    job: 'Software' 
}

console.log(Object.keys(address).length); // ["city","name","job"]

// Метод JavaScript Object.entries() используется для возврата массива, состоящего из перечислимых пар 
// свойств [ключ, значение] объекта, которые передаются в качестве параметра. Порядок свойств такой же,
// как задается путем перебора значений свойств объекта вручную.

function getObjectLength() {

	exampleObject = {
		id: 1,
		name: 'Arun',
		age: 30,
		department: 'sales'
	}
	const arKeys = Object.entries(exampleObject).length; // [['id', 1], ['name', 'Arun'], ['age', 30], ['department', 'sales']]
	console.log(arKeys);

}
getObjectLength();



//У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let test = {}
//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

//Если объект salaries пуст, то результат должен быть 0.

function calc(obj) {
  let sum = 0;
  for(key in obj) {
    sum += obj[key];
  }
  return sum;
}

console.log(calc(salaries));
console.log(calc(test));