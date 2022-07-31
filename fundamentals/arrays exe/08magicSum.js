function magicSum(arr, num){
    let arrL = arr.length;
    let uniqueNum = []
    let validPair = ""
    for(let i = 0; i < arrL; i++){
        for(let j = i + 1; j < arrL; j++){
            if(arr[i] + arr[j] === num){
                validPair = `${arr[i]} ${arr[j]}`
                uniqueNum.push(validPair)
                
            }
        }
    }
    console.log(uniqueNum.join('\n'))
}
magicSum([14, 20, 60, 13, 7, 19, 8],27)