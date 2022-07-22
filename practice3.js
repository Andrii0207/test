const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.JS' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

// const refs = {
//   list: document.querySelector('.js-list'),
//   input: document.querySelector('#filter'),
// };

// // refs.input.addEventListener('input', onFilterChange);

// function createListItemsMarkup(items) {
//   return items.map(item => `<li>${item.label}</li>`).join('');
// }

// const listItemsMarkup = createListItemsMarkup(tech);
// console.log(listItemsMarkup);

// refs.list.innerHTML = listItemsMarkup;

// ////// refs.list.innerHTML = listItemsMarkup;///////
// populateList(listItemsMarkup);

// function onFilterChange(evt) {
//   const filter = evt.target.value.toLowerCase();
//   console.log(filter);
//   const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter));
//   console.log(filteredItems);
//   const listItemsMarkup = createListItemsMarkup(filteredItems);
//   console.log(listItemsMarkup);
//   /////// refs.list.innerHTML = listItemsMarkup;///////
//   populateList(listItemsMarkup);
// }

// function populateList(markup) {
//   refs.list.innerHTML = markup;
// }

///////////////////////////////
///////////////////////////////
///////////////////////////////

const refs = {
  input: document.querySelector('#filter'),
  list: document.querySelector('.js-list'),
};

refs.input.addEventListener('input', onFilterChange);

function onCreateListItems(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}

const listItemsMarkup = onCreateListItems(tech);
console.log(listItemsMarkup);

// refs.list.innerHTML = listItemsMarkup;
filteredList(listItemsMarkup);

function onFilterChange(evt) {
  const filter = evt.target.value.toLowerCase();
  console.log(filter);
  const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter));
  console.log(filteredItems);
  const listItemsMarkup = onCreateListItems(filteredItems);
  console.log(listItemsMarkup);
  // refs.list.innerHTML = listItemsMarkup;
  filteredList(listItemsMarkup);
}

function filteredList(markup) {
  refs.list.innerHTML = markup;
}
