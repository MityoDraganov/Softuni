function furnitures(array){  
    let text = array.join(' ')
    let boughtFurniture = [];
    let totalSum = 0;
    let pattern = /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[0-9.]+)!(?<quantity>[0-9]+)/gm
    
    let valid;


    while((valid = pattern.exec(text)) !== null){

        let validItem = valid.groups['furniture']
        let validPrice = Number(valid.groups['price'])
        let validQuantity = Number(valid.groups['quantity'])

        boughtFurniture.push(validItem)
        totalSum += validPrice * validQuantity
    }


    console.log('Bought furniture:')
    for(let el of boughtFurniture){
        console.log(el)
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`)
}
furnitures(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
)