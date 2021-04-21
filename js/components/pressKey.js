var html2 = ""

function pressKey(key){
    let display = document.getElementById('display')
    html2 += '<p class="text">' + key + '</p>'
    display.innerHTML = html2
}