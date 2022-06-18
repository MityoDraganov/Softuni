function factorialDivision(numOne, numTwo){
    let sumOne = 1;
    let sumTwo = 1;
    for(let i = numOne; i > 1; i--){
        sumOne *= i;
    }
    for(let j = numTwo; j > 1; j--){
        sumTwo *= j;
    }
    let result = sumOne / sumTwo
    console.log(result.toFixed(2))
}
factorialDivision(6,
    2
    )