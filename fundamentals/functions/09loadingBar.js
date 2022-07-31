function loadingBar(num){
    let currentProgress = num / 10;
    let arr = []
    let i = 0;
    for(i; i < currentProgress; i++){
        arr.push("%")
    }
    let notUsed = 10 - i;
    for(let j = 0; j < notUsed; j++){
        arr.push(".")
    }
    if(num == 100){
        console.log("100% Complete!")
        console.log("[%%%%%%%%%%]")
    } else{
        console.log(`${num}% [${arr.join("")}]`)
        console.log("Still loading...")
    }
}
loadingBar(90)