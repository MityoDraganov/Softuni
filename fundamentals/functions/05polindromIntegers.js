function polindromIntegers(arr){
    for(let el of arr){
        let current = String(el)
        let reversed = String(el).split('').reverse().join('');
        if(current == reversed){
            console.log("true")
        } else{
            console.log("false")
        }
    }
    }
polindromIntegers([32,2,232,1010])