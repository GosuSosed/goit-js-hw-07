const listCategories = document.querySelector('#categories');
console.log(listCategories);
const listCategoriesCount = `В списке ${listCategories.children.length} категории.`;
console.log(listCategoriesCount);

const listCategoriesItem = listCategories.querySelectorAll('.item').forEach(el => {
    const title = el.firstElementChild.textContent
    const countElementCategories = el.lastElementChild.childElementCount
  return console.log(`Категория: ${title} \nКоличество элементов: ${countElementCategories}`)
});