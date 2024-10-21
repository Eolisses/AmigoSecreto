// Array com os nomes disponíveis para sorteio
let nomes = ["Carlinha", "César", "Damaris", "Eliezer", "Gi", "Jaque", "Joelzinho", "Jonas", "Marcinha", "Miriã"];
let nomeUsuario = '';
                       
function limparDiv() {
    const div = document.getElementById('conteudo');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}                       
                                         
// Seleciona o elemento com o ID 'conteudo'
const conteudoDiv = document.getElementById('conteudo');
const htmlParaSelect  = "<h1>Selecione o seu nome:</h1></p>" +
                        "<select id='nomeUsuario'>"+
                          "<option value='' disabled selected>Toque aqui para selecionar o seu nome</option>" +
                          "<option value='Carlinha'>Carlinha</option>" +
                          "<option value='César'>César</option>" +
                          "<option value='Damaris'>Damaris</option>" +
                          "<option value='Eliezer'>Eliezer</option>" +
                          "<option value='Gi'>Gi</option>" +
                          "<option value='Jaque'>Jaque</option>" +
                          "<option value='Joelzinho'>Joelzinho</option>" +
                          "<option value='Jonas'>Jonas</option>" +
                          "<option value='Marcinha'>Marcinha</option>" +
                          "<option value='Miriã'>Miriã</option>" +
                        "</select>"; 
// Insere o conteúdo HTML no elemento selecionado
conteudoDiv.innerHTML = htmlParaSelect;                         
                         
document.getElementById("nomeUsuario").addEventListener("change", function() {
    nomeUsuario = this.value;
        
    // Exibe a mensagem personalizada ao usuário
    document.getElementById("mensagem").innerHTML ="<H1>"+ nomeUsuario + "</H1>";
        
    // Habilita o botão de sortear
    document.getElementById("btnSortear").disabled = false;
    limparDiv();
});

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (!nomeUsuario) {
        alert("Por favor, selecione seu nome!");   
        return;
    }

    // Filtra os nomes, removendo o nome do usuário
    let nomesPossiveis = nomes.filter(nome => nome !== nomeUsuario);

    if (nomesPossiveis.length === 0) {
        document.getElementById("amigoSecreto").textContent = "Não há nomes suficientes para sortear.";
        return;
    }

    // Sorteia um nome aleatório da lista de possíveis amigos secretos
    const indiceSorteado = Math.floor(Math.random() * nomesPossiveis.length);
    const amigoSecreto = nomesPossiveis[indiceSorteado];

    // Exibe o nome do amigo secreto              
    document.getElementById("amigoSecreto").innerHTML = "<p><p><p><p><p><p><p><p><p><p><H1><b>"+ 
                                                      "***  " + amigoSecreto + "  ***" + "</b></H1>";
    
    // Desativa o botão de sortear
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("nomeUsuario").disabled = true;

    // Mostra o botão de sair
    document.getElementById("btnSair").style.display = 'block';
}

// Função para sair do sistema
function sairSistema() {
    // Pode ser customizada para, por exemplo, redirecionar para outra página ou fechar a aplicação.
    alert("Obrigado por participar do Amigo Secreto!");
    location.reload(); // Recarrega a página para reiniciar o processo
}