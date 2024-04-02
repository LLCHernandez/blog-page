const userEl = $('#subbut');
const titleEl = $('#title');
const contentEl = $('#content');
const guestBookDisplayEl = $('#guest-book-display');

const postBlog = function () {
  
};

const handleFormSubmit = function (event) {
  event.preventDefault();
  const title = titleEl.val();
  const content = contentEl.val();
  const user = userEl.val();
  if (!user || !title || !content) {
    console.log('You need to fill out the form!');
    return;
  }
  postBlog(title, content, user);
  userEl.val('');
  titleEl.val('');
  contentEl.val('');
};

userEl.addEventListener('submit', handleFormSubmit);