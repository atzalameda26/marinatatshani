let slideIndexNextGen = 1;
let slideIndexSequel = 1;
let slideIndexLLG = 1;
let slideIndexSRL = 1;

showSlidesNextGen(slideIndexNextGen);
showSlidesSequel(slideIndexSequel);
showSlidesLLG(slideIndexLLG);
showSlidesSRL(slideIndexSRL);

// NEXT GEN
function plusSlidesNextGen(n) {
    showSlidesNextGen((slideIndexNextGen += n));
}

function showSlidesNextGen(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-nextgen");
  if (n > slides.length) {
    slideIndexNextGen = 1;
  }
  if (n < 1) {
    slideIndexNextGen = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexNextGen - 1].style.display = "block";
}

// SEQUEL
function plusSlidesSequel(n) {
    showSlidesSequel((slideIndexSequel += n));
}

function showSlidesSequel(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-sequel");
  if (n > slides.length) {
    slideIndexSequel = 1;
  }
  if (n < 1) {
    slideIndexSequel = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexSequel - 1].style.display = "block";
}

// LLG
function plusSlidesLLG(n) {
    showSlidesLLG((slideIndexLLG += n));
}

function showSlidesLLG(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-llg");
  if (n > slides.length) {
    slideIndexLLG = 1;
  }
  if (n < 1) {
    slideIndexLLG = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexLLG - 1].style.display = "block";
}

// SRL
function plusSlidesSRL(n) {
    showSlidesSRL((slideIndexSRL += n));
}

function showSlidesSRL(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-srl");
  if (n > slides.length) {
    slideIndexSRL = 1;
  }
  if (n < 1) {
    slideIndexSRL = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexSRL - 1].style.display = "block";
}