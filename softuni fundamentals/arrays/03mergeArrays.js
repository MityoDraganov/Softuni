function mergeArrays(arrOne, arrTwo){
    let arrOneL = arrOne.length;
    let newArr = [];
    for(let i = 0; i < arrOneL; i++){
        if(i%2 === 0){
        newArr[i] = Number(arrOne[i]) + Number(arrTwo[i]);
        } else{
            newArr[i] = arrOne[i] + arrTwo[i]
        }
    }
    console.log(newArr.join(" - "))
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)