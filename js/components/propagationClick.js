function propagationClick(){
    var section = document.getElementById('section')
    let html = ""
    section.innerHTML = html
    html += '<div class="main-calculator">'
    html += '<div class="wrapper"><div id="display" class="display">'
    html += '<button class="clear" onClick="pressKey(`clear`)">Clear</button>'
    html += '<p id="calculation" class="text"></p></div>'
    html += '<div class="keyboard">'
    html += '<div class="numbers"><button class="button" onClick="pressKey(7)">7</button>'
    html += '<button class="button" onClick="pressKey(8)">8</button>'
    html += '<button class="button" onClick="pressKey(9)">9</button><br>'
    html += '<button class="button" onClick="pressKey(4)">4</button>'
    html += '<button class="button" onClick="pressKey(5)">5</button>'
    html += '<button class="button" onClick="pressKey(6)">6</button><br>'
    html += '<button class="button" onClick="pressKey(1)">1</button>'
    html += '<button class="button" onClick="pressKey(2)">2</button>'
    html += '<button class="button" onClick="pressKey(3)">3</button><br>'
    html += '<button class="button -bdl" onClick="pressKey(0)">0</button>'
    html += '<button class="button" onClick="pressKey(`.`)">.</button>'
    html += '<button class="button" onClick="pressKey(`equal`)">=</button></div>'
    html += '<div class="operations"><button id="erase" class="button -minor" onClick="pressKey(`erase`)">⌫</button>'
    html += '<button class="button -minor" onClick="pressKey(`±`)">±</button>'
    html += '<button class="button -minor" onClick="pressKey(`÷`)">÷</button>'
    html += '<button class="button -minor" onClick="pressKey(`×`)">×</button>'
    html += '<button class="button -minor" onClick="pressKey(`－`)">－</button>'
    html += '<button class="button -minor -bdr" onClick="pressKey(`＋`)">＋</button></div></div></div></div>'
    section.innerHTML = html
    document.getElementById('propagation').disabled = true
    document.getElementById('theory').disabled = false
} 