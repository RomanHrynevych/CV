/*=========================================================================
        Preloader
=========================================================================*/

window.addEventListener("load", function (e) {
  document.querySelector(`.preloader-outer`).style.display = "none";

  document.querySelector(`.prog-html`).style.width = "85%";
  document.querySelector(`.prog-css`).style.width = "80%";
  document.querySelector(`.prog-js`).style.width = "65%";
  document.querySelector(`.prog-python`).style.width = "47%";
});
document
  .querySelector(`.hamburger-menu`)
  .addEventListener("click", function () {
    document.querySelector(`header`).classList.toggle("pushed");
    document.querySelector(`.bar`).classList.toggle("animate");
  });
