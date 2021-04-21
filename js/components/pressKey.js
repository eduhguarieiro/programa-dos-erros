var html2 = ""
var timer = 0

function pressKey(key){
    let display = document.getElementById('calculation')
    if(key == 'erase'){
        let calculation = display.textContent
        html2 = calculation.substring(0, calculation.length - 1)
    }
    else if(key == 'clear'){
        html2 = ""
    }
    else{
        html2 += key
    }
    display.innerHTML = html2
}