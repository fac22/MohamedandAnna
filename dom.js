const warning = document.getElementById('warning-text');
warning.hidden = true;

function validateMessage(textarea) {
  const length = textarea.value.length;
  if (length > 149) {
    textarea.setAttribute('aria-invalid', true);
    warning.hidden = false;
  } else {
    textarea.setAttribute('aria-invalid', false);
  }
}

function validateMessageOnInput() {
  const message = document.getElementById('message');
  message.addEventListener('keydown', function () {
    validateMessage(message);
  });
}

validateMessageOnInput();

function showRequest() {
  const submission = document.getElementById('submission-confirmed');
  submission.insertAdjacentHTML('beforeend', `Thank you for your submission!`);

  const name = document.getElementById('display-name');
  const nameData = document.getElementById('name').value;
  name.insertAdjacentHTML('beforeend', `Name: ${nameData}`);

  const email = document.getElementById('display-email');
  const emailData = document.getElementById('email').value;
  email.insertAdjacentHTML('beforeend', `Email: ${emailData}`);

  const message = document.getElementById('display-message');
  const messageData = document.getElementById('message').value;
  message.insertAdjacentHTML('beforeend', `Your message: ${messageData}`);

  document.getElementById('my-button').disabled = true;
}

document.querySelector('form').onsubmit = (event) => {
  event.preventDefault();

  showRequest();
};
