function texto() {
    // Esto es para que los id conecten con el JavaScript
    var error1 = document.getElementById('error1')
    var error2 = document.getElementById('error2')
    var binario = document.getElementById('binario').value
    var resultado = document.getElementById('resultado')
        // Esto es para que se transforme el numero a binario
    resultado.innerHTML = parseInt(binario, 2);
    // Para que en vez de NaN ponga Sigo esperando... (nose pork no va xd)
    if (binario.length == 0) {
        if (resultado.innerHTML == "NaN") {
            resultado.innerHTML = "Sigo esperando..."
        }
    }
    // Esto es para que coja el ultimo valor
    var ultimodigito = binario.charAt(binario.length - 1)
    if (ultimodigito == 0 || ultimodigito == 1) {
        error2.innerHTML = 'Aqui esta tu conversion'
        error1.innerHTML = ''
    } else {
        resultado.innerHTML = 'Esperando a que pongas tu binario...'
    }
    if (binario == '') {
        procesando.innerHTML = ''
    }

    // Configuración de errores
    if (ultimodigito >> 1 || ultimodigito >> 9999) {
        error1.innerHTML = 'Has intruducio un numero no binario, introduce una serie de 1 y 0'
        error2.innerHTML = ''
    }
    if (ultimodigito == '') {
        error1.innerHTML = ''
        error2.innerHTML = ''
    }
}