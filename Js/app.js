// events
// nav discover-btn
const $candiscover = document.getElementById("discover-btn");
$candiscover.addEventListener("click", $discover);

function $discover(params) {
  document.getElementById("trending").style.display = "inline";

  document.getElementById("trending-btn").style.borderBottom = "solid #0E0E0E";
}

//dropdown discover-btn
const $candiscover11 = document.getElementById("discover-btn1");
$candiscover11.addEventListener("click", $discover11);

function $discover11(params) {
  document.getElementById("trending").style.display = "inline";

  document.getElementById("trending-btn").style.borderBottom = "solid #0E0E0E";
}
//slider controller

// treanding 
const $cantrending = document.getElementById("trending-btn");
$cantrending.addEventListener("click", trending);

function trending(params) {
  document.getElementById("trending").style.display = "inline";
  document.getElementById("localized").style.display = "none";
  document.getElementById("mover1").style.display = "none"; 
  document.getElementById("you").style.display = "none";

  document.getElementById("trending-btn").style.borderBottom = "solid #0E0E0E";
  document.getElementById("localized-btn").style.borderBottom = "none";
  document.getElementById("online-btn").style.borderBottom = "none";
  document.getElementById("you-btn").style.borderBottom = "none";
}

// localized-btn
const $canProcesslocalized = document.getElementById("localized-btn");
$canProcesslocalized.addEventListener("click", localized);

function localized(params) {
  document.getElementById("trending").style.display = "none";
  document.getElementById("localized").style.display = "inline";
  document.getElementById("mover1").style.display = "none";
  document.getElementById("you").style.display = "none";

  document.getElementById("trending-btn").style.borderBottom = "none";
  document.getElementById("localized-btn").style.borderBottom = "solid #0E0E0E";
  document.getElementById("online-btn").style.borderBottom = "none";
  document.getElementById("you-btn").style.borderBottom = "none";
}

//Online-btn
const $canProcessmover1 = document.getElementById("online-btn");
$canProcessmover1.addEventListener("click", cmover1);

function cmover1(params) {
  document.getElementById("trending").style.display = "none";
  document.getElementById("localized").style.display = "none";
  document.getElementById("mover1").style.display = "inline"; 
  document.getElementById("you").style.display = "none";

  document.getElementById("trending-btn").style.borderBottom = "none";
  document.getElementById("localized-btn").style.borderBottom = "none";
  document.getElementById("online-btn").style.borderBottom = "solid #0E0E0E";
  document.getElementById("you-btn").style.borderBottom = "none";
}

//you-btn
const $canProcessyou = document.getElementById("you-btn");
$canProcessyou.addEventListener("click", cancel1);

function cancel1(params) {
  document.getElementById("trending").style.display = "none";
  document.getElementById("localized").style.display = "none";
  document.getElementById("you").style.display = "inline";
  document.getElementById("mover1").style.display = "none";

  document.getElementById("trending-btn").style.borderBottom = "none";
  document.getElementById("localized-btn").style.borderBottom = "none";
  document.getElementById("online-btn").style.borderBottom = "none";
  document.getElementById("you-btn").style.borderBottom = "solid #0E0E0E";
}