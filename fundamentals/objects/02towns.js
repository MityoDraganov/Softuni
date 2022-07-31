function towns(arr){
    for(let currentTown of arr){
        let townInfo = currentTown.split(" | ")
        let townName = townInfo[0]
        let townLatitude = Number(townInfo[1])
        let townLongtitude = Number(townInfo[2])     
        let Town = {
            town : townName ,
            latitude : townLatitude.toFixed(2) ,
            longitude : townLongtitude.toFixed(2) ,
        }
        console.log(Town)
    }
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)