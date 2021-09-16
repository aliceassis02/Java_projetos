function calcular() {
    var imc;
    var resultado = document.getElementById("resultado");

    var peso = parseInt(document.getElementById("peso").value);
    document.getElementById("valor-peso").textContent = peso + " kg";

    var altura = parseInt(document.getElementById("altura").value);
    document.getElementById("valor-altura").textContent = altura + " cm";

    imc = (peso / Math.pow((altura / 100), 2)).toFixed(1);
    resultado.textContent = imc;

    if (imc < 18.5) {
        categoria = "Abaixo do peso";
        resultado.style.color = "#ffc44d";
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = "Peso normal"
        resultado.style.color = "#0be881";
    } else if (imc >= 25 && imc <= 29.9) {
        categoria = "Sobre peso"
        resultado.style.color = "#ff884d";
    } else {
        categoria = "Obeso"
        resultado.style.color = "#ff5e57";
    }
    document.getElementById('categoria').textContent = categoria
}