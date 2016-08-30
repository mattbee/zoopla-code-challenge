"use strict";


var zoopla = {

  animateSpeed: 10,

  init: function() {
    // Check it's running, removed for live viewing
    //console.log("Init running");
    this.pageSetup();
    this.accordion();
    this.removeItem();
  },

  pageSetup: function() {

    // Add a class to the body if JavaScript is available
    document.getElementsByTagName("body")[0].classList.add("js");
  },

  accordion: function() {

    // Grab the required elements
    var accordionBodyElements = document.querySelectorAll(".accordion__body"),
        accordionHeaderElements = document.querySelectorAll(".accordion__header"),
        animateSpeed = this.animateSpeed;

    for (var i = 0; i < accordionBodyElements.length; ++i ) {
      accordionBodyElements[i].setAttribute('data-height', accordionBodyElements[i].offsetHeight + 40 );
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

  },

  removeItem: function() {
    var accordionBodyElements = document.querySelectorAll(".accordion__body");

    for (var i = 0; i < accordionBodyElements.length; ++i ) {
      var removeLink = document.createElement('a');
      var removeLinkText = document.createTextNode('Remove item');
      removeLink.className = 'remove-link';
      removeLink.appendChild(removeLinkText);
      accordionBodyElements[i].appendChild(removeLink);
    }


    var removeItemsLink = document.querySelectorAll(".remove-link");
    for (var i = 0; i < removeItemsLink.length; ++i ) {

      // Add event handler to each removeLink
      removeItemsLink[i].addEventListener('click', function(event) {
        event.preventDefault();

        // Rmeove the article node.
        // Todo: serach up for a relevant element of classname to allow for changing dom structure.
        this.parentNode.parentNode.remove();
      });
    }

  }

}



zoopla.init();