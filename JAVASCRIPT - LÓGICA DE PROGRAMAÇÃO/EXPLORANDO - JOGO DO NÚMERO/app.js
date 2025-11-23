alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 7;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
    let condicao = false;
    chute = prompt('Escolha um número entre 1 e 10');
    for (let cont = 1; cont <= 10; cont = cont + 1) {
        if (cont == parseInt(chute)) {
            condicao = true;
        }
    }
    if (condicao == true) {
        // se chute for igual ao número secreto
        if (chute == numeroSecreto) {
            alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
            // se o chute for maior ou menor que o número secreto
        } else if (chute != numeroSecreto) {
            if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}`);
            } else {
                alert(`O número secreto é maior que ${chute}`);
            }
            // tentativas = tentativas +1;
            tentativas++
        }
    }
    else if (condicao == false) {
        alert('Digite um número de 1 e 10');
    }
}








