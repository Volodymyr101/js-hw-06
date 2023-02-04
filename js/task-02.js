const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemsToArray = ingredients.map(ingregient => {
  const itemEl = document.createElement("li");
  itemEl.textContent =ingregient;
  itemEl.classList.add("item");
  return itemEl}
);


const listToAdd = document.getElementById("ingredients")
listToAdd.append(...itemsToArray);








console.log(listToAdd);