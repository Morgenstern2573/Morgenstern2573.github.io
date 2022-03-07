let aboutNav = document.getElementById("nav-bar");
let aboutHeader = document.getElementById("about-header");
let aboutContainer = document.getElementById("about-cont");

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
      aboutNav.classList.remove("fixed", "top-10");
      aboutContainer.classList.remove("ml-[16.66666666667%]");
    } else {
      aboutNav.classList.add("fixed", "top-10");
      aboutContainer.classList.add("ml-[16.66666666667%]");
    }
  }
}

let stickyObserver = new IntersectionObserver(makeSticky, options);
stickyObserver.observe(aboutHeader);
