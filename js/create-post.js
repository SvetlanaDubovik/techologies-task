"use strict";

(function() {
  
  let createMsg = function(field) {
    let fieldClass = 'not-filled__msg_' + field.id;
    let notFilledMsg = document.querySelector('.' + fieldClass);
    if (!notFilledMsg) {    
      let paragraph = document.createElement('p');      
      paragraph.classList.add(fieldClass);
      paragraph.textContent = "*Вы не заполнили это поле";
      paragraph.style.color = "red";
      paragraph.style.marginTop = "-10px";
      field.classList.add('not-filled');
      field.parentNode.appendChild(paragraph);
    } 
  };
    
  //Если в текстэрия ввести энтеры, то она засчитает это за символы и, соответственно, ругаться не станет
  let checkField = function(field) {
    let fieldVal = field.value;
    if(fieldVal.length) {
      return fieldVal;
    } else {
      createMsg(field);
    }
  };
  
  let createArticle = function(name, description) {
    let blog = document.querySelector('.blog');
    let firstBlogChild = blog.firstChild;
    let blogItem = document.createElement('div');
    blogItem.classList.add('blog__item');
    let blogItemWrapper = document.createElement('div');
    blogItemWrapper.classList.add('blog__item_wrapper');
    let post = document.createElement('article');
    post.classList.add('post');
    let header3 = document.createElement('h3');
    let header3Link = document.createElement('a');
    header3Link.href = 'post.html';
    let postDescription = document.createElement('p');
    postDescription.classList.add('post__description');
    postDescription.textContent = description;
    header3Link.textContent = name;
    header3.appendChild(header3Link);
    post.appendChild(header3);
    post.appendChild(postDescription);
    blogItemWrapper.appendChild(post);
    blogItem.appendChild(blogItemWrapper);
    blog.insertBefore(blogItem, firstBlogChild);
  };
  
  
  let createPostHandler = function(evt) {
    evt.preventDefault();
    let post = {
      name: '',
      description: ''
    };
    
    let postName = document.querySelector('#postName');
    let postDescription = document.querySelector('#postDescription');
    
    post.name = checkField(postName);
    post.description = checkField(postDescription);
    
    //при вводе инфы в оба поля по нажатию на энтер не происходит события сабмит
    
    if (post.name && post.description) {
      createArticle(post.name, post.description);
    }
    
    
    
    
  };
  
  let form = document.querySelector('.form');
  form.addEventListener('submit', createPostHandler);
  
  let postName = document.querySelector('#postName');
  let postDescription = document.querySelector('#postDescription');
  
  let checkMsgHandler = function(evt) {
    let fieldClass = '.not-filled__msg_' + this.id;
    if(this.classList.contains('not-filled')) {
      this.classList.remove('not-filled');
      let msg = document.querySelector(fieldClass);
      msg.parentNode.removeChild(msg);
      
    }
  };
  
  postName.addEventListener('focus', checkMsgHandler);
  postDescription.addEventListener('focus', checkMsgHandler);
  
})();
