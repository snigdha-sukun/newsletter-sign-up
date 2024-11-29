const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMessage = document.getElementById('error-msg');
const signUpContainer = document.getElementById('sign-up');
const successContainer = document.getElementById('success');
const dismissBtn = document.getElementById('dismiss');
const submittedEmail = document.getElementById('input_email');

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.match(emailRegex);
};

const handleSubmit = (e) => {
    e.preventDefault(e);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (!validateEmail(data.email)) {
        console.log('Please provide a valid email');
        email.classList.add('input_error');
        errorMessage.style.visibility = 'visible';
        return;
    }
    email.classList.remove('input_error');
    email.value = '';
    errorMessage.style.visibility = 'hidden';
    signUpContainer.style.display = 'none';
    successContainer.style.display = 'flex';
    submittedEmail.textContent = data.email;

    console.log(data);
};

form.addEventListener('submit', handleSubmit);
dismissBtn.addEventListener('click', () => {
    successContainer.style.display = 'none';
    signUpContainer.style.display = 'flex';
});
