function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));


function go() {
  showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });
}

function showCircle(cx, cy, radius) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  return new Promise(resolve => {
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        resolve(div);
      });
    }, 0);
  })
}


fetch('https://jsonplaceholder.typicode.com/poаsts')
.then(response => response.json())
.then(function(response){
  
})
.catch(function(response){
  console.log('сработал reject')
})
let promise1 = new Promise(function(resolve,reject) {
  try{
    console.log('начал выполнение')
    let items = fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(items)
    resolve(items.json())
  }
  catch(err){
    console.log('сработало')
    reject(new Error('Ошибка'))
  }
})
.then(response => console.log(response))
.catch(error => console.log(error));