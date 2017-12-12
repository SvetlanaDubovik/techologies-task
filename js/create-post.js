"use strict";

(function() {
  
//  window.createPost = {
//    openPostHandler: function(evt) {
//      
//    }
//  };
  
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
  
  let createPostHandler = function(evt) {
    evt.preventDefault();
    let post = {
      name: '',
      description: '',
      id: null,
      odd: null,
      date: null
    };
    
    let postName = document.querySelector('#postName');
    let postDescription = document.querySelector('#postDescription');
    
    let blog = document.querySelector('.blog');
    let isOddElem = false;
    if ((blog.children.length - 1) % 2 === 1) {
      isOddElem = false;
    } else {
      isOddElem = true;
    }
    
    post.name = checkField(postName);
    post.description = checkField(postDescription);
    post.id = window.util.generateGUID();
    post.odd = isOddElem;
    let startDate = new Date()
    let now = new Date();
    post.date = now.getTime();
    
    
    let serialPost = JSON.stringify(post);
    
    localStorage.setItem(post.id, serialPost);
    
    //при вводе инфы в оба поля по нажатию на энтер не происходит события сабмит
    
    
    
    if (post.name && post.description) {
        window.data.createArticle(post.name, post.description, post.id, isOddElem);
        let form = document.querySelector('.form');
        form.reset();
      }
    
//    window.showMore.activateShowMore(blog.children);
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

function compareDate(obj1, obj2) {
  return obj1.date - obj2.date;
}

let loadPostsHandler = function() {
  let postsObjArr = [];
  
  if (localStorage.length) {
  
  for (var i = 0; i < localStorage.length; i++) {
    let postsObj = {
      name: null,
      descr: [null],
      id: null,
      odd: null,
      date: null
    };
    
    let lsKey = localStorage.key(i);
    let value = JSON.parse(localStorage[lsKey]);
    console.log(value);
    postsObj.name = value.name;
    postsObj.descr = value.description;
    postsObj.id = lsKey;    
    postsObj.odd = value.odd;    
    postsObj.date = value.date;
    postsObjArr.push(postsObj);
  }
    postsObjArr.sort(compareDate);
  
  for (let j = 0; j < postsObjArr.length; j++) {
    window.data.createArticle(postsObjArr[j].name, postsObjArr[j].descr, postsObjArr[j].id, postsObjArr[j].odd);
  }
    
    let blog = document.querySelector('.blog');
//    let postsCount = blog.
    
  window.showMore.activateShowMore(blog.children);
    
    
  }
  

};
