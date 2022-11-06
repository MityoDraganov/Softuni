function carFactory(obj){
    let result = {}
    result.model = obj.model
    
    if(obj.power <= 90){
        result.engine = {
            power: 90,
            volume: 1800
        }
    } else if(obj.power <= 120){
        result.engine = {
            power: 120,
            volume: 2400
        }
    } else{
        result.engine ={
            power: 200,
            volume: 3500
        }
    }

    if(obj.carriage === 'hatchback'){
        result.carriage = {
            type: 'hatchback',
            color: obj.color
        }
    } else{
        result.carriage = {
            type: 'coupe',
            color: obj.color
        }
    }
    let size = 0;
    if(obj.wheelsize % 2 === 0){
         size = obj.wheelsize - 1;
    } else{
         size = obj.wheelsize;
    }
    result.wheels = [size, size, size, size]


    return result
}
carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)
console.log('--------next------')
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
)