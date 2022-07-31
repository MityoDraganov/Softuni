function storeProvision(stockAsArray, deliveryAsArray){
    let stockAsObject = {}
    for(let i = 0; i < stockAsArray.length; i++){
        console.log("test")
        if(i % 2 === 0){
            stockAsObject.stockAsArray[i] = stockAsArray[i]
            
        }
    }
    console.table(stockAsObject)
}