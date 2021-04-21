function executeProgram(){
    let retorno = findSignificative(measure)
    let algSig = retorno[0]
    let tamanho = retorno[1]
    let media = calculateAverage(algSig)
    let absolutes = calculateAbsolute(measure, media, algSig)
    let desvAb = absolutes[0]
    let desvAb2 = absolutes[1]
    let ret = calculatePattern(desvAb2)
    let desvPad = ret[0]
    let decPlaces = ret[1]
    let medidas = createObject(measure, desvAb, desvAb2)
    showResultsOfTheory(medidas, media, desvPad, decPlaces)
}