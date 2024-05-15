// Использование Spread
// С помощью spread можно клонировать объект. Копия будет неглубокой.

const food = { beef: '?', bacon: '?' };

const cloneFood = { ...food };

console.log(cloneFood); 
// { beef: '?', bacon: '?' }

 // Использование Object.assign
// Object.assign также создает неглубокую копию объекта.

const food2 = { beef: '?', bacon: '?' };

const cloneFood2 = Object.assign({}, food2);

console.log(cloneFood2);
// { beef: '?', bacon: '?' }

//Использование JSON
//Этот способ предоставляет глубокую копию. Стоит упомянуть, что это быстрый и грязный способ глубокого клонирования объекта.

const food3 = { beef: '?', bacon: '?' };

const cloneFood3 = JSON.parse(JSON.stringify(food3))

console.log(cloneFood3); 
// { beef: '?', bacon: '?' }