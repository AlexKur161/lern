const obj = {
  name: 'Alex',
  job: 'dev',
  age: 28,
  length: 3
}

const makeIterator = (obj) => {
  obj[Symbol.iterator] = (
    i = 0,
    values = Object.values(obj)
  ) => ({
    next: () => (
      i < obj.length
        ? { done: false, value: values[i++] }
        : { done: true }
    ),
  });
};
makeIterator(obj)
for (item of obj) {
  console.log(item)
}
console.log(Array.from(obj)) // ["Alex","dev",28]