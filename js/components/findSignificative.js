function findSignificative(measure){
    var tamanho = []
    var algSig = 10000000
    for(let b = 0; b < measure.length; b++){
        var size = measure[b].length
        if (measure[b].indexOf(".") > -1){
            size = size - 1
            for(let c = 0; c < measure[b].length; c++)
            if(measure[b][c] == 0){
                size = size - 1
            }
            else{
                break
            }
        }
        if(measure[b][0] == "-"){
            size = size - 1
        }
        if(size < algSig && measure[b] != 0){
            algSig = size
        }
        tamanho[b] = size
    }
    let retorno = [algSig, tamanho]
    return retorno
}