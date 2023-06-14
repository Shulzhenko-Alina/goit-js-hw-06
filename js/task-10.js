function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('#controls input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  createButton.addEventListener('click', function () {
    const amount = input.value;
    createBoxes(amount);
  });

  destroyButton.addEventListener('click', function () {
    destroyBoxes();
  });

  function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
      const size = 30 + i * 10;
      const color = getRandomHexColor();

      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = color;

      boxesContainer.appendChild(box);
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }
});
