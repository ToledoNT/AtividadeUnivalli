// Mensagem helloWorld
const helloWorld = "Hello World";
alert(helloWorld);

// Soma de dois inteiros
const num1 = 5 + 10;
const num2 = 10 + 10;
alert(`Numeros inteiros --> ${num1} ${num2}`);


// Alteração por ID
const meuElemento = document.getElementById("meuElemento");
if (meuElemento) {
  meuElemento.innerText = "Texto Alterado por ID";
}

// Alteração por Name
const meuInput = document.getElementsByName("meuInput")[0];
if (meuInput) {
  meuInput.value = "Valor Alterado por Name";
}

// Alteração por Class
const elementos = document.getElementsByClassName("meuInput");
if (elementos.length > 0) {
  elementos[0].style.backgroundColor = "#FF5733";
}
