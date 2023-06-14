const sliderEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);

sliderEl.addEventListener(`input`, textFontChange);

function textFontChange() {
  textEl.style.fontSize = sliderEl.value + 'px';
}