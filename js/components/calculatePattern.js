function calculatePattern(desvAb2){
    let soma = 0
    for(let f = 0; f < desvAb2.length; f++){
        soma = soma + desvAb2[f]
    }
    let pattern = Math.sqrt(soma/(pressed - 1))
    let aPattern = parseFloat((pattern/Math.sqrt(pressed)).toPrecision(1))
    console.log(pattern)
    console.log(aPattern)
    return aPattern
}