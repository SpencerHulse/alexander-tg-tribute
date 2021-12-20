//navigation menu button
//open menu when the button is clicked
function openNav() {
  //decide how big to make it based on screen size
  if (x.matches) {
    document.getElementById("mySidenav").style.width = "100%";
  } else {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("mySidenav").style.borderRight = "3px solid var(--primary-color)";
  }
}

//closing the navigation menu
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.borderRight = "none"
}

var x = window.matchMedia("(max-width: 800px)")

//closing the navigation meny when clicking outside of it or selecting an option
window.addEventListener("mouseup", function(event) {
  var navigation = document.getElementById("mySidenav");
  if (event.target != navigation) {
    navigation.style.width = "0";
    navigation.style.borderRight = "none";
  }
});

//return to top button
mybutton = document.getElementById("myBtn");

// display button when scroll a bit down the page
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// scroll up
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}