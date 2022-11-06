function addAndRemove(arr){
    let arrToPrint = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'add'){
            arrToPrint.push(i + 1)
        } else{
            arrToPrint.pop()
        }
    }
    if(arrToPrint.length > 0){
    for(let el of arrToPrint){
        console.log(el)
    }
} else{
    console.log(`Empty`)
}
}
addAndRemove(['remove', 
'remove', 
'remove']


)