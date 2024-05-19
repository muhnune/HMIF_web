let lastScrollTop = 0;
const header = document.getElementById("header");
let scrollTimeout = null;

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    //scrolling down
    header.style.top = "-120px";
  } else {
    //scrolling up
    header.style.top = "0";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

  // clear the timeout
  if (scrollTimeout !== null) {
    clearTimeout(scrollTimeout);
  }

  // auto hide when user stop scolling
  scrollTimeout = setTimeout(() => {
    header.style.top = "-120px";
  }, 1000); //set user stops time
});
