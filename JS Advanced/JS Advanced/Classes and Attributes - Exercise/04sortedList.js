class List{
    size = 0
    numbers = []
    add(number){
        this.numbers.push(number)
        this.size++
        this.numbers.sort((a, b) => {
            if (a < b) {
              return -1;
            }
            if (a > b) {
              return 1;
            }
            return 0;
          })
    }
    get(number){

        if(this.size - 1 < number){
            throw new Error()
        } else if(number < 0){
            throw new Error()
        }
        return this.numbers[number]
    }
    remove(number){
        if(this.size - 1 < number){
            throw new Error()
        } else if(number < 0){
            throw new Error()
        }
        this.size--
        this.numbers.splice(number,1)
        this.numbers.sort((a, b) => {
            if (a < b) {
              return -1;
            }
            if (a > b) {
              return 1;
            }
            return 0;
          })
    }
    
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

