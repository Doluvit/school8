document.addEventListener("DOMContentLoaded", function () {
  setupScrollToTopButton();
});

function setupScrollToTopButton() {
  let buttonToTop = document.createElement("button");
  buttonToTop.innerHTML = "Нагору";
  buttonToTop.id = "scrollToTopBtn";
  buttonToTop.title = "GoToTop";
  buttonToTop.style.display = "none";
  buttonToTop.addEventListener("click", scrollToTop);

  document.body.appendChild(buttonToTop);

  window.onscroll = function () {
    scrollToTopFunction();
  };
}

function scrollToTopFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

