function teoryClick(){
    var section = document.getElementById('section')
    var html = ""
    var j = 1
    section.innerHTML = html
    html += '<table class="main-table"><thead><tr><th>N</th>'
    html += '<th>Medida</th>'
    html += '<th>Desvio Absoluto</th>'
    html += '<th>Desvio Absoluto²</th></tr></thead>'
    html += '<tbody id="body"></tbody></table>'
    html += '<button onClick="addMeasure('+ j +')" class="main-button">Adicionar medida</button>'
    section.innerHTML = html
    showTheoryOnScreen(j)
}