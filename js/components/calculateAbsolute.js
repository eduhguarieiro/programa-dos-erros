function calculateAbsolute(measure, average, algSig){
    let absolute = []
    let absolute2 = []
    for(let d = 0; d < measure.length; d++){
        absolute[d] = measure[d] - average
        absolute[d] = parseFloat(absolute[d].toPrecision(algSig))
    }
    for(let e = 0; e < absolute.length; e++){
        absolute2[e] = parseFloat(Math.pow(absolute[e], 2).toPrecision(Math.pow(algSig, 2)))
    }
    let absolutes = [absolute, absolute2]
    return absolutes
}