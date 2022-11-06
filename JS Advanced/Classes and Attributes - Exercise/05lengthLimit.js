class Stringer{
    startLength
    innerString
    innerLength
    constructor(string, lenght){
        this.startLength = lenght
        this.innerString = string
        this.innerLength = lenght
    }
    decrease(number){
        if((this.innerLength - number) >= 0){
            this.innerLength -= number
        } else{
            this.innerLength = 0
        }
    }
    increase(number){
        this.innerLength += number
    }
    toString(){
        if(this.innerLength >= this.innerString.length){
            return this.innerString
        }else{
        return this.innerString.slice(0, this.innerLength) + '...'
        }
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
