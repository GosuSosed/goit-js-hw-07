const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  
const makeListItem = ingredients => ingredients.map(ingredient => {
      const item = document.createElement('li');
      item.textContent = ingredient;
      return item;
});

const listItem = makeListItem(ingredients);

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...listItem);
console.log(ingredientsList);