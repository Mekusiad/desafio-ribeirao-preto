const numberInfo = document.querySelector("[data-input]");
const button = document.querySelector("[data-button]");
const show = document.querySelector("[data-show]");
const isFibonacci = document.querySelector("[data-showInfo]");

button.addEventListener("click", () => {
  show.innerText = "";
  let number = 0;
  let number1 = 1;
  let result = 0;
  while (result <= numberInfo.value) {
    if (numberInfo.value == result) {
      isFibonacci.innerText = `O número ${numberInfo.value} faz parte da sequência de Fibonacci`;
    } else {
      isFibonacci.innerText = `O número ${numberInfo.value} não faz parte da sequência de Fibonacci`;
    }
    show.innerText += ` ${number} `;
    result = number + number1;
    number = number1;
    number1 = result;
  }
  numberInfo.value = "";
});
