const refs = {
    fontControl: document.querySelector('#font-size-control'),
    text: document.querySelector('#text')
};

const onChangeFont = (event) => refs.text.style.fontSize = `${event.target.value}px`;

refs.fontControl.addEventListener('input', onChangeFont);
