var i = 0
var measure = []
var pressed = 0

function addMeasure(numMedida){
    let input = document.getElementById('input['+ k +']')
    if(input.value != ""){
        measure[i] = input.value
        numMedida = document.getElementById('valorMedida[' + k + ']').textContent
        i++
        j++
        k++
        numMedida++
        pressed++
        showTheoryOnScreen(numMedida, measure)
        document.getElementById('execute').disabled = false
    }
    else{
        alert("Por favor, insira uma medida!")
    }
}