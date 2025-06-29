var navButton = document.getElementById('mobile-nav-icon');
navButton.addEventListener('click', function(){
  var navMenu = document.getElementById('nav-menu');
  navMenu.style.left == '-250px'? navMenu.style.left = '10px': navMenu.style.left = '-250px'
})
