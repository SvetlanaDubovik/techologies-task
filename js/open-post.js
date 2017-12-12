"use strict";

(function() {
  
  let createPostWithoutTemplate = function(name, description) {
    let blog = document.querySelector('.blog');
    let firstBlogChild = blog.firstChild;
    let blogItem = document.createElement('div');
    blogItem.classList.add('blog__item');
    let blogItemWrapper = document.createElement('div');
    blogItemWrapper.classList.add('blog__item_wrapper');
    let btnBack = document.createElement('a');
    btnBack.href = "javascript:history.back()";
    btnBack.classList.add('btn-back');
    btnBack.textContent = "Назад";
    blogItemWrapper.appendChild(btnBack);
    let post = document.createElement('article');
    post.classList.add('post');
    let header3 = document.createElement('h3');
    let postDescription = document.createElement('p');
    postDescription.classList.add('post__description');
    postDescription.textContent = description;
    header3.textContent = name;
    post.appendChild(header3);
    post.appendChild(postDescription);
    blogItemWrapper.appendChild(post);
    let blogLine = document.createElement('div');
    blogLine.classList.add('blog__line');
    blogItemWrapper.appendChild(blogLine);
    blogItem.appendChild(blogItemWrapper);
    blog.appendChild(blogItem);
  };
  
 window.openPost = {
   createPost: function(name, description){
    if ('content' in document.createElement('template')) {
      let temp = document.querySelector('#postsDetail');
      let header = temp.content.querySelector('h3');
      header.textContent = name;
        
      let postDiscription = temp.content.querySelector('.post__description');
      postDiscription.textContent = description;
        
//      let blogItem = temp.content.querySelector('.blog__item');
        
      let blog = document.querySelector('.blog');
      blog.appendChild(temp.content.cloneNode(true));
        
    } else {
      window.data.createPostWithoutTemplate(name, description);
    }
   },
   parseParams: function(data) {
    let arr1 = [];
    let stringData = data.replace(/^\?/,"").split('&');
    var arr2 = [];
    var stringDataLength = stringData.length;
    var j=0;
    for (var i = 0; i < stringDataLength; i++) {
       arr2 = stringData[i].split('=',2);
       arr2[0] = decodeURIComponent(arr2[0]);
       if (arr2[0].length > 0) arr1[j++] = [arr2[0],decodeURIComponent(arr2.slice(1).join('='))];
    }
    return arr1;
  }
   
 }; 
  
//
//  window.addEventListener('DOMContentLoaded', openPostHandler);
//  window.openPost = {
//    openPostHandler: function(event) {
////      window.open(this.href,'_blank'); return false;
////      let evt = event || window.event;
////      let blogItem = evt.target;
//      console.log('Ура, я здесь');
//    }
//  };
//  

  
  
})();

   let openPostHandler = function() {
   let data = window.openPost.parseParams(location.search);
//   let decodeData = decodeURIComponent(data);
//   let title = data[0].substr(6);
//   let description = data[1].substr(7);

   window.openPost.createPost(data[0][1], data[1][1]);
   
   
//   
//   window.openPost.createPost(data.name, data.description);
   
 };
  




