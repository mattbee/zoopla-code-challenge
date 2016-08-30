"use strict";


var zoopla = {

  animateSpeed: 10,

  init: function() {
    console.log("Init running");
    this.pageSetup();
    this.accordion();
  },

  pageSetup: function() {

    // Add a class to the body if JavaScript is available
    document.getElementsByTagName("body")[0].classList.add("js");
  },

  accordion: function() {

    var accordionBodyElements = document.querySelectorAll(".accordion__body"),
        accordionHeaderElements = document.querySelectorAll(".accordion__header"),
        animateSpeed = this.animateSpeed;

    for (var i = 0; i < accordionBodyElements.length; ++i ) {
      accordionBodyElements[i].setAttribute('data-height', accordionBodyElements[i].offsetHeight );
      accordionBodyElements[i].style.height = 0;
      accordionBodyElements[i].classList.remove('active');
    }

    for (var i = 0; i < accordionHeaderElements.length; ++i ) {
      accordionHeaderElements[i].addEventListener('click', function(event) {
        event.preventDefault();

        for (var i = 0; i < accordionBodyElements.length; ++i ) {
          accordionBodyElements[i].style.height = 0;
          accordionBodyElements[i].classList.remove('active');
        }

        var accordionBody = this.parentNode.getElementsByClassName('accordion__body')[0],
            height = accordionBody.dataset.height,
            newHeight = 0;
        
        var animate = setInterval(function() {
          newHeight = newHeight + animateSpeed;

          accordionBody.style.height = newHeight + "px";
          
          if( newHeight > height) {
            clearInterval(animate);
          }
        }, 50);

      });
    }

  }

}



zoopla.init();