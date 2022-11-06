function encodeAndDecodeMessages() {
    let allButtons = document.querySelectorAll('button')
    //let allTextAreas = document.querySelectorAll('textarea')


    let encodeButton = allButtons[0]
    encodeButton.addEventListener('click', encode)

    let decodeButton = allButtons[1]
    decodeButton.addEventListener('click', decode)



    function encode(e){
        let rawInput = document.querySelectorAll('textarea')[0].value
        let output = ''
        for(let char of rawInput.split('')){
            let asciiIndex = char.charCodeAt(0)
            output += String.fromCharCode(asciiIndex + 1)
        }
        document.querySelectorAll('textarea')[1].value = output
        document.querySelectorAll('textarea')[0].value = ''
    }

    function decode(e){
        let rawInput = document.querySelectorAll('textarea')[1].value
        let output = ''
        for(let char of rawInput.split('')){
            let asciiIndex = char.charCodeAt(0)
            output += String.fromCharCode(asciiIndex - 1)
        }
        document.querySelectorAll('textarea')[1].value = output
    }
   // debugger
}