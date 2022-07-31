function cutAndReverse(string){
    let stringL = string.length
    let firstHalf = string.slice(0, stringL / 2)
    let secondHalf = string.slice(stringL / 2,)
    let firstReversed = firstHalf.split('').reverse().join('')
    let secondReversed = secondHalf.split('').reverse().join('')
    console.log(firstReversed)
    console.log(secondReversed)
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')