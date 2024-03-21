const button = document.querySelector("[data-btn]");
const input = document.querySelector("[data-input]");
const output = document.querySelector("[data-output]");

button.addEventListener("click", () => {
  let inverter = "";

  for (let i = 0; i < input.value.length; i++) {
    let caractere = input.value;
    console.log(caractere[caractere.length - i - 1]);
    inverter += caractere[caractere.length - i - 1];
  }

  output.innerText = `A string invertida de ${input.value} é ${inverter}`;
  input.value = "";
});
