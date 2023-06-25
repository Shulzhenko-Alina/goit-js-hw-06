// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.





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