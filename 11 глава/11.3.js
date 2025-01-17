const helloPromise = new Promise(function(resolve){
  resolve("Hello");
})

const worldPromise = helloPromise.then(function(value){
  // возвращаем новое значение
  return value + " World";
});
const metanitPromise = worldPromise.then(function(value){
  // возвращаем новое значение
  return value + " from METANIT.COM";
});
metanitPromise.then(function(finalValue){
  // получаем финальное значение
  console.log(finalValue);    // 
});



function generateNumber(str){
  return new Promise((resolve, reject) => {
      const parsed = parseInt(str);
      if (isNaN(parsed)) reject("Not a number");
      else resolve(parsed);
  });
};
function printNumber(str){
  generateNumber(str)
      .then(value => console.log(value))
      .catch(error => console.log(error)); 
}
printNumber("rty"); // Not a number
printNumber("3");   // 3


function generateNumber(str){
  return new Promise((resolve, reject) => {
      const parsed = parseInt(str);
      if (isNaN(parsed)) reject("Not a number");
      else resolve(parsed);
  });
};
function printNumber(str){
  generateNumber(str)
  .then(value => console.log(value))
  .catch(error => console.log(error))
  .finally(() => console.log("End"));
}

printNumber("3");
printNumber("triuy");