"use strict";

(function() {    
  let generateRandomSymbol = function() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  
  window.util = {
    generateGUID: function() {  
      return generateRandomSymbol() + generateRandomSymbol() +   '-' + generateRandomSymbol() + '-' +   generateRandomSymbol() + '-' +
      generateRandomSymbol() + '-' + generateRandomSymbol() + generateRandomSymbol() + generateRandomSymbol();
    },
    
    compareDate: function(obj1, obj2) {
      return obj1.date - obj2.date;
    }
  };
  
})();
