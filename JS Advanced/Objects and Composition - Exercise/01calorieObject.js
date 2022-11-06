function calorieObject(arr){

    let result = {

    }

    for(let i = 0; i < arr.length; i+= 2){
        if(i % 2 === 0){
            let product = arr[i]
            let count = Number(arr[i+1])
            result[product] = count
        }
    }

    console.log(result)
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
console.log(`-----------------------`)
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])