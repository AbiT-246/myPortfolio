let body = document.getElementsByTagName("body")[0];
let text = document.getElementById("Hello");
let bird = document.getElementById("bird");
let palm = document.getElementById("palm1");
let hill1 = document.getElementById("back");
let hill2 = document.getElementById("backback");
let navbar = document.getElementById("navbar");
let spotify = document.getElementById("spotify");

let images1 = document.getElementById("images1");
let images2 = document.getElementById("images2");
let specTitle = document.getElementById("itself");
let specTitle2 = document.getElementById("itself2");

window.addEventListener("scroll", () => {
  let yAxis = window.scrollY;
  console.log(yAxis);

  bird.style.left = yAxis * 1.5 + "px";
  let palmLeft = 63 - yAxis * -0.2;
  palm.style.left = palmLeft + "%";

  if (yAxis >= 173) {
    navbar.style.background = "rgb(255 249 249 / 66%)";
  } else {
    navbar.style.background = "none";
  }

  if (yAxis <= 450) {
    text.style.marginTop = yAxis * 1.5 + "px";
    body.style.backgroundColor = "aliceblue";
  } else {
    text.style.marginTop = "675px";
    navbar.classList.remove("fixed");
  }

  if (yAxis <= 730) {
    navbar.classList.add("fixed");
    spotify.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
    spotify.classList.remove("fixed");
  }

  if (yAxis >= 1100) {
    body.style.background =
      "linear-gradient(to bottom, #151515ff00 20%, black 80%)";
  } else {
    body.style.background = "aliceblue";
  }

  if (yAxis >= 700 && yAxis <= 1400) {
    let images1Offset = yAxis - 700;
    images1.style.transform = `translateX(${images1Offset * 0.5}px)`;
    let images2Offset = yAxis - 700;
    images2.style.transform = `translateX(${-images2Offset * 0.5}px)`;
    let titleOffset = yAxis - 1000;
    specTitle.style.transform = `translateY(${-titleOffset * 0.7}px)`;
    specTitle2.style.transform = `translateY(${-titleOffset * 0.7}px)`;
    console.log(titleOffset * 0.5);
  }
});
