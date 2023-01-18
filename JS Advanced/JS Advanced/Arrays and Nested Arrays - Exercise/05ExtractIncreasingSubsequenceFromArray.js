function extract(arr){
    let currentBiggestNum = 0;
    let arrOfBiggerNums = []
    for(let el of arr){
        if(el >= currentBiggestNum){
            currentBiggestNum = el
            arrOfBiggerNums.push(el)
        }
    }
    return arrOfBiggerNums
}
extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )