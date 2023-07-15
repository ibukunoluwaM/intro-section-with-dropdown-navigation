const arrowUp = document.querySelector(".arrowUp");
const arrowDown = document.querySelectorAll(".arrowDown");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const container = document.querySelector(".container");
// const container = document.querySelector(".container");

arrowDown.forEach((arrow) => {
  arrow.addEventListener("click", function (e) {
    const parent = e.target.nextElementSibling;
    arrow.style.transform = "rotate(180deg)";
    parent.style.display = "block";

    if (arrow.style.transform === "rotate(180deg)") {
      arrow.addEventListener("click", function () {
        arrow.style.transform = "rotate(0deg)";
        parent.style.display = "none";
      });
    }
  });
});
menu.addEventListener("click", menuFunction);
function menuFunction() {
  if (container.style.display === "block") {
    container.style.display = "none";
  } else {
    container.style.display = "block";
  }
}

close.addEventListener("click", function () {
  container.style.display = "none";
});
