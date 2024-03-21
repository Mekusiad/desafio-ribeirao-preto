const showSoma = document.querySelector("[data-soma]");

const indice = 13;
let k = 0;
let soma = 0;

while (k < indice) {
  k += 1;
  soma += k;
}

showSoma.innerText += `\n A soma, ao final do processamento, é de: ${soma}.`;
