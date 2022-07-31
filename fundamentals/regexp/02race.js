function race(input){
    let nameMap = new Map()
    let names = input.shift().split(', ')
    //console.log(input)

    names.forEach(person => {
        nameMap.set(person, 0)
    });

    let letterPattern = /[A-Za-z]/gm
    let digitsPatern = /\d+/

    for (let index = 0; index < input.length; index++) {

        let currentLine = input[index]
        if(currentLine === 'end of race'){
            break;
        } else{

        }

        let name = currentLine.match(letterPattern).join('')
        let distance = currentLine.match(digitsPatern).reduce((a,b) =>{
            return Number(a) + Number(b)
        })
        
        if(nameMap.has(name)){
            
        }
        console.log(distance)
    }
    console.table(nameMap)
}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
)