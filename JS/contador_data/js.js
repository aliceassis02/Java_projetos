let caixaMinuto = document.getElementById("caixa-minuto");
let caixaSegundo = document.getElementById("caixa-segundo");

// Formato Data(ano, mês, dia, hora, minuto)
//O ano é contado de 0 até 11
let dataFim = new Date(2022, 8, 5, 16, 30);
//Saida em milisegundos
let tempoFim = dataFim.getTime();

function contador() {
    let dataHoje = new Date();
    // Saida valor em milisegundos
    let tempoHoje = dataHoje.getTime();

    let tempoRestante = tempoFim - tempoHoje;

    // 60 segundos = 1000 milisegundos
    let umMinuto = 60 * 1000;
    // 1 hora = 60 
    let umaHora = 60 * umMinuto;
    // 1 dia = 24 horas
    let umDia = 24 * umaHora;

    // Função para formatar números se eles tiverem um único dígito

    let adicionarZeros = (num) => (num < 10 ? `0${num}` : num);

    // Se a data de termino for menor que a data de dataHoje, então acabou.
    if (tempoFim < tempoHoje) {
        clearInterval(i);
        document.querySelector(".contador").innerHTML = `<h1>A contagem acabou!</h1>>`;
    }

    //Se não 
    else {
        //Calculodo tempo remanecente
        let diasRestantes = Math.floor(tempoRestante / umDia);
        let horasRestantes = Math.floor((tempoRestante % umDia) / umaHora);
        let minutoRestantes = Math.floor((tempoRestante % umaHora) / umMinuto);
        let segundosRestantes = Math.floor((tempoRestante % umMinuto) / 1000);

        // Valores na tela
        caixaDia.textContent = adicionarZeros(diasRestantes);
        caixaHora.textContent = adicionarZeros(horasRestantes);
        caixaMinuto.textContent = adicionarZeros(minutoRestantes);
        caixaSegundo.textContent = adicionarZeros(segundosRestantes);
    }
}

let i = setInterval(contador, 1000);
contador();