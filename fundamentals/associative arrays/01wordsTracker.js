function wordsTracker(data){
    let words = data.shift().split(' ')
    let map = new Map()
    //console.log(words)
    for(let word of words){
        if(data.includes(word)){
            map.set(word, 0)
        }
    }
    for(let word of data){
        if(map.has(word)){
            let oldValue = map.get(word)
            oldValue++;
           map.set(word, oldValue)
        }
    }
    let sortResult = Array.from(map.entries()).sort((a,b) =>{
        let valueA = a[1]
        let valueB = b[1]
        return valueB - valueA
    })
    for(let [key,value] of sortResult){
        console.log(`${key} - ${value}`)
    }
}
wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    
    )