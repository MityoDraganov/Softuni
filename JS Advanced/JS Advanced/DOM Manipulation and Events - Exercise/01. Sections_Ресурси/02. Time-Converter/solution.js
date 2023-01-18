function attachEventsListeners() {
    let buttons = Array.from(document.querySelectorAll('input[type = button]'))
    for(let button of buttons){
        button.addEventListener('click', buttonClicked)
    }

    function buttonClicked(e){
        let value = Number(e.target.parentElement.querySelector('input').value)
        let button = e.target.id
        //console.log(value)
        //console.log(button)

        switch(button){
            case 'daysBtn':
                solve(value)
                break;
        case 'hoursBtn':
            solve(value / 24)
            break;
        case 'minutesBtn':
            solve(value / 24 / 60)
            break;   
        case 'secondsBtn':
            solve(value / 24 / 60 / 60)
            break; 
        }
    }
    
    function solve(input){
        let inputs = Array.from(document.querySelectorAll('input[type = text]'))
        console.log(inputs)
        inputs.shift().value = input
        let tempValue = input * 24
        for(let input of inputs){
            input.value = tempValue
            tempValue *= 60
        }
        
    }
}