let body = document.getElementsByTagName("body")[0];
let projectTitles = document.getElementsByClassName("projectTitle");
let projectDescs = document.getElementsByClassName("projectDesc");
let projectTitle = projectTitles[0];
let projectDesc = projectDescs[0];
let projectTitle2 = projectTitles[1];
console.log(projectTitle2);
let projectDesc2 = projectDescs[1];
let projectTitle3 = projectTitles[2];
let projectDesc3 = projectDescs[2];

let image = document.getElementById("weatherMate");
let image2 = document.getElementById("versehunt");
let image3 = document.getElementById("Peek");

window.addEventListener("scroll", () => {
  let yAxis = window.scrollY;
  console.log(yAxis);

  if (yAxis >= 300 && yAxis <= 450) {
    let imageOffset = yAxis;
    image.style.transform = `translateX(${-imageOffset}px)`;
    let titleOffset = yAxis;
    projectTitle.style.transform = `translateY(${-titleOffset * 0.7}px)`;
    projectDesc.style.transform = `translateY(${-titleOffset * 0.7}px)`;
  }

  if (yAxis >= 900 && yAxis <= 1050) {
    let imageOffset = yAxis - 600;
    image2.style.transform = `translateX(${imageOffset * 0.9}px)`;
    let titleOffset = yAxis - 600;
    projectTitle2.style.transform = `translateY(${-titleOffset * 0.7}px)`;
    projectDesc2.style.transform = `translateY(${-titleOffset * 0.7}px)`;
  }

  if (yAxis >= 1500 && yAxis <= 1600) {
    let imageOffset = yAxis - 1100;
    image3.style.transform = `translateX(${-imageOffset * 0.7}px)`;
    let titleOffset = yAxis - 1100;
    projectTitle3.style.transform = `translateY(${-titleOffset * 0.7}px)`;
    projectDesc3.style.transform = `translateY(${-titleOffset * 0.7}px)`;
  }
});
