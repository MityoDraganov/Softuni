function storeCatalogue(array){
    

    let mapCatalogue = new Map()

    for(let line of array){
        //console.log(line)
        let [product, price] = line.split(' : ')
        price = Number(price)
        //console.log(product, price);
        mapCatalogue.set(product, price)
    }
    let sorted = new Map([...mapCatalogue].sort())
    let letter = ''
    for(let [key, value] of sorted){
        //console.log(key[0])
        if(letter !== key[0]){
            letter = key[0]
            console.log(letter)
        }

        console.log(`${key}: ${value}`)
    }
}
storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)