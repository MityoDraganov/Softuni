function movies(input){
    let moviesArr = [];
    for(let el in input){
        let currentCommand = input[el]
        let commandElements = currentCommand.split(' ')
        let commandL = commandElements.length
        //console.log(currentCommand)



        if(currentCommand.includes("addMovie")){
            let movieNameString = ""
            for(let i = 1; i < commandL; i++){
                movieNameString += commandElements[i] + " ";
            }
            moviesArr.push(movieNameString);
        }



        if(currentCommand.includes("directedBy")){
            let movieNameString = ""
            let index = 1;
            let counter = 0;
            let directorName = ""
            for(let i = 0; i < commandL; i++){
                
                if(commandElements[i] === "directedBy"){
                    for(let i = index; i < commandL; i++){
                        directorName += commandElements[i] + " ";
                    }
                    break;
                }else{
                    index++;
                    counter++;
                    movieNameString += commandElements[i] + " ";
                }
            }
            if(moviesArr.includes(movieNameString)){
                moviesArr.splice(counter, 0, directorName)
            }
        }


        if(currentCommand.includes("onDate")){
            let movieNameString = ""
            let index = 1;
            let counter = 0;
            let date = ""
            for(let i = 0; i < commandL; i++){
                
                if(commandElements[i] === "onDate"){
                    for(let i = index; i < commandL; i++){
                        date += commandElements[i] + " ";
                    }
                    break;
                }else{
                    index++;
                    counter++;
                    movieNameString += commandElements[i] + " ";
                }
            }
            if(moviesArr.includes(movieNameString)){
                moviesArr.splice(counter, 0, date)
            }
        }

    }
    let moviesArrL = moviesArr.length;
    for(let i = 0; i <moviesArrL; i += 2){
        let toPrint = []
        for(let j = i; j <= i+2; j++){
            if(j % 2 !== 0){
                let string = ""
                string = `name: ${moviesArr[j]}`
                toPrint.push(string)
            }
        }
        console.log(toPrint)
    }
    
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )