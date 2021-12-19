function openNav() {
  if (x.matches) {
    document.getElementById("mySidenav").style.width = "100%";
  } else {
    document.getElementById("mySidenav").style.width = "350px";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var x = window.matchMedia("(max-width: 800px)")