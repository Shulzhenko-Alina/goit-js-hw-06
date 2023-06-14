
const inputEl = document.querySelector('#validation-input');
const inputValidLength = Number(inputEl.dataset.length);
inputEl.addEventListener(`blur`, onInputBlur);

function onInputBlur() {
  if (inputEl.value.length === inputValidLength) {
    inputEl.classList.remove(`invalid`);
    inputEl.classList.add(`valid`);
  } else {
    inputEl.classList.remove(`valid`);
    inputEl.classList.add(`invalid`);
  }
}