function passAtempTwo(input){


    let isLongEnough = false;
    let hasTwoDigits = false;
    let onlyLettersAndDigits = true;


    let inputL = input.length;
    if(inputL < 6 || inputL > 10){
        console.log("Password must be between 6 and 10 characters")
    } else{
        isLongEnough = true;
    }
    let arr = input.split('');
    const format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    let digitCounter = 0;
    let allDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]



    for(let i = 0; i < inputL; i++){
        let current = arr[i];
        if(current.match(format)){
            onlyLettersAndDigits = false
        }
        if(allDigits.includes(Number(current))){
            digitCounter++;
        }
    }
    if(onlyLettersAndDigits == false){
        console.log("Password must consist only of letters and digits")
    }
    if(digitCounter >= 2){
        hasTwoDigits = true;
    } else{
        console.log("Password must have at least 2 digits")
    }

    if(hasTwoDigits && isLongEnough && onlyLettersAndDigits){
        console.log("Password is valid")
    }
}
passAtempTwo('Pa$s$s12')
