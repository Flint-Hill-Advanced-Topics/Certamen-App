const audio = new Audio("https://www.youtube.com/watch?v=FRpq7o1mKXY");
const buttons = document.querySelectorAll("button");
counter = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
    counter = counter+1;
  });
});
print(counter);
