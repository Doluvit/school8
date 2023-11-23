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

  window.addEventListener("scroll", scrollToTopFunction);
}

function scrollToTopFunction() {
  let buttonToTop = document.getElementById("scrollToTopBtn");
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    buttonToTop.style.display = "block";
  } else {
    buttonToTop.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
