var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function () {
  this.classList.toggle("click");
  navlist.classList.toggle("open");
});
document.querySelector(".btn2").addEventListener("click", () => {
  document.querySelector(".box").style.display = "block";
});
document.querySelector(".closeButton").addEventListener("click", () => {
  document.querySelector(".box").style.display = "none";
});
document.querySelector(".aboutButton").addEventListener("click", () => {
  document.querySelector(".box").style.display = "block";
});
