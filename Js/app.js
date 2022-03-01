// treanding 

const $cantrending = document.getElementById("trending-btn");
$cantrending.addEventListener("click", trending);

function trending(params) {
  document.getElementById("trending").style.display = "inline";
  document.getElementById("localized").style.display = "none";
  document.getElementById("mover1").style.display = "none"; 
  document.getElementById("you").style.display = "none";
}

// localized-btn
const $canProcesslocalized = document.getElementById("localized-btn");
$canProcesslocalized.addEventListener("click", localized);

function localized(params) {
  document.getElementById("trending").style.display = "none";
  document.getElementById("localized").style.display = "inline";
  document.getElementById("mover1").style.display = "none";
   document.getElementById("you").style.display = "none";
}

//Online-btn
const $canProcessmover1 = document.getElementById("online-btn");
$canProcessmover1.addEventListener("click", cmover1);

function cmover1(params) {
  document.getElementById("trending").style.display = "none";
  document.getElementById("localized").style.display = "none";
  document.getElementById("mover1").style.display = "inline"; 
  document.getElementById("you").style.display = "none";
}

//you-btn
const $canProcessyou = document.getElementById("you-btn");
$canProcessyou.addEventListener("click", cancel1);

function cancel1(params) {
  document.getElementById("trending").style.display = "none";
  document.getElementById("localized").style.display = "none";
  document.getElementById("you").style.display = "inline";
  document.getElementById("mover1").style.display = "none";
}