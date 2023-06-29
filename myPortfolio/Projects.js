let body = document.getElementsByTagName("body")[0];
let projectTitle = document.getElementById("projectTitle");
let projectDesc = document.getElementById("projectDesc");

let image = document.getElementById("projImage");

window.addEventListener("scroll", () => {
  let yAxis = window.scrollY;
  console.log(yAxis);

  if (yAxis >= 175 && yAxis <= 417) {
    let imageOffset = yAxis;
    image.style.transform = `translateX(${-imageOffset * 0.7}px)`;
    let titleOffset = yAxis;
    projectTitle.style.transform = `translateY(${-titleOffset * 0.7}px)`;
    projectDesc.style.transform = `translateY(${-titleOffset * 0.7}px)`;
    console.log(titleOffset * 0.5);
  }
});
