function lowestPricesInCities(arr){

    let result = {}
    for(let line of arr){
        let [town, product, price] = line.split(' | ')
        price = Number(price)
        if(result.hasOwnProperty(product)){
        result[product] = {}
        result[product][town] = price
        //if(c)
        } else if(result[product][town]){
            result[product][town] = price
        } else if(result[product][town] > price){
            result[product][town] = price
        }
        
    }
    for(let [product,v] of Object.entries(result)){
        for(let [town, price] of Object.entries(v)){
            console.log(`${product} -> ${price} (${town})`)
        }
    }
    //console.table(result)
}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)