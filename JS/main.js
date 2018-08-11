// main.js

var header = document.querySelector(".header");
//var origOffsetY = header.offsetTop;

function onScroll(e) {
  window.scrollY >= origOffsetY
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
}

document.addEventListener("scroll", onScroll);

// javascript to change the selected menu item if another is selected
//function updateSelected() {
$(document).ready(function() {
  $("#menu ul li a").click(function(ev) {
    $("#menu ul li").removeClass("selected");
    $(ev.currentTarget)
      .parent("li")
      .addClass("selected");
  });
});
//};

// Function that slides the menu in and out...
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}
