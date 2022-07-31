function piccolo(array){
    let parkingLot = [];


    //   add/remove
    for(let el of array){
        let [direction, carNumber] = el.split(', ')
        if(direction === 'IN' && !parkingLot.includes(carNumber)){
            parkingLot.push(carNumber)
        } else if(direction === 'OUT' && parkingLot.includes(carNumber)){
            let index = parkingLot.indexOf(carNumber)
            parkingLot.splice(index, 1)
        }
    }

    parkingLot.sort((a,b) =>{
        let numberA = Number(a.slice(2, 5))
        let numberB = Number(b.slice(2, 5))
        return numberA - numberB
    })
    for(let el of parkingLot){
        console.log(el)
    }
    if(parkingLot.length === 0){
        console.log("Parking Lot is Empty")
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']


)