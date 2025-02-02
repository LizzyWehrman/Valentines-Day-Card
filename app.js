document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');
  const card = document.querySelector('.card');

  container.addEventListener('mouseenter', function() {
    animate(card, { top: '-90px' }, 300); 
  });

  container.addEventListener('mouseleave', function() {
    animate(card, { top: '0px' }, 300); 
  });
});

function animate(element, targetStyles, duration){
    element.style.transition = `all ${duration/1000}s ease-in-out`;
    Object.assign(element.style, targetStyles); 
    element.addEventListener('transitionend', function(){
       element.style.transition = '';
     });
}