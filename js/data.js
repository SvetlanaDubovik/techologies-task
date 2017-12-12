"use strict";

(function() {
  
  window.data = {
    createArticleWithoutTemplate: function(name, description, id, odd) {
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
      header3Link.href = 'post.html?title=' + name + '&descr=' + description;
      let postDescription = document.createElement('p');
      postDescription.classList.add('post__description');
      postDescription.textContent = description;
      header3Link.textContent = name;
      header3.appendChild(header3Link);
      post.appendChild(header3);
      post.appendChild(postDescription);
      blogItemWrapper.appendChild(post);
      blogItem.appendChild(blogItemWrapper);
      blogItem.id = id;
      if (!odd) {
        blogItem.classList.add('blog__item_odd');
      } else {
        blogItem.classList.remove('blog__item_odd');
      }
      blog.insertBefore(blogItem, firstBlogChild);
    },
    
    createArticle: function(name, description, id, odd){
      if ('content' in document.createElement('template')) {
        let temp = document.querySelector('#blogItem');
        let headerLink = temp.content.querySelector('a');
        headerLink.textContent = name;
        headerLink.href = "post.html?title=" + name + "&descr=" + description;
        
        let postDiscription = temp.content.querySelector('.post__description');
        postDiscription.textContent = description;
        
        let blogItem = temp.content.querySelector('.blog__item');
        blogItem.id = id;
        if (!odd) {
          blogItem.classList.add('blog__item_odd');
        } else {
          blogItem.classList.remove('blog__item_odd');
        }
        
        let blog = document.querySelector('.blog');
        let firstBlogChild = blog.firstChild;
        blog.insertBefore(temp.content.cloneNode(true), firstBlogChild);
      } else {
        window.data.createArticleWithoutTemplate(name, description, id);
      }
    }
  };
  
})();
