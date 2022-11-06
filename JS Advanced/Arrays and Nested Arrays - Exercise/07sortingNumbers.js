function sortingNumbers(arr){
    let arrToPrintFrom = []
    let finalArr = []
    let rotations = 0;
for(let i = 0; i < arr.length; i++){
    if(i % 2 === 0){
        arrToPrintFrom = arr.slice()
        arrToPrintFrom.sort((a,b) =>{
            return Number(a) - Number(b)
        })
        finalArr.push(arrToPrintFrom[rotations])
    } else{
        arrToPrintFrom = arr.slice()
        arrToPrintFrom.sort((a,b) =>{
            return Number(b) - Number(a)
        })
        finalArr.push(arrToPrintFrom[rotations])
        rotations++;
    }
}
return finalArr
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])