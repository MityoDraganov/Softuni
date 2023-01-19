
const events = {

}

function subscribe(eventName, callback){
    if(!events[eventName]){
        events[eventName] = []
    }
    
    events[eventName].push(callback)
}

//data is array
function publish(eventName, options){
    let dataToReturn
    if(!events[eventName]){
        events[eventName] = []
    }

    events[eventName].forEach(element => {
       // console.log('function')
            if(options !== undefined){
                const data = element(options)
                dataToReturn = data
            } else{
            const data = element()
            //console.log(data)
            dataToReturn = data
            }
        //ERROR HERE: event comes but data is not returned ??----homeView.js?? --SOLVED!!!!!!!!
        //element()
    });
    return dataToReturn
}

const eventBus = {
    publish,
    subscribe
}


module.exports = eventBus;
console.log('eventBus running')