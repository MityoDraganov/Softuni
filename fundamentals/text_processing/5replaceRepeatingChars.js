function replaceRepeatingChars(string){
    let charArray = string.split('')
    let toPrint = ''
    let lastChar = ''
    for(let char of charArray){
        if(char !== lastChar){
            toPrint += char
        }
        lastChar = char
    }
    console.log(toPrint);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')