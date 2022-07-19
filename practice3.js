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

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

const listItemsMarkup = createListItemsMarkup(tech);
console.log(listItemsMarkup);

refs.list.innerHTML = listItemsMarkup;

function createListItemsMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}
