const inputForm = document.getElementById("validation-input");



// inputForm.addEventListener("blur", () => {
//     if(inputForm.value.length === Number(inputForm.dataset.length))
//         {inputForm.classList.add("validation-input.valid")} else
//         {inputForm.classList.add("validation-input.invalid")}

//     inputForm.id = "validation-input.valid"


//   });


  inputForm.addEventListener("blur", () => {
    if(inputForm.value.length === Number(inputForm.dataset.length))
        {inputForm.classList.remove("invalid");
        inputForm.classList.add("valid")
        } else
        {inputForm.classList.remove("valid");
        inputForm.classList.add("invalid")}




  });