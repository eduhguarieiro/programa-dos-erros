var k = 1
var html = ""

function showTheoryOnScreen(medida){
    var body = document.getElementById('body')
    html += '<tr><td id="valorMedida['+ i +']">' + medida + '</td>'
    html += '<td><input id="input" type="number"></input></td>'
    html += '<td></td>'
    html += '<td></td></tr>'
    body.innerHTML = html
}