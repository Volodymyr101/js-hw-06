const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const form = document.getElementById("controls");
const divToFill = document.getElementById("boxes");


createBtn.addEventListener ('click', onCreateBtn);

destroyBtn.addEventListener ('click',onDestroyBtn);

function onCreateBtn(event){
  let quantity = form.firstElementChild.value;
  createBoxes(quantity);
  };

function onDestroyBtn(event){
  
  divToFill.innerHTML = ''
  };

function createBoxes(amount){
  for (let i=0;i<amount;i+=1){
    const newDiv = document.createElement("div");
    newDiv.style.width = `${30+10*i}px`;
    newDiv.style.height = `${30+10*i}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    divToFill.append(newDiv);
};
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
