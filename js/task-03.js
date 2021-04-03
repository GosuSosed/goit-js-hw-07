const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

const makeListImagesEl = images => images.map(({url, alt}) => {
    const createListEl = document.createElement('li');
    createListEl.insertAdjacentHTML('beforeend', `<img class="img-item" src="${url}" alt="${alt}">`);
    createListEl.classList.add('js-list_item');
    return createListEl;
});
// console.log(makeListImagesEl(images));
const galleryList = document.querySelector('#gallery');
const galleryListEl = makeListImagesEl(images);
galleryList.append(...galleryListEl);
galleryList.classList.add('js-list');
console.log(galleryList);