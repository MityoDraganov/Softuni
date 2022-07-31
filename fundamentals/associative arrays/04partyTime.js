function partyTime(data){
    let vip = [];
    let normal = [];
    let partyStarted = false;
    for(let line of data){
        let firstChar = Number(line[0])
        if(line === "PARTY"){
            partyStarted = true;
            continue;
        }
        if(!partyStarted){
            if(isNaN(firstChar)){
                normal.push(line)
            } else{
                vip.push(line)
            }
        } else{
            if(isNaN(firstChar)){
                let indexOf = normal.indexOf(line)
                normal.splice(indexOf, 1)
            } else{
                let indexOf = vip.indexOf(line)
                vip.splice(indexOf, 1)
            }

        }
    }
    let size = vip.length + normal.length
    console.log(size)
    for(let el of vip){
        console.log(el)
    }
    for(let el of normal){
        console.log(el)
    }
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]

    )