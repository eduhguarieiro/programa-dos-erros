var i = 0
var measure = []

function addMeasure(medida){
    measure[i] = document.getElementById('input').value
    medida = document.getElementById('valorMedida[' + i + ']').textContent
    i++
    medida++
    showTheoryOnScreen(medida)
}