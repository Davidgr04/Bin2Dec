function Bin2Dec() {
    var binario = document.getElementById('binario').value
    var resultado = parseInt(binario, 2);
    var parrafo = document.getElementById('decimal')
    parrafo.innerHTML = resultado
    if (parrafo.innerHTML == "NaN") {
        parrafo.innerHTML = "Sigo esperando..."
    }
    var ultimodigito = substr(-1)
    if (ultimodigito == 0) {
        //binario
    } else {
        parrafo.innerHTML = "Esto no es un numero binario BOBO"
    }



}