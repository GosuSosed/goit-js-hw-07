const refs = {
    input: document.querySelector('#name-input'),
    title: document.querySelector('#name-output')
};
console.log(refs.input);
console.log(refs.title);

const onInputChange = event => refs.input.value ? refs.title.textContent = refs.input.value : refs.title.textContent = 'незнакомец';

refs.input.addEventListener('input', onInputChange);
