//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do Número Secreto"

//let paragrafo = document.querySelector("p")
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextonaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
    chute.focus();
}

function exibirMensagemInicial() {
    exibirTextonaTela("h1", "Jogo do Número Secreto");
    exibirTextonaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibirTextonaTela("h1", "Acertouuuuu Porraaaa!!!!!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextonaTela("p", `${mensagemTentativa}`); 
        document.getElementById("reiniciar").removeAttribute("disabled");       
    } else {
        if (numeroSecreto < chute) {
            exibirTextonaTela("p", `O número secreto é menor`);              
        } else {
            exibirTextonaTela("p", `O número secreto é maior`);               
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);  
}

