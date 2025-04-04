let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarChute() {
    let chute = document.getElementById("chute").value;
    let mensagem = document.getElementById("mensagem");
    tentativas++;

    if (chute == numeroSecreto) {
        mensagem.textContent = `🎉 Parabéns! Você acertou em ${tentativas} tentativas!`;
        mensagem.style.color = "#28a745";
    } else if (chute < numeroSecreto) {
        mensagem.textContent = "Tente um número maior!";
        mensagem.style.color = "#dc3545";
    } else {
        mensagem.textContent = "Tente um número menor!";
        mensagem.style.color = "#dc3545";
    }
}

function reiniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    document.getElementById("mensagem").textContent = "";
    document.getElementById("chute").value = "";
}