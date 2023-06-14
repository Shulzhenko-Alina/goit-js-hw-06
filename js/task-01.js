
const itemsEl = document.querySelectorAll(".item");

console.log(`У списку ${itemsEl.length} категорії.`);

itemsEl.forEach((itemEl) => {
  const nameCategory = itemEl.querySelector("h2");
  const quantityItems = itemEl.querySelectorAll("li");

  console.log(`Категорія: ${nameCategory.textContent}`);
  console.log(`Кількість елементів: ${quantityItems.length}`);
});
