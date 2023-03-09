//cria uma variavel e por um valor

var nome = window.prompt("entre com seu nome: ");

var endereco = window.prompt("qual seu endereço");

var cpf = window.prompt("qual seu cpf");

var dependentes = window.prompt("quantos dependentes");

//chamar o localStorage ele vem do window. no caso vamos usar o setItem.

//   window.localStorage.setItem("nome", nome );

//podemos escrever de uma forma mais curta

localStorage.setItem("nome", nome );

            alert(localStorage.getItem("nome"));

localStorage.setItem("endereco", endereco );

            alert(localStorage.getItem("endereco"));

localStorage.setItem("cpf", cpf );

            alert(localStorage.getItem("cpf"));

localStorage.setItem("numero de dependentes", dependentes );

            alert(localStorage.getItem("numero de dependentes"));


// para recuperar o valor de uma kay do localStorage usamos o getItem

//  alert(localStorage.getItem("nome"));

//se  ao inves de apresentar no alert podemos usar document

// document.write("ola "+ nome);






if(localStorage.visitas){
    localStorage.visitas = Number(localStorage.visitas) + 1 
}else{
    localStorage.setItem("visitas", 1);
}

document.write("ola "+ localStorage.visitas);
