function perfectNum(num){
    let sum = 0
    let isPerfect = false;
    for(let i = 0; i < num; i++){
        sum += i;
        if(sum == num){
            console.log("We have a perfect number!")
            isPerfect = true;
            break;
        }
    }
    if(isPerfect == false){
        console.log("It's not so perfect.")
    }
}
perfectNum(1236498)