let nav = document.getElementById("nav-bar");
let header = document.getElementById("about-header");
let container = document.getElementById("about-cont");

let options = {
  root: null, // relative to document viewport
  rootMargin: "10px", // margin around root. Values are similar to css property. Unit-less values not allowed
  threshold: 1.0, // visible amount of item shown in relation to root
};

function makeSticky(entries, observer) {
  if (window.matchMedia("only screen and (max-width: 1000px)").matches) {
    return;
  }

  for (entry of entries) {
    if (entry.isIntersecting) {
      nav.classList.remove("fixed", "top-10");
      container.classList.remove("ml-1/6");
    } else {
      nav.classList.add("fixed", "top-10");
      container.classList.add("ml-1/6");
    }
  }
}

let observer = new IntersectionObserver(makeSticky, options);
observer.observe(header);
