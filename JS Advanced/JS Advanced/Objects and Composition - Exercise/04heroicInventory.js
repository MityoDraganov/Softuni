function heroicInventory(arr){
    
    let result = []

    for(let el of arr){
        let obj = {}
        //console.log(el)
        let arr = el.split(' / ')
        let heroName = arr[0]
        let heroLevel = arr[1]
        let items = arr[2]
        
        let arrOfItems = items.split(', ')
        //console.log(arrOfItems)
        obj.name = heroName
        obj.level = Number(heroLevel)
        obj.items = arrOfItems
        result.push(obj)
        
    }
   console.log( JSON.stringify(result))
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)