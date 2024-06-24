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