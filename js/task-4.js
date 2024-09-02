const form = document.querySelector('.login-form');
const onSubmit = event => {
    event.preventDefault();
    let email = form.elements.email.value;
    let password = form.elements.password.value;

    if (email.length == 0 || password.length == 0) {
        alert('All form fields must be filled in');
    } else {
        let credentials = {
            email: email.trim(),
            password: password.trim(),
        };
        console.log(credentials);
        form.reset();
    }
};

form.addEventListener('submit', onSubmit);
