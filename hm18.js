// За допомогою fetch треба зробити запит на будь-який сервіс з https://jsonplaceholder.typicode.com/. Це може бути /posts, /users або інші.

// Зробити запит, розпарсити данні з json, та вивести у консоль результат.

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });


