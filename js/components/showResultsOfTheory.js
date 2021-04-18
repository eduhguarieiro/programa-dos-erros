function showResultsOfTheory(medidas, media, desvPad){
    let html = ""
    let section = document.getElementById('section')
    section.innerHTML = html
    html += '<div class="container">'
    html += '<table id="table" class="main-table -result"><thead><tr><th>N</th>'
    html += '<th>Medida</th>'
    html += '<th>Desvio Absoluto</th>'
    html += '<th>Desvio Absoluto²</th>'
    html += '<tbody>'
    for(let h = 0; h < medidas.length; h++){
        html += '<tr><td>' + medidas[h].ordem + '</td>'
        html += '<td>' + medidas[h].medida + '</td>'
        html += '<td>' + medidas[h].desvAb + '</td>'
        html += '<td>' + medidas[h].desvAb2 + '</td></tr>'
    }
    html += '</tbody></table></div>'
    html += '<h2 class="main-subtitle">A medida é (' + media + '±' + desvPad + ')unidades<h2>'
    section.innerHTML = html
    document.getElementById('theory').disabled = false
}