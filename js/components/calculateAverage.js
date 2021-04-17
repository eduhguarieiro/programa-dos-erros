function calculateAverage(){
    let input = document.getElementById('input['+ k +']')
    if(input.value != ""){
        measure[i] = input.value
        pressed++
    }
    let soma = 0
    for(let a = 0; a < measure.length; a++){
        soma += parseInt(measure[a])
    }
    let average = soma/pressed
    return average
}