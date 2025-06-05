const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = form.querySelector('button');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');

const validateEmail = (email) => {
  const regex = /^[\w.-]+@[\w.-]+\.\w+$/;
  return regex.test(email);
};

const isFormValid = () => {
  return (
    nameInput.value.trim() !== '' &&
    validateEmail(emailInput.value.trim()) &&
    messageInput.value.trim() !== ''
  );
};

function updateButtonBehavior() {
  if (isFormValid()) {
    submitButton.classList.remove('button-escape');
  } else {
    submitButton.classList.add('button-escape');
  }
}

form.addEventListener('input', updateButtonBehavior);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  formSuccess.textContent = '';

  let isValid = true;

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    emailError.textContent = 'Enter a valid email address.';
    isValid = false;
  }

  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Message cannot be empty.';
    isValid = false;
  }

  if (isValid) {
    window.location.href = "thankyou.html"; // Redirect
  }
});

submitButton.addEventListener('mouseenter', () => {
  if (submitButton.classList.contains('button-escape')) {
    const offsetX = (Math.random() - 0.5) * 200;
    const offsetY = (Math.random() - 0.5) * 100;
    submitButton.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }
});

submitButton.addEventListener('mouseleave', () => {
  if (submitButton.classList.contains('button-escape')) {
    setTimeout(() => {
      submitButton.style.transform = 'translate(0, 0)';
    }, 200);
  }
});
