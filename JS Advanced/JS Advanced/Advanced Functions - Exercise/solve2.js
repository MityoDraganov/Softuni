function add(n){
    let addNext = function(x) {
      return add(n + x);
    };
  
    addNext.valueOf = function() {
      return n;
    };
  
    return addNext;
  }
//console.log(add(1)(2)(3)()) //6
console.log(add(1)(1)(1)(1)(1))  //6