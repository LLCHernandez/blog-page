const btnEl = document.querySelector('#btn')
const userEl = document.querySelector('#username');
const titleEl = document.querySelector('#title');
const contentEl = document.querySelector('#content');
const usserEl = document.querySelector('#usser');
const ttitleEl = document.querySelector('#ttitle');
const ccontentEl = document.querySelector('#ccontents');
const msgDiv = document.querySelector('#msg');

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

btnEl.addEventListener('click', function (event) {
  event.preventDefault();

  const user = userEl.value;
  const title = titleEl.value;
  const contentInfo = contentEl.value;
  
  if (user === '') {
    displayMessage('error', 'Username cannot be blank');
    return;
  } else if (title === '') {
    displayMessage('error', 'Title cannot be blank');
    return;
  } else if (contentInfo === '') {
    displayMessage('error', 'Content cannot be blank');
    return;
  } else {
    displayMessage('success', 'Post created successfully');

    localStorage.setItem('username', user);
    localStorage.setItem('title', title);
    localStorage.setItem('contents', contentInfo);
    displayMessage();
}

window.location.href="posts.html"

});