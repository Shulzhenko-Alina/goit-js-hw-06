// Напиши скрипт, який:

// 1) Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2) Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// 3) Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.




const itemsEl = document.querySelectorAll(".item");

console.log(`У списку ${itemsEl.length} категорії.`);

itemsEl.forEach((itemEl) => {
  const nameCategory = itemEl.querySelector("h2");
  const quantityItems = itemEl.querySelectorAll("li");

  console.log(`Категорія: ${nameCategory.textContent}`);
  console.log(`Кількість елементів: ${quantityItems.length}`);
});
