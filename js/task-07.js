const onOutput = document.getElementById("text");
const onInput = document.getElementById("font-size-control");


onInput.addEventListener("input", (event)=> {

    onOutput.style.fontSize = `${onInput.value}px`;

    // onOutput.style.fontSize = `${onInput.value*2}%`;


  });

