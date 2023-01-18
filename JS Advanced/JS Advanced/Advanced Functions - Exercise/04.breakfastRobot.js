function solution(){
    let ingridients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    // protein | carbohydrates | fat | flavour
    let recepeis = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour:20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat:1, flavour:1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
    }
    /*
    •	apple - made with 1 carbohydrate and 2 flavour
•	lemonade - made with 10 carbohydrate and 20 flavour
•	burger - made with 5 carbohydrate, 7 fat and 3 flavour
•	eggs - made with 5 protein, 1 fat and 1 flavour
•	turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour

    */

    //console.log(Object.entries(recepeis.apple))
    return function(input){
        let [command, product, quantity] = input.split(' ')
        if(command === 'restock'){
            ingridients[product] += Number(quantity)
            return 'Success'
        }
        
        
        
        
        else if (command === "prepare") {
            let newObjs = Object.assign({}, store);
            let recObj = recepeis[args[1]];
            for (let [e, v] of Object.entries(recObj)) {
              if (newObjs[e] >= v * Number(args[2])) {
                newObjs[e] = newObjs[e] - v * Number(args[2]);
              } else {
                return `Error: not enough ${e} in stock`;
              }
            }
            store = Object.assign({}, newObjs);
            return "Success";
          }






             else if(command === 'report'){
            let result = ''
            for(let [key, value] of Object.entries(ingridients)){
                result += `${key}=${value} `
            }
            return result.trim()
        }
    }
}


let manager = solution (); 
console.log (manager ("restock flavour 20")); // Success 
console.log (manager ("restock carbohydrate 10")); // Success
console.log (manager ("prepare lemonade 1")); // Error: not enough carbohydrate in stock 
console.log (manager ("report")); // Error: not enough carbohydrate in stock 



