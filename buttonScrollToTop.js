document.addEventListener("DOMContentLoaded", function () {
  setupScrollToTopButton();
});

function setupScrollToTopButton() {
  let buttonToTop = document.createElement("button");
  buttonToTop.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16"><path d="M8 0a.5.5 0 0 1 .5.5V14a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 8 0zM4.354 4.854a.5.5 0 0 1 .793-.793L8 7.207l2.854-2.853a.5.5 0 0 1 .793.793L8.707 8l2.147 2.146a.5.5 0 0 1-.793.793L8 8.707 5.146 11.56a.5.5 0 1 1-.793-.793L7.293 8 4.354 5.146a.5.5 0 0 1 0-.793z"/></svg>>';
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
