// const btnEl = document.querySelector(".button_slider");
// console.log(btnEl, "button_slider");

// btnEl.addEventListener("mouseover", (event) => {
//   const rect = btnEl.getBoundingClientRect();
//   const x = event.pageX - rect.left;
//   const y = event.pageY - rect.top;

//   btnEl.style.setProperty("--xPos", x + "px");
//   btnEl.style.setProperty("--yPos", y + "px");
// });


const contentText = document.querySelector(".content-text");
const btnElB = document.querySelector(".button_slider");
console.log(btnElB, "btnElB button_sliderModal");
const btnLabel = document.querySelector(".button_slider button");
console.log(btnLabel, "btnLabel button_slider");

btnElB.addEventListener("click", e=>{
    contentText.classList.toggle("displayNone");
    btnElB.classList.toggle("modal");
  btnLabel.classList.toggle("hide");
});

  