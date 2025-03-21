const menu = document.querySelector(".menu");
const burgerBoxes = document.querySelectorAll(".burger__box");
const toggleMenu = () => {
  menu.classList.toggle("open");
};

burgerBoxes.forEach((burgerBox) => {
  burgerBox.addEventListener("click", toggleMenu);
});

const menuItems = document.querySelectorAll(".menu-item");
const staticImage = document.getElementById("static-image");
let currentImage = "./assets/menu-img/menu-1.jpg";

menuItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    currentImage = item.getAttribute("data-image");
    staticImage.src = currentImage;
  });

  item.addEventListener("mouseleave", () => {
    staticImage.src = currentImage;
  });
});

const searchBtn = document.querySelector(".header__search-btn");
const headerBoxSearch = document.querySelector(".header__box-search");
const searchCloseBtn = document.getElementById("search-close");

searchBtn.addEventListener("click", () => {
  headerBoxSearch.classList.add("open");
});

searchCloseBtn.addEventListener("click", () => {
  headerBoxSearch.classList.remove("open");
});

let scrollY = 0;
let targetScrollY = 0;
let maxScroll = window.innerHeight;
const layout = document.querySelector(".layout");

function smoothScroll() {
  scrollY += (targetScrollY - scrollY) * 0.1;
  layout.style.transform = `translateY(${maxScroll - scrollY}px)`;
  requestAnimationFrame(smoothScroll);
}

window.addEventListener("wheel", (event) => {
  targetScrollY += event.deltaY;
  targetScrollY = Math.max(0, Math.min(targetScrollY, maxScroll));
});

smoothScroll();

const layoutDef = document.querySelector(".layout");
const container = document.querySelector(".container");
const sliderBox = document.querySelector(".slider-box");

layoutDef.addEventListener("click", () => {
  layoutDef.classList.add("active");

  setTimeout(() => {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";

    const container = document.querySelector(".container");
    container.style.position = "static";

    setTimeout(() => {
      layoutDef.style.display = "none";
      container.style.display = "none";
      sliderBox.style.display = "flex";
    }, 1000);
  }, 1500);
});
