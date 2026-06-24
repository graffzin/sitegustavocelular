
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// ADICIONAR ITEM
function add(nome, preco){

carrinho.push({nome, preco});

localStorage.setItem("carrinho", JSON.stringify(carrinho));

alert(nome + " adicionado ao carrinho!");
}

// LISTAR CARRINHO (para carrinho.html)
function listarCarrinho(){

let lista = document.getElementById("lista");
let total = document.getElementById("total");

if(!lista) return;

lista.innerHTML = "";

let soma = 0;

carrinho.forEach((item, index)=>{

soma += item.preco;

lista.innerHTML += `
<li>
${item.nome} - R$ ${item.preco.toFixed(2)}
<button onclick="remover(${index})">X</button>
</li>
`;

});

total.innerText = soma.toFixed(2);

}

// REMOVER ITEM
function remover(index){

carrinho.splice(index,1);

localStorage.setItem("carrinho", JSON.stringify(carrinho));

listarCarrinho();

}

// FINALIZAR PEDIDO
function finalizar(){

if(carrinho.length === 0){
alert("Carrinho vazio!");
return;
}

alert("Pedido enviado com sucesso!");

localStorage.removeItem("carrinho");

window.location.href = "index.html";
}

window.onload = listarCarrinho;