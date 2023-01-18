function townToJSON(array){
    array.shift()
    let result = []
    
    for(let line of array){
        //console.log(line);
        let regex = /[^|]+/gm;
        let checked = line.match(regex).join('')
        //console.log(checked)
        let [town, latitude, longitude] = checked.trim().split('  ')
        //console.log(longitude)
        latitude = Number(latitude)
        latitude = latitude.toFixed(2)
        longitude = Number(longitude)
        longitude = longitude.toFixed(2)
        let obj = {
            "Town": town,
            Latitude: Number(latitude),
            Longitude: Number(longitude),
        }
        result.push(obj)
    }
    result = JSON.stringify(result)
    console.log(result)
}
townToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)