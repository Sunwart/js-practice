import './css/styles.css';

// const commentList = document.querySelector('.countries');

// fetchCountries('sw').then(renderCountries).catch();

// function fetchCountries(name) {
//   return fetch(
//     `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,languages`,
//   ).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw Error('Ой..');
//   });
// }

// function renderCountries(countries) {
//   const markup = countries.map(({ name: { official }, capital, population, languages }) => {
//     console.log(
//       `${official}, ${capital[0]}, ${population}, ${Object.values(languages).join(', ')}`,
//     );
//   });
// }

const BASE_URL = 'http://localhost:3000';

function fetchBooks() {
  return fetch(`${BASE_URL}/books`).then(res => res.json());
}

function fetchBookByID(id) {
  return fetch(`${BASE_URL}/books/${id}`).then(res => res.json());
}

// fetchBooks().then(console.log); // render function can be here
fetchBookByID(3)
  .then(console.log)
  .catch(error => console.log(error));

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
  return fetch(`${BASE_URL}/books/${id}`, options).then(res => res.json());
}

// removeBook(9).catch(error => console.log(error));
