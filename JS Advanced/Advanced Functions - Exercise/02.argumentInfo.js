function argumentInfo(...argumentsArray){
    let types = new Map()
    for(let el of argumentsArray){
        let typeOfEl = (typeof el)
        if(!types.has(typeOfEl)){
            types.set(typeOfEl, 1)
        } else{
            let oldValue = types.get(typeOfEl)
            //console.log(oldValue)
            types.set(typeOfEl, oldValue + 1)
        }
        if(typeOfEl == 'object'){
            console.log(`${typeOfEl}: ${JSON.stringify(el)}`)
        } else{
        console.log(`${typeOfEl}: ${el}`)
        }
    }
    let sorted = new Map([...types].sort((a, b) => b[1] - a[1]));
    for(let [key, value] of sorted){
        console.log(`${key} = ${value}`)
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })