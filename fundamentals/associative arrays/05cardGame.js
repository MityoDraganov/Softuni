function cardGame(data){
    let players = new Map()
    let cardTypes = {
        "S" : 4,
        "H" : 3,
        "D" : 2,
        "C" : 1
    }
    let cardPowers = {
        "2" : 2,
        "3" : 3,
        "4" : 4,
        "5" : 5,
        "6" : 6,
        "7" : 7,
        "8" : 8,
        "9" : 9,
        "10" : 10,
        "J" : 11,
        "Q" : 12,
        "K" : 13,
        "A" : 14,
    }
    for(let line of data){
        let [name, deckAsString] = line.split(': ')
        let deckArr = deckAsString.split(", ")
        if(!players.has(name)){
            players.set(name, new Set())
        }

        for(let card of deckArr){
            players.get(name).add(card)
        }
    }
    for(let [key, value] of players){
        let sum = 0;
        for(let card of value){
            let cardInfo = card.split("");
            let cardType = cardInfo.pop();
            let cardPower = cardInfo.join("")
            let cardPowerAsNumber = cardPowers[cardPower]
            let cardTypeAsNumber = cardTypes[cardType]
            sum += cardPowerAsNumber * cardTypeAsNumber
            }
            console.log(` ${key}: ${sum}`)
        }
    }
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]
    
    )