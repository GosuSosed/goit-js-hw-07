const inputRef = document.querySelector('#validation-input');
const dataLength = inputRef.getAttribute('data-length');
console.log(inputRef);
console.log(dataLength);

const onInputFocus = () => {console .log('click')};
const onInputBlur = (event) => {
   if (event.target.value.length < dataLength) {
    event.target.classList.add('invalid')
    event.target.classList.remove('valid')
   } else {
    event.target.classList.add('valid')
    event.target.classList.remove('invalid')
   }
   console.log('event=>', event.target.value.length);
};

inputRef.addEventListener('focus', onInputFocus)
inputRef.addEventListener('blur', onInputBlur)

