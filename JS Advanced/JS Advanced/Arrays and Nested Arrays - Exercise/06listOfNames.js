function listOfNames(arr){
    arr.sort()
    for(i = 1; i <= arr.length; i++){
    console.log(`${i}.${arr[i-1]}`)
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"])