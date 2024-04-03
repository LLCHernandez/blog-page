const postBlog = function () {
    const usser = localStorage.getItem('username');
    const ttitle = localStorage.getItem('title');
    const ccontentInfo = localStorage.getItem('contents');
    let usserPost = document.createElement('li');
    let ttitlePost = document.createElement('li');
    let ccontentInfoPost = document.createElement('li');

    usserPost.textContent

    console.log(usser);
    console.log(ttitle);
    console.log(ccontentInfo);
  };

  postBlog();