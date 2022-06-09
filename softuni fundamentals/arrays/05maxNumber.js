function maxNumber(arr){
    let newArray = [];
    let arrL = arr.length;
    for(let i = 0; i < arrL; i++){
        let number1 = arr[i];
        let isBiggest = true
        for(let index = i + 1; index < arrL; index++){
            let number2 = Number(arr[index])
            if(number1 <= number2){
                isBiggest = false;
            }
        }
        if(isBiggest){
            newArray.push(number1)
        }
    }
    console.log(newArray.join(' '))
}
maxNumber([1, 4, 3, 2])