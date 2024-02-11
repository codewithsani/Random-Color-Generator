const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  let randomNum1 = Math.floor(Math.random() * 256);
  let randomNum2 = Math.floor(Math.random() * 256);
  let randomNum3 = Math.floor(Math.random() * 256);

  let thergb = "rgb(" + randomNum1 + "," + randomNum2 + "," + randomNum3 + ")";
  document.body.style.backgroundColor = thergb;
  result.innerText = thergb;
});
