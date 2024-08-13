// Рекурсия – это приём программирования,
//  полезный в ситуациях, когда задача может быть естественно разделена на несколько аналогичных,
//   но более простых задач.

// Контекст выполнения – специальная внутренняя структура данных, которая
//  содержит информацию о вызове функции. Она включает в себя конкретное место в коде,
//   на котором находится интерпретатор, локальные переменные функции,
//  значение this (мы не используем его в данном примере) и прочую служебную информацию.

// Рекурсивно определяемая структура данных – это структура данных,
//  которая может быть определена с использованием самой себя.

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
function sumTo(n) { 
  let sum = n;
  console.log('test',n);
  for(let i = 1; i < n; i++) {
    sum += i
  }
  return sum;
}

console.log( sumTo(100) ); // 5050

function sumTo(n) { 
	if(n == 1) {
  	return 1;
  }else {
  console.log(n)
  	return n + sumTo(n - 1);
  }
}

console.log( sumTo(100) ); // 5050


function factorial(n){
  if(n === 1){
  return 1
  }else{
  return n * factorial(n - 1)
  }
  
  }
  
  console.log(factorial(5)) // 120

  function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  
  alert( fib(3) ); // 2
  alert( fib(7) ); // 13
  alert( fib(77) ); // 5527939700884757


// связный список

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {

  alert(list.value); // выводим текущий элемент

  if (list.next) {
    printList(list.next); // делаем то же самое для остальной части списка
  }

}

printList(list);