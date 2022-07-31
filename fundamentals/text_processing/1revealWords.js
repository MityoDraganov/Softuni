function revealWords(words, sentence){
    let wordsArray = words.split(', ')
    let sentenceArray = sentence.split(' ')
    for(let element of wordsArray){

        for(let word of sentenceArray){
            if(word.includes('*') && element.length === word.length){
               sentence = sentence.replace(word, element)
            }
        }
    }
    console.log(sentence)
}
revealWords('great',
'softuni is ***** place for learning new programming languages')
