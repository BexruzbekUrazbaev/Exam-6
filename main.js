fetch('https://api.escuelajs.co/api/v1/products')
  .then(response => response.json())
  .then(data => createCards(data.slice(0, 3)))
  .catch(error => console.error('Error fetching data:', error));

function createCards(data) {
  const container = document.querySelector('.cards');

  data.forEach(user => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = ` ${user.category.image}`;

    const id = document.createElement('h1');
    id.classList.add("id")
    id.textContent = `Id: ${user.id}`;

    const title = document.createElement('h2');
    title.textContent = `Title: ${user.title}`;

    const price = document.createElement('h3');
    price.textContent = `Price: $${user.price}`;

    
    card.append(img, id, title, price);

    container.appendChild(card);
  });
}
const btn = document.querySelector(".cards__btn");


btn.addEventListener("click", (e) => {
  fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => createCards(data.slice(0, 20)))
    .catch(error => console.error('Error fetching data:', error));

  function createCards(data) {
    const btn = document.querySelector(".cards__btn");
    const container = document.querySelector('.cards');

    data.forEach(user => {
      const card = document.createElement('div');
      card.className = 'card';

      const img = document.createElement('img');
      img.src = ` ${user.category.image}`;

      const id = document.createElement('h1');
      id.classList.add("id")
      id.textContent = `Id: ${user.id}`;

      const title = document.createElement('h2');
      title.textContent = `Title: ${user.title}`;

      const price = document.createElement('h3');
      price.textContent = `Price: $${user.price}`;


      card.append(img, id, title, price);

      container.appendChild(card);
    });
  }
})

























fetch('https://api.escuelajs.co/api/v1/products')
  .then(response => response.json())
  .then(data => createCards2(data.slice(0, 6)))
  .catch(error => console.error('Error fetching data:', error));

function createCards2(data) {
  const container = document.querySelector('.section4__cards');

  data.forEach(user => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = ` ${user.category.image}`;

    const id = document.createElement('h1');
    id.classList.add("id")
    id.textContent = `Id: ${user.id}`;

    const title = document.createElement('h2');
    title.textContent = `Title: ${user.title}`;

    const price = document.createElement('h3');
    price.textContent = `Description: $${user.description}`;



    card.append(img, id, title, price);

    container.appendChild(card);
  });
}

// const btn2 = document.querySelector(".cards__btn");


// btn.addEventListener("click", (e) => {
//   fetch('https://api.escuelajs.co/api/v1/products')
//     .then(response => response.json())
//     .then(data => createCards(data.slice(0, 20)))
//     .catch(error => console.error('Error fetching data:', error));

//   function createCards(data) {
//     const btn2 = document.querySelector(".cards__btn");
//     const container = document.querySelector('.cards');

//     data.forEach(user => {
//       const card = document.createElement('div');
//       card.className = 'card';

//       const img = document.createElement('img');
//       img.src = ` ${user.category.image}`;

//       const id = document.createElement('h1');
//       id.classList.add("id")
//       id.textContent = `Id: ${user.id}`;

//       const title = document.createElement('h2');
//       title.textContent = `Title: ${user.title}`;

//       const price = document.createElement('h3');
//       price.textContent = `Price: $${user.price}`;



//       card.append(img, id, title, price);

//       container.appendChild(card);




//     });



//   }
// })