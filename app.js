document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');
  const card = document.querySelector('.card');

  function handleMouseEnter() {
    animate(card, { top: '-90px' }, 300);
  }

  function handleMouseLeave() {
     animate(card, { top: '0px' }, 300);
  }

  container.addEventListener('mouseenter', handleMouseEnter);
  container.addEventListener('mouseleave', handleMouseLeave);
  
   // touch events
  container.addEventListener('touchstart', function(event) {
       event.preventDefault();
       handleMouseEnter();
  });

  container.addEventListener('touchend', function(event) {
      event.preventDefault();
      handleMouseLeave();
   });
    
    container.addEventListener('touchcancel', function(event) {
      event.preventDefault();
      handleMouseLeave();
    });

});

function animate(element, targetStyles, duration){
    element.style.transition = `all ${duration/1000}s ease-in-out`;
    Object.assign(element.style, targetStyles); // Apply target styles
    element.addEventListener('transitionend', function(){
       element.style.transition = '';
     });
}