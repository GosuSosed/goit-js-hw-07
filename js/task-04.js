const valueEl = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const decrement = () => counterValue -= 1;
const increment = () => counterValue += 1;

btnDecrement.addEventListener('click', () => {
    valueEl.textContent = decrement();
});
btnIncrement.addEventListener('click', () => {
    valueEl.textContent = increment();
});

console.log(valueEl);
console.log(btnDecrement);
console.log(btnIncrement);

// Второй способ решения, не знаю какой лучше?!

// const valueEl = document.querySelector('#value');
// const btnDecrement = document.querySelector('[data-action="decrement"]');
// const btnIncrement = document.querySelector('[data-action="increment"]');

// let counterValue = 0;

// const decrement = () => result(counterValue -= 1);
// const increment = () => result(counterValue += 1);
// const result = () => valueEl.textContent = counterValue;

// btnDecrement.addEventListener('click', decrement);
// btnIncrement.addEventListener('click', increment);

// console.log(valueEl);
// console.log(btnDecrement);
// console.log(btnIncrement);