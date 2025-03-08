//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; 

let sorteados = [];  


function adicionarAmigo(){
    const inputAmigo = document.getElementById("amigo"); 
    let nome = inputAmigo.value.trim();

// Validar a função para que o usuário não insira um nome vazio ou um número. 
// E se houver nome repetido pedir o nome com sobrenome.

    if(amigos.includes(nome)){
        alert("Este nome já foi adicionado! Por favor, insira outro nome ou o nome e o sobrenome!"); 
        return; 
    }
    if(nome === "" || !isNaN(nome)){
        alert("Por favor, insira um nome válido! ") 
        return;     
    }

    amigos.push(nome); 
    inputAmigo.value = "";   
    console.log(amigos); 
    inputAmigo.focus();  
    atualizarLista();

}   

//função para atualizar a lista de amigos

function atualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos'); 
    listaAmigos.innerHTML = ""; 

    amigos.forEach((amigo, index) => { 
        const item = document.createElement('li');
        item.textContent = amigo + " ";

        // Criar botão de remover
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = "❌"; 
        botaoRemover.style.marginLeft = "10px"; 
        botaoRemover.classList.add("button-remove");
        botaoRemover.onclick = () => removerAmigo(index);

        // Adicionar o botão ao item da lista
        item.appendChild(botaoRemover);
        listaAmigos.appendChild(item);
    }); 
} 

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1); // Remove o amigo pelo índice
    atualizarLista(); // Atualiza a lista exibida
}


//função para sortear um amigo 
function sortearAmigo(){
    if(amigos.length === 0){
        alert("Adicione um amigo antes de sortear!"); 
        return; 
    } if(amigos.length < 3){
        alert("Adicione pelo menos 3 amigos para sortear!"); 
        return; 
    }
    const amigoSorteado = amigos[Math.floor(Math.random()* amigos.length)]; 
    const resultado = document.getElementById('resultado'); 
    resultado.innerHTML =  `<li class="sorteado">🎉 O amigo secreto sorteado é: ${amigoSorteado}! 🎁</li>`;

    
//função para limpar lista
    let limparLista = document.getElementById('listaAmigos');
    limparLista.innerHTML = "";
    amigos = [];
}   












