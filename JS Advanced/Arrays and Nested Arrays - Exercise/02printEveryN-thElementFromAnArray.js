function printSelectedElements(array, step){
    let arrayToPrint = []
    for(let i = 0; i < array.length; i += step){
        arrayToPrint.push(array[i])
    }
    return arrayToPrint
}
printSelectedElements(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)