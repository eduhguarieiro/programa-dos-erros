var html2 = ""

function pressKey(key){
    let display = document.getElementById('calculation')
    html2 += key
    display.innerHTML = html2
}