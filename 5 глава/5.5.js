// Given a mixed array of number and string representations of integers,
// add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// Мое Решение
const arr = ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'];
function divCon(x){
  let numb = 0;
  let str = 0;
  x.forEach((item) => {
    typeof item === 'string' ?  str +=  +item :  numb +=  +item;
  })
return numb - str;
}

divCon(arr)

// Оптимальное Решение которое подсмотрел
function divCon(x){
  return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
}

// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

function toNumberArray(stringarray){
  return stringarray.map(item => Number(item))
}

// Решение которое подсмотрел
function toNumberArray(stringarray)
{
  return stringarray.map(parseFloat);
}


// Task
// You will be given an array of numbers. You have to sort the odd numbers
// in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  let id = [];

 array.filter((v, i) => {
      if (v % 2 != 0) {
        id.push(i);
        return v;
      }
    })
    .sort((a, b) => a - b)
    .forEach((v, i) => (array[id[i]] = v));
  return array
}

// Решение которое подсмотрел
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}