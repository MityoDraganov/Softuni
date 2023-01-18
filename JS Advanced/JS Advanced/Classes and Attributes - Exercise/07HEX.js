class Hex {
    //value
    constructor(value){
        this.value = value
    }
    valueOf(){
        if(this.value === undefined || this.value === null){
            throw new Error()
        }
        return this.value
    }
    toString(){
        if(this.value === undefined || this.value === null){
            throw new Error()
        }
        return  `0x${this.value.toString(16).toUpperCase()}`;
    }
    plus(number){
        if(number.value === undefined || number.value === null){
            throw new Error()
        }
        if(typeof number.value == 'number' && typeof this.value == 'number'){
            return `0x${(this.value + number.value).toString(16).toUpperCase()}`
        }
        else if(typeof number.value != 'number' && typeof this.value == 'number'){
            let hexAsNum = parseInt(number.value, 16);
            return `0x${(this.value + hexAsNum).toString(16).toUpperCase()}`
        } else if(typeof this.value == 'number' && this.value != 'number'){
            let myValue = parseInt(this.value, 16)
            console.log(myValue);
            return `0x${(myValue + number.value).toString(16).toUpperCase()}`
        } else{
            let myValue = parseInt(this.value, 16)
            let hexAsNum = parseInt(number.value, 16);
            return `0x${(myValue + hexAsNum).toString(16).toUpperCase()}`
        }
    }
    minus(number){
        if(number.value === undefined || number.value === null){
            throw new Error()
        }
        if(typeof number.value == 'number' && typeof this.value == 'number'){
            return `0x${(this.value - number.value).toString(16).toUpperCase()}`
        }
        else if(typeof number.value != 'number' && typeof this.value == 'number'){
            let hexAsNum = parseInt(number.value, 16);
            return `0x${(this.value - hexAsNum).toString(16).toUpperCase()}`
        } else if(typeof this.value == 'number' && this.value != 'number'){
            let myValue = parseInt(this.value, 16)
            console.log(myValue);
            return `0x${(myValue - number.value).toString(16).toUpperCase()}`
        } else{
            let myValue = parseInt(this.value, 16)
            let hexAsNum = parseInt(number.value, 16);
            return `0x${(myValue - hexAsNum).toString(16).toUpperCase()}`
        }
        
    }
    parse(string){
        if(string === undefined || string === null){
            throw new Error()
        }
        return parseInt(string, 16);
    }
}
let FF = new Hex(255);
let a = new Hex('F');
let b = new Hex('F');
console.log(a.minus(b))
