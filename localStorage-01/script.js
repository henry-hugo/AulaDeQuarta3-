//cria uma variavel e por um valor

var nome = window.prompt("entre com seu nome: ");

//chamar o localStorage ele vem do window. no caso vamos usar o setItem.

window.localStorage.setItem("nome", nome );

//podemos escrever de uma forma mais curta

localStorage.setItem("nome", nome );

// para recuperar o valor de uma kay do localStorage usamos o getItem

alert(localStorage.getItem("nome"));

//se  ao inves de apresentar no alert podemos usar document

document.write("ola "+ nome);
