const input = document.querySelector('.input');
const submitBtn = document.querySelector('.submit-button');
const list = document.querySelector('.list');

const KEY = '30810402-d2272724878c47174b870ed5b';
const value = 'car';

function feychData(value) {
  fetch(
    `https://pixabay.com/api?${KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`,
  ).then(responce => console.log(responce));
}
