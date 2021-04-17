function calculateAverage(algSig){
    let input = document.getElementById('input['+ k +']')
    if(input.value != ""){
        measure[i] = input.value
        pressed++
    }
    let soma = 0
    for(let a = 0; a < measure.length; a++){
        soma += parseFloat(measure[a])
    }
    let average = soma/pressed
    average = parseFloat(average.toPrecision(algSig))
    return average
}