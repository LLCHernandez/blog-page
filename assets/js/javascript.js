const btnEl = document.querySelector('#btn')
const userEl = document.querySelector('#username');
const titleEl = document.querySelector('#title');
const contentEl = document.querySelector('#content');
const usserEl = document.querySelector('#usser');
const ttitleEl = document.querySelector('#ttitle');
const ccontentEl = document.querySelector('#ccontents');

function displayMessage(type, message) {
  msgDiv.textcontent = message;
  msgDiv.setAttribute('class', type);
}

const postBlog = function () {
  const usser = localStorage.getItem('username');
  const ttitle = localStorage.getItem('title');
  const ccontentInfo = localStorage.getItem('contents');
  
  usser.createElement()
};

btnEl.addEventListener('sumbit', function (event) {
  event.preventDefault();

  const user = userEl.value;
  const title = titleEl.value;
  const contentInfo = contentEl.value;
  
  if (user === '') {
    displayMessage('error', 'Username cannot be blank');
  } else if (title === '') {
    displayMessage('error', 'Title cannot be blank');
  } else if (contentInfo === '') {
    displayMessage('error', 'Content cannot be blank');
  } else {
    displayMessage('success', 'Post created successfully');

    localStorage.setItem('username', user);
    localStorage.setItem('title', title);
    localStorage.setItem('contents', contentInfo);
}
});