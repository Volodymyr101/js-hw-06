let toBackend = new Object();

const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitBnt);   

function onSubmitBnt (event) {
    let emailField = form.elements.email.value;
    let passwordField = form.elements.password.value;

    event.preventDefault();

    if (passwordField===""||emailField===""){
        alert("все поля должны быть заполнены");
        // return
    } else {
        toBackend.email = emailField;
        toBackend.password = passwordField;
        console.log(toBackend);
    };  


form.reset();
}
