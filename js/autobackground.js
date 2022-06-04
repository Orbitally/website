const images = [
  "url(../imgs/headers/auto/1.webp)",
  "url(../imgs/headers/auto/2.webp)",
  "url(../imgs/headers/auto/3.webp)",
  "url(../imgs/headers/auto/4.webp)",
  "url(../imgs/headers/auto/5.webp)",
  "url(../imgs/headers/auto/6.webp)",
  "url(../imgs/headers/auto/7.webp)",
  "url(../imgs/headers/auto/8.webp)",
  "url(../imgs/headers/auto/9.webp)",
  "url(../imgs/headers/auto/10.webp)",
  "url(../imgs/headers/auto/11.webp)",
];

function changeBG() {
  const header = document.querySelector(".header");

  const bg = images[Math.floor(Math.random() * images.length)];

  header.style.backgroundImage = bg;
  header.style.transition = "2.3s";
}

setInterval(changeBG, 5000);

function initBg() {
  const header = document.querySelector(".header");
  header.style.backgroundImage = "url(../imgs/headers/auto/1.webp";
}

document.onload = initBg();

function preloadimages(arr) {
  var newimages = [];
  var arr = typeof arr != "object" ? [arr] : arr; //force arr parameter to always be an array
  for (var i = 0; i < arr.length; i++) {
    newimages[i] = new Image();
    newimages[i].src = arr[i];
    console.log("preloadimages: " + arr[i]);
  }
}

preloadimages(images);
