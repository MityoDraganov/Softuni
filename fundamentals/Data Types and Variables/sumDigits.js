function sumDigits(number){
    let text = number.toString()
    let sum = 0;
    let textLenght = text.length
    for(let index = 0; index < textLenght; index++){
        sum += Number(text[index])
    }
    console.log(sum)
}
sumDigits(245678)