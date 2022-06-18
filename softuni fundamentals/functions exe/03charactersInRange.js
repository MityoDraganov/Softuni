function charactersInRange(charOne, charTwo){
    let IndexOfCharOne = charOne.codePointAt(0)
    let IndexOfCharTwo = charTwo.codePointAt(0)
    let arr = [];
    let biggerInAscii = 0;
    let smallerInAscii = 0
    if(IndexOfCharOne > IndexOfCharTwo){
        biggerInAscii = IndexOfCharOne;
        smallerInAscii = IndexOfCharTwo;
    }else{
        biggerInAscii = IndexOfCharTwo;
        smallerInAscii = IndexOfCharOne;
    }
    for(let i = smallerInAscii+ 1; i < biggerInAscii; i++){
        arr.push(String.fromCharCode(i))
    }
    console.log(arr.join(" "));
}
charactersInRange('a',
'd'
)