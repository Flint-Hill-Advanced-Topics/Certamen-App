const audio = new Audio("https://www.youtube.com/watch?v=FRpq7o1mKXY");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
