
const slides = [
  {
    title: "First Slide",
    image: "./img/ischia-1.jpg",
    desc: "This is the first slide",
  },
  {
    title: "Second Slide",
    image: "./img/ischia-2.jpg",
    desc: "This is the second slide",
  },
  {
    title: "Third Slide",
    image: "./img/ischia-3.jpg",
    desc: "This is the third slide",
  },
  {
    title: "Fourth Slide",
    image: "./img/ischia-4.jpg",
    desc: "This is the fourth slide",
  },
  {
    title: "Fifth Slide",
    image: "./img/ischia-5.jpg",
    desc: "This is the fifth slide",
  },
];

const sliderEl = document.getElementById("slider");

const previewEl = document.querySelector(".preview");

const currentSlideEl = document.querySelector(".slide");

const imageEl = currentSlideEl.querySelector("img");

const titleEl = currentSlideEl.querySelector(".description > h3");

const descEl = currentSlideEl.querySelector(".description > p");

const prevEl = previewEl.querySelector(".prev");

const nextEl = previewEl.querySelector(".next");

const thumbsEl = document.querySelector(".thumbnails");

console.log(previewEl, prevEl, nextEl, thumbsEl, currentSlideEl);

let activeSlide = 0;

printCurrentSlide(imageEl, titleEl, descEl, slides[activeSlide]);

nextEl.addEventListener("click", next);

prevEl.addEventListener("click", prev);

// Bonus 1: Thumbnails

for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  console.log(slide);

  

  const img = document.createElement("img");
  img.src = slide.image;
  img.width = 120;
  console.log(img);

  img.addEventListener("click", function () {
    console.log("clicked on element:", i);
    printCurrentSlide(imageEl, titleEl, descEl, slide);
  });

  thumbsEl.appendChild(img);
}

// Bonus 2: Autoplay
let intervalId = setInterval(function () {
  next();
 

  let timeProgress = 0;
}, 2000);

sliderEl.addEventListener("mouseenter", function () {
  clearInterval(intervalId);
});

sliderEl.addEventListener("mouseleave", function () {
  intervalId = setInterval(next, 2000);
});


function prev() {
  console.log("prev image");

  activeSlide--; 

  console.log(activeSlide);

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  printCurrentSlide(imageEl, titleEl, descEl, slides[activeSlide]);
}

function next() {
  console.log("next image");

  activeSlide++;

  console.log(activeSlide);

  if (activeSlide === slides.length) {
    activeSlide = 0;
  }
  printCurrentSlide(imageEl, titleEl, descEl, slides[activeSlide]);
}

function printCurrentSlide(imageEl, titleEl, descEl, slideObj) {
  const { image, title, desc } = slideObj;

  imageEl.src = image;
  titleEl.innerText = title;
  descEl.innerText = desc;
}