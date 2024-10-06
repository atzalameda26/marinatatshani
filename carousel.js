let slideIndexGoo = 1;
let slideIndexFFAFFrames = 1;
let slideIndexTimberline = 1;
let slideIndexDune = 1;
let slideIndexFFAFAd = 1;
let slideIndexLLG = 1;

showSlidesGoo(slideIndexGoo);
showSlidesFFAFFrames(slideIndexFFAFFrames);
showSlidesTimberline(slideIndexTimberline);
showSlidesDune(slideIndexDune);
showSlidesFFAFAd(slideIndexFFAFAd);
showSlidesLLG(slideIndexLLG);

// GOO
function plusSlidesGoo(n) {
    showSlidesGoo((slideIndexGoo += n));
}

function showSlidesGoo(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-goo");
  if (n > slides.length) {
    slideIndexGoo = 1;
  }
  if (n < 1) {
    slideIndexGoo = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexGoo - 1].style.display = "block";
}

// FFAF FRAMES
function plusSlidesFFAFFrames(n) {
    showSlidesFFAFFrames((slideIndexFFAFFrames += n));
}

function showSlidesFFAFFrames(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-ffafFrames");
  if (n > slides.length) {
    slideIndexFFAFFrames = 1;
  }
  if (n < 1) {
    slideIndexFFAFFrames = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexFFAFFrames - 1].style.display = "block";
}

// TIMBERLINE GROVE
function plusSlidesTimberline(n) {
    showSlidesTimberline((slideIndexTimberline += n));
}

function showSlidesTimberline(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-timberline");
  if (n > slides.length) {
    slideIndexTimberline = 1;
  }
  if (n < 1) {
    slideIndexTimberline = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexTimberline - 1].style.display = "block";
}

// DUNE
function plusSlidesDune(n) {
    showSlidesDune((slideIndexDune += n));
}

function showSlidesDune(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-dune");
  if (n > slides.length) {
    slideIndexDune = 1;
  }
  if (n < 1) {
    slideIndexDune = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexDune - 1].style.display = "block";
}

// FFAF ADS
function plusSlidesFFAFAd(n) {
    showSlidesFFAFAd((slideIndexFFAFAd += n));
}

function showSlidesFFAFAd(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-ffafAd");
  if (n > slides.length) {
    slideIndexFFAFAd = 1;
  }
  if (n < 1) {
    slideIndexFFAFAd = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexFFAFAd - 1].style.display = "block";
}

// LLG
function plusSlidesLLG(n) {
    showSlidesLLG((slideIndexLLG += n));
}

function showSlidesLLG(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-llgAds");
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
