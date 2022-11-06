function sortArray(array, string){
    if(string === 'asc'){
        array.sort((a,b) =>{
            return a - b
        })
    } else if(string === 'desc'){
        array.sort((a,b) =>{
            return b - a
        })
    }
    return array
}
sortArray([14, 7, 17, 6, 8], 'asc')