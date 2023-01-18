function magicMatrics(matrix){
    for(let row = 0; row < matrix.length - 1; row++){
        let sumRowOne = matrix[row].reduce((a,b) => a + b)
        let sumRowTwo = matrix[row + 1].reduce((a,b) => a + b)
        let sumColOne = 0;
        let sumColTwo = 0;
        for(let column = 0; column < matrix.length; column++){
            sumColOne +=matrix[row][column]
            sumColOne +=matrix[row + 1][column]
        }
        if(sumRowOne !== sumRowTwo || sumColOne !== sumColTwo){
            return false
        }
    }
    return true
}
magicMatrics([[4, 5, 6],
              [6, 5, 4],
              [5, 5, 5]]
   )