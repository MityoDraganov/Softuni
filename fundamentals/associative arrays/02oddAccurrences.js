function oddAccurrences(string){
    let words = string.toLowerCase().split(' ')
    let map = new Map()
    for(let word of words){
        if(!map.has(word)){
            map.set(word, 1)
        } else{
            let oldValue = map.get(word)
            map.set(word, oldValue + 1)
        }
    }
    let toPrint = ''
    for(let [key,value] of map){
        if((value + 1) % 2 === 0){
            if(!toPrint.includes(key)){
                toPrint += key + ' '
            }
        }
    }
    console.log(toPrint)
}
oddAccurrences('Cake IS SWEET is Soft CAKE sweet Food')