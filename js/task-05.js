const onOutput = document.getElementById("name-output");
const onInput = document.getElementById("name-input");


onInput.addEventListener("input", (event)=> {
    onOutput.textContent=onInput.value;
  });



// dONE