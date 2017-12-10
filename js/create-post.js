"use strict";

(function() {
  
  let generateMsg = function(field) {
    let paragraph = document.createElement('p');
    paragraph.textContent = "*Вы не заполнили это поле";
    paragraph.style.color = "red";
    paragraph.style.marginTop = "-10px";
    field.classList.add('not-filled');
    field.parentNode.appendChild(paragraph);
  };
  
  let checkField = function(field, objVal) {
    let fieldVal = field.textContent;
    if(fieldVal.length) {
      objVal = fieldVal;
    } else {
      generateMsg(field);
    }
  };
  
  let createPostHandler = function(evt) {
    evt.preventDefault();
    let post = {
      name: '',
      description: ''
    };
    
    let postName = document.querySelector('#postName');
    let postDescription = document.querySelector('#postDescription');
    
    checkField(postName, post.name);
    
    
    
  };
  
  let createBtn = document.querySelector('#createPost');
  createBtn.addEventListener('click', createPostHandler);
  
  let postName = document.querySelector('#postName');
  let postDescription = document.querySelector('#postDescription');
  
//  postName.addEventListener('focus', checkMsgHandler);
//  postDescription.addEventListener('focus', checkMsgHandler);
  
})();
