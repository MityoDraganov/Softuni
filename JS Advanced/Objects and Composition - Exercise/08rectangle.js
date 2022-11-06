function rectan(width, height, color){
    color = color[0].toUpperCase() + color.substring(1)
    //let area
    return{
        width, height, color,
        calcArea(){
            return this.width * this.height
        },
    }
}
let rect = rectan(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.calcArea());
console.log(rect.color);
console.log(rectan(rect))
