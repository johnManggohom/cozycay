let hamburger = document.getElementById("hamList");
let hamX = document.getElementById("hamX");

let navS = document.getElementById("nav-menu");
let btn = document.getElementById("btn-login");
let headerNav = document.getElementById("header-nav");
let header = document.getElementById("header");

let webBody = document.body;

function OpenHam() {
  hamburger.style.visibility = "hidden";
  hamX.style.visibility = "visible";
  webBody.style.overflowY = "hidden";

  headerNav.style.left = "0px";
  // headerNav.style.display = 'none'

  btn.style.display = "flex";
  btn.style.visibility = "visible";
  console.log("bitch");
}

function CloseHam() {
  headerNav.style.left = "-1000px";
  navS.style.display = "flex";

  header.style.gap = "10px";

  hamburger.style.visibility = "visible";
  hamX.style.visibility = "hidden";

  webBody.style.overflowY = "visible";
  console.log("gaga");
}

function CheckScreen() {
  const screenWidth = window.screen.width;

  if (screenWidth > 900) {
    header.style.display = "flex";
  } else if (screenWidth < 800) {
    hamburger.style.visibility = "visible";
    hamX.style.visibility = "hidden";
  }
}

CheckScreen();

window.addEventListener("resize", CheckScreen);
