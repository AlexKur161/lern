// Создайте функцию, которая принимает объект с данными о заказе в виде
// карты (ключ - название товара, значение - количество) и возвращает общую стоимость заказа.
const arrayUsers = new Map([
  ['майка', 10],
  ['шорты', 40],
  ['брюки', 30]
])
function mapArray(ar) {
  let sum = 0;
  ar.forEach((value, key) => {
    sum += value;
  })
  return sum;
}
 mapArray(arrayUsers);