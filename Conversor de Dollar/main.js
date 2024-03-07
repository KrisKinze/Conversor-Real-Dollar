

function converterParaDolar (){
    
    var valorEmReal = document.getElementById("valorEmReal").value
    var campoDeSaida = document.getElementById("campoDeSaida")

    valorEmReal = parseFloat(valorEmReal);
    
    valorEmDolar = valorEmReal * 4.93
    
    var resposta = document.createElement('p')
    resposta.textContent = `O valor de ${valorEmReal.toFixed(2)} reais equivalem a ${valorEmDolar.toFixed(2)} dolares`

    campoDeSaida.appendChild(resposta);
}

