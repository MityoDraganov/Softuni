function equalSums(arr){
    let arrL = arr.length;
    let isFound = "no"
    for(let i = 0; i < arrL; i++){
        let leftSum = 0;
        let rightSum = 0;
        for(let l = 0; l < i; l++){
            leftSum += arr[l]
        }
        for(let r = i + 1; r < arrL; r++){
            rightSum += arr[r]
        }
        if(leftSum === rightSum){
            isFound = i
        }
    }
    console.log(isFound)
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])