const counterValue = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterEl = 0;

incrementBtn.addEventListener("click", () => {
  counterEl += 1;
  counterValue.textContent = counterEl;
});

decrementBtn.addEventListener("click", () => {
  counterEl -= 1;
  counterValue.textContent = counterEl;
});