var k = 1
var j = 0
var html = ""

function showTheoryOnScreen(medida, measure){
    var body = document.getElementById('body')
    html += '<tr><td id="valorMedida['+ k +']">' + medida + '</td>'
    html += '<td id="tdInput['+ j +']"><input id="input['+ k +']" type="number"></td>'
    body.innerHTML = html
    if(j>0){
        for (var t = 0; t < measure.length; t++){
        let input = document.getElementById('tdInput['+ t +']')
        input.innerHTML = measure[t]
        }
    }
}