(function extendString(){
    let regexp = /{[0-9]}/g
    String.prototype.ensureStart = function (str){
        let arrOfWords = this.split(' ')
        let startsWith = arrOfWords[0]
        if(startsWith == str.trim()){
            return arrOfWords.join(' ')
        } else{
            arrOfWords.unshift(str.trim())
            return arrOfWords.join(' ')
        }
    }

    String.prototype.ensureEnd = function(str){
        let arrOfWords = this.split(' ')
        let endsWith = arrOfWords.pop()
        if(startsWith == str.trim()){
            return arrOfWords.join(' ')
        } else{
            arrOfWords.push(str.trim())
            return arrOfWords.join(' ')
        }
    }

    String.prototype.isEmpty = function(){
        if(this.length === 0){
            return true
        } else{
            return false
        }
    }

    String.prototype.truncate = function(n){
        if(n > this.length){
            return this
        } else{
            let currentLength = 0
            let arrOfWords = this.split(' ')
            let result = []
            let lastWord = ''
            for(let el of arrOfWords){
                if(n < 4){
                    return '.'.repeat(n)
                }
                else if(currentLength + el.length + 3 <= n){
                    currentLength += el.length
                    result.push(el)
                }
                else if(n == 4){
                    return arrOfWords[0][0] + result.join(' ') + '...'
                }
                else{
                    return result.join(' ') + '...'
                }
            }
        }
    }

    
    String.format = function(...params){
        let args = arguments
        let string = args[0]
        let fullFillWords = []
        for(let i = 1; i < args.length; i++){
            fullFillWords.push(args[i])
        }
        let arrOfWords = string.split(' ')
        for(let i = 0; i < arrOfWords.length; i++){
            console.log(fullFillWords)
            if(arrOfWords[i].match(regexp) && fullFillWords[0] != undefined){
                arrOfWords.splice(i,1,fullFillWords[0])
                fullFillWords.splice(0,1)
            }
        }
        return arrOfWords.join(' ')
    }
})()
