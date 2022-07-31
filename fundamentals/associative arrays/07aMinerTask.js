function aMinerTask(data){
    let resources = new Map()
    let arr = []
    let dataL = data.length
    for(let i = 0; i < dataL; i++){
        if(i % 2 === 0 && !arr.includes(data[i])){
            arr.push(data[i])
            arr.push(0)
        } else if(i % 2 !== 0){
            let quantity = Number(data[i])
            let matiral = data[i - 1]
            let indexOfMaterial = arr.indexOf(matiral)
            let currentQuantityOfMaterial = Number(arr[indexOfMaterial + 1])
            currentQuantityOfMaterial += quantity
            arr.splice(indexOfMaterial + 1, 1, currentQuantityOfMaterial)
        }
    }
    for(let i = 0; i < arr.length; i += 2){
        console.log(`${arr[i]} -> ${arr[i+1]}`)
    }
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )