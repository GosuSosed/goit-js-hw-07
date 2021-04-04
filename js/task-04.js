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