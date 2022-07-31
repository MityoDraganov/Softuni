function inventory(arr){
    let heroes = []
    arr.forEach(el => {
        let [name, level, items] = el.split(" / ")
        let currenrHero = {
            name: name,
            level: level,
            items: items,
        }
        heroes.push(currenrHero)
    });
    let sortedByLevel = heroes.sort((a,b) =>{
        return a.level - b.level
    })
    sortedByLevel.forEach(el => {
        console.log(`Hero: ${el.name}`)
        console.log(`level => ${el.level}`)
        console.log(`items => ${el.items}`)
    })
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )
    