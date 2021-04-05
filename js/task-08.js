const refs = {
    render: document.querySelector('[data-action="render"]'),
    destroy: document.querySelector('[data-action="destroy"]'),
    boxes: document.getElementById('boxes'),
    inputity: document.querySelector('#controls > input')
};

const getAmount = () => {
  const amount = document.querySelector('#controls input').value;
  createBoxes(amount);
}

const createBoxes = (amount) => {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    let div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  refs.boxes.appendChild(fragment);
}

const destroyBoxes = () => refs.boxes.innerHTML = '';
const clearInput = () =>   refs.inputity.value = '';

const random = () => Math.floor(Math.random() * 256);

refs.render.addEventListener('click', getAmount);
refs.destroy.addEventListener('click', destroyBoxes);
refs.destroy.addEventListener('click', clearInput);
