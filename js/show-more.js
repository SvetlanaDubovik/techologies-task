"use strict";

(function() {  
  const SHOWN_POST_COUNT = 3;
  
  let clickBtnMoreHandler = function(btn, elementsCount) {   
    let blog = document.querySelector('.blog');
      
    for (let i = 0; i < elementsCount; i++) {
      blog.children[i].style.display = 'block';
    }
      
    btn.style.display = 'none';
  };
  
  window.showMore = {
    activateShowMore: function(elements) {  
      if (elements.length > SHOWN_POST_COUNT) {
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
  
})();
