const parentElement = document.querySelector(".rating-con");
const submitBtn = document.querySelector(".button");
const ratingEl = document.querySelector(".rating-class");
const spinner = document.querySelector(".spinner-class");
const thankyouDiv = document.querySelector(".selected-rate");
const ratingClick = document.querySelector(".rating-click");

// Number CLick function
parentElement.addEventListener("click", (e) => {
  const btn = e.target.closest(".rating-number");
  const active = document.querySelector(".selected-num");
  if (!btn) return;
  active ? active.classList.remove("selected-num") : "";
  ratingClick.innerHTML = btn.innerHTML;
  btn.classList.add("selected-num");
});

// submit click
submitBtn.addEventListener("click", () => {
  ratingEl.remove();
  spinner.style.display = "grid";

  setTimeout(() => {
    spinner.style.display = "none";
    thankyouDiv.style.display = "grid";
  }, 1000);
});
