function propagationClick(){
    var section = document.getElementById('section')
    let html = ""
    section.innerHTML = html
    html += '<div class="main-calculator">'
    html += '<div class="wrapper"><input class="display" type="textbox" readonly>'
    html += '<div class="keyboard">'
    html += '<div class="numbers"><button class="button">7</button>'
    html += '<button class="button">8</button>'
    html += '<button class="button">9</button><br>'
    html += '<button class="button">4</button>'
    html += '<button class="button">5</button>'
    html += '<button class="button">6</button><br>'
    html += '<button class="button">1</button>'
    html += '<button class="button">2</button>'
    html += '<button class="button">3</button><br>'
    html += '<button class="button -bdl">0</button>'
    html += '<button class="button">.</button>'
    html += '<button class="button">=</button></div>'
    html += '<div class="operations"><button class="button -minor">⌫</button>'
    html += '<button class="button -minor">±</button>'
    html += '<button class="button -minor">÷</button>'
    html += '<button class="button -minor">×</button>'
    html += '<button class="button -minor">－</button>'
    html += '<button class="button -minor -bdr">＋</button></div></div></div></div>'
    section.innerHTML = html
    document.getElementById('propagation').disabled = true
    document.getElementById('theory').disabled = false
} 