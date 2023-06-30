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
  if (yAxis >= 900 && yAxis <= 1050) {
    // let imageOffset = yAxis;
    // image.style.transform = `translateX(${-imageOffset * 0.7}px)`;
    let titleOffset = yAxis - 600;
    projectTitle2.style.transform = `translateY(${-titleOffset * 0.7}px)`;
    projectDesc2.style.transform = `translateY(${-titleOffset * 0.7}px)`;
    // console.log(titleOffset * 0.5);
  }
  // if (yAxis >= 175 && yAxis <= 417) {
  //   let imageOffset = yAxis;
  //   image.style.transform = `translateX(${-imageOffset * 0.7}px)`;
  //   let titleOffset = yAxis;
  //   projectTitle.style.transform = `translateY(${-titleOffset * 0.7}px)`;
  //   projectDesc.style.transform = `translateY(${-titleOffset * 0.7}px)`;
  //   console.log(titleOffset * 0.5);
  // }
});
