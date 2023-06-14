const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const IngredientsEl = document.querySelector("#ingredients");
const listIngredients = ingredients.map((ingredient) => {
  const listEl = document.createElement("li");
  listEl.textContent = ingredient;
  return listEl;
});
console.log(listIngredients);
IngredientsEl.append(...listIngredients);