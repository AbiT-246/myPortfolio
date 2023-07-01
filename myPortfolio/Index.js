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
let itself = document.getElementById("itself");
let itself2 = document.getElementById("itself2");
let images11 = document.getElementById("images11");
let images22 = document.getElementById("images22");
let images111 = document.getElementById("images111");
let images222 = document.getElementById("images222");
let images1111 = document.getElementById("images1111");
let images2222 = document.getElementById("images2222");
let itself11 = document.getElementById("itself11");
let itself22 = document.getElementById("itself22");
let itself111 = document.getElementById("itself111");
let itself222 = document.getElementById("itself222");
let itself1111 = document.getElementById("itself1111");
let itself2222 = document.getElementById("itself2222");

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
    if (window.matchMedia("(min-width: 1500px)").matches) {
      text.style.marginTop = yAxis * 1.5 + "px";
      body.style.backgroundColor = "aliceblue";
    } else {
      text.style.marginTop = yAxis * 1.5 + "px";
      body.style.backgroundColor = "aliceblue";
    }
  } else {
    if (window.matchMedia("(min-width: 1500px)").matches) {
      text.style.marginTop = "750px";
      navbar.classList.remove("fixed");
    } else {
      text.style.marginTop = "675px";
      navbar.classList.remove("fixed");
    }
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
    itself.style.transform = `translateY(${-titleOffset * 0.5}px)`;
    itself2.style.transform = `translateY(${-titleOffset * 0.5}px)`;
    console.log(titleOffset * 0.5);
  }
  if (yAxis >= 1700 && yAxis <= 2400) {
    let images11Offset = yAxis - 1700;
    images11.style.transform = `translateX(${images11Offset * 0.5}px)`;
    let images22Offset = yAxis - 1700;
    images22.style.transform = `translateX(${-images22Offset * 0.5}px)`;
    let titleOffset = yAxis - 2000;
    itself11.style.transform = `translateY(${-titleOffset * 0.5}px)`;
    itself22.style.transform = `translateY(${-titleOffset * 0.5}px)`;
    console.log(titleOffset * 0.5);
  }
  if (yAxis >= 3000 && yAxis <= 3700) {
    let images111Offset = yAxis - 3000;
    images111.style.transform = `translateX(${images111Offset * 0.5}px)`;
    let images222Offset = yAxis - 3000;
    images222.style.transform = `translateX(${-images222Offset * 0.5}px)`;
    let titleOffset = yAxis - 3300;
    itself111.style.transform = `translateY(${-titleOffset * 0.7}px)`;
    itself222.style.transform = `translateY(${-titleOffset * 0.7}px)`;
    console.log(titleOffset * 0.5);
  }
  if (yAxis >= 3900 && yAxis <= 4600) {
    let titleOffset = yAxis - 4200;
    itself1111.style.transform = `translateY(${-titleOffset * 0.7}px)`;
    itself2222.style.transform = `translateY(${-titleOffset * 0.7}px)`;
    console.log(titleOffset * 0.5);
  }
});
