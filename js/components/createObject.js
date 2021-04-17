function createObject(measure, desvAb, desvAb2){
    let medidas = []
    for(let g = 0; g < measure.length; g++){
        medidas[g] = { ordem: g + 1,
        medida: measure[g],
        desvAb: desvAb[g],
        desvAb2: desvAb2[g]
        }
    }
    return medidas
}