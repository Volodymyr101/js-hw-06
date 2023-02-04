const decrEl = document.querySelector('[data-action="decrement"]');
const incrEl = document.querySelector('[data-action="increment"]');
const result = document.getElementById("value");

incrEl.addEventListener("click", () => {
    result.textContent=result.textContent+1;
  })

decrEl.addEventListener("click", () => {
    result.textContent=Number(result.textContent)-1;
  })
