const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemsToInsert = ingredients.map(ingregient => {
  const itemEl = document.createElement("li");
  itemEl.textContent =ingregient;
  itemEl.classList.add("item");
  return itemEl}
);

document.getElementById("ingredients").append(...itemsToInsert);
// Done