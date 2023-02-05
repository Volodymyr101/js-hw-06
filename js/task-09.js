const buttonEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

buttonEl.addEventListener("click", onBtnClick);


function onBtnClick (event){
  textEl.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}