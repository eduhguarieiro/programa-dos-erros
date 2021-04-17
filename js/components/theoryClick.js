function theoryClick(){
    var section = document.getElementById('section')
    var html = ""
    section.innerHTML = html
    html += '<h1 class="main-title -block">Insira as medidas a serem computadas</h1>'
    html += '<div class="container">'
    html += '<table id="table" class="main-table"><thead><tr><th>N</th>'
    html += '<th>Medida</th>'
    html += '<tbody id="body"></tbody></table>'
    html += '<button id="addMeasure" type="button" onClick="addMeasure('+ k +')" class="main-button">Adicionar medida</button>'
    html += '<button id="execute" onClick="executeProgram()" class="main-button" disabled>Executar programa</button></div>'
    section.innerHTML = html
    html = ""
    showTheoryOnScreen(k)
    document.getElementById('theory').disabled = true
} 