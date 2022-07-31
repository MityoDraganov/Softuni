function stringSubstring(word,sentence){
    let wordLower = word.toLowerCase()
    let sentenceLower = sentence.toLowerCase()
    
    let sentenceArray = sentenceLower.split(' ')
    
    if(sentenceArray.includes(wordLower)){
        console.log(wordLower)
        return;
    } else{
        console.log(`${wordLower} not found!`)
    }
    
}
stringSubstring('python',
'JavaScript is the best programming language'

)