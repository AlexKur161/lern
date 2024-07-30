// Деструктурирующее присваивание – это специальный синтаксис, который позволяет нам «распаковать» массивы или объекты
//  в несколько переменных, так как иногда они более удобны.

// Пропускайте элементы, используя запятые
// Нежелательные элементы массива также могут быть отброшены с помощью дополнительной запятой:
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// Если мы хотим не просто получить первые значения, но и собрать все остальные,
// то мы можем добавить ещё один параметр, который получает остальные значения,
//  используя оператор «остаточные параметры» – троеточие ("..."):

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// Если мы хотим присвоить свойство объекта переменной с другим названием,
//  например, свойство options.width присвоить переменной w, то мы можем использовать двоеточие:

let options = {
  title3: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title3} = options;

let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user;
console.log(name);
console.log(age);
console.log(isAdmin);

// У нас есть объект salaries с зарплатами:

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 1000
};

function topSalary(salaries = {}) {
  if(Object.keys(salaries).length == 0){
    return null
  }
  let maxSalary = 0;
  for (let [name, salary] of Object.entries(salaries)) {
    (salary > maxSalary) ? maxSalary = salary : maxSalary;
  }
  return maxSalary;
}

topSalary(salaries)