function calculatePattern(desvAb2){
    let soma = 0
    for(let f = 0; f < desvAb2.length; f++){
        soma = soma + desvAb2[f]
    }
    let pattern = Math.sqrt(soma/(pressed - 1))
    let aPattern = parseFloat(pattern/Math.sqrt(pressed)).toPrecision(1)
    let decPlaces = 10000000
    if(aPattern.indexOf(".") > -1){
        decPlaces = aPattern.length - 1
    }
    else{
        decPlaces = aPattern.length
    }

    let retorno = [aPattern, decPlaces]

    console.log(retorno)

    return retorno
}