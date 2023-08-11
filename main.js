const container = document.querySelector(".container");
const ball = document.querySelector(".ball");

container.addEventListener("click", () => {
  ball.classList.toggle("right");

  setTimeout(() => {
    container.classList.toggle("bright");
    container.classList.add("dark");
  }, 500);
});
