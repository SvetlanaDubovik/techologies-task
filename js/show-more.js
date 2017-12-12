"use strict";

(function() {
  
  const SHOWN_POST_COUNT = 3;
  
    let clickBtnMoreHandler = function(btn, elementsCount) {
      
    let blog = document.querySelector('.blog');
//    let blogChildrenLength = blog.children.length - 1;
      
    for (let i = 0; i < elementsCount; i++) {
      blog.children[i].style = 'block';
    }
      btn.style.display = 'none';
      
    
//    let isShownBlogChildren = [];
//    
//    for(let i = 0; i < blogChildrenLength; i++) {
//      let blogChildrenStyle = getComputedStyle(blog.children[i]);
//      if(blogChildrenStyle.display = 'block') {
//        isShownBlogChildren.push('1');
//      } else {
//        isShownBlogChildren.push('0');
//      }
//    } 
    
    
    
    for(let i = 0; i < SHOWN_POST_COUNT; i++) {
      
    }
  };
  
  window.showMore = {
    activateShowMore: function(elements) {
  
     if (elements.length > 4) {
       let btnMore = document.querySelector('.btn_more');
       btnMore.style.display = 'block';
       
       btnMore.addEventListener('click', function() {
         clickBtnMoreHandler(this, elements.length);
       });
       
        for (let i = 4; i < elements.length; i++) {
          elements[i].style.display = 'none';
        }
      }
      
      
      
    }
    

    
  };
  

  
//  let btnMore = document.querySelector('.btn_more');
//  btnMore.addEventListener('click', clickBtnMoreHandler);
//  
  
})();
