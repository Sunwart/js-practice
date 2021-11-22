import './css/styles.css';
// ++++++++++++++++++++++++++   CRUD  ++++++++++++++++++++++++++

const BASE_URL = 'http://localhost:3000';

function fetchBooks() {
  return fetch(`${BASE_URL}/books`).then(res => res.json());
}

function fetchBookByID(id) {
  return fetch(`${BASE_URL}/books/${id}`).then(res => res.json());
}

// fetchBooks().then(console.log); // render function can be here
// fetchBookByID(3)
//   .then(console.log)
//   .catch(error => console.log(error));

function addBook(book) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  };
  return fetch(`${BASE_URL}/books`, options).then(res => res.json());
}

// addBook({
//   title: 'fu-book',
//   author: 'someone',
//   genres: ['g1', 'g4'],
//   rating: 1,
// }).then(console.log).catch(error => console.log(error));

function updateBook(id, book) {
  const options = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  };
  return fetch(`${BASE_URL}/books/${id}`, options).then(res => res.json());
}

// updateBook(4, { title: 'cool book' }).then(console.log).catch(error => console.log(error));
// updateBook(5, { rating: 3 }).then(console.log).catch(error => console.log(error));

function removeBook(id) {
  const options = {
    method: 'DELETE',
  };
  return fetch(`${BASE_URL}/books/${id}`, options);
}

// removeBook(9).catch(error => console.log(error));

//  ++++++++++++++++++++++++++  async/await    ++++++++++++++++++++++++++

function getFruit(name) {
  const fruits = { apple: 'тиблочко', orange: 'ліпісіна', kiwi: 'ківі' };
  return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 1000));
}

async function makeSmoothie() {
  try {
    console.time('time');

    const apple = getFruit('apple');
    const orange = getFruit('orange');
    const kiwi = getFruit('kiwi');

    const fruits = await Promise.all([apple, orange, kiwi]);

    console.timeEnd('time');

    return fruits;
  } catch (error) {
    console.log(error.name, ': ', error.message);
  }
}

makeSmoothie().then(fruits => console.log(fruits));

// +++++++++++ practice

async function addNewBook(book) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  };

  const response = await fetch(`${BASE_URL}/books`, options);
  const newBook = await response.json();
  return newBook;
}

// addNewBook({ title: 'Book2', author: 'someontElse2', genres: ['g3', 'g4'], rating: 5 }).then(
//   console.log,
// );

async function renderBook(newBook) {
  try {
    const book = await addNewBook(newBook);
    console.log(book);
  } catch (error) {
    console.log(error.name, ': ', error.message);
  }
}

renderBook(15);

// --------------------- TO DO LIST  ---------------------

const add = document.querySelector('.add');
add.addEventListener('submit', addTask);

const tasks = document.querySelector('.tasks');

function addTask(event) {
  event.preventDefault();
  const task = event.currentTarget.firstElementChild.value;
  if (task === '' || task === ' ') {
    return;
  }
  tasks.insertAdjacentHTML(
    'afterbegin',
    `<li class="text">${task}<button class="x-btn" type="button"> x </button></li>`,
  );
  document.querySelector('.x-btn').addEventListener('click', onClick);
}

function onClick(event) {
  if (event.currentTarget.parentNode.classList.contains('red')) {
    event.currentTarget.parentNode.remove();
    return;
  }
  event.currentTarget.parentNode.classList.add('red');
}
