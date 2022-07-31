function pascalCaseSplitter(string){
    

    let separatedString = string.replace( /([A-Z])/g, " $1" );
    let finalSeparatedString = separatedString.charAt(0).toUpperCase() + separatedString.slice(1);

    let arr = finalSeparatedString.trim().split(' ')
    let result = arr.join(', ')
    console.log(result)
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')