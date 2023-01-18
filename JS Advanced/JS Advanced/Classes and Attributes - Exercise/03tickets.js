function tickets(array, sortingCriteria){
    let result = []
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination
            this.price = price
            this.status = status
        }
    }
    for(let line of array){
        let [destination, price, status] = line.split('|')
        let myTicket = new Ticket
        myTicket.destination = destination
        myTicket.price = parseFloat(price)
        myTicket.status = status
        result.push(myTicket)
    }

    //console.log(result[0].destination)
    if(sortingCriteria === 'destination'){
            result.sort((a, b) => {
            if (a.destination< b.destination) {
                return -1;
            }
            return 0;
        })
    }
    else if(sortingCriteria === 'status'){
        result.sort((a, b) => {
            if (a.status < b.status) {
                return -1;
            }
            return 0;
        })
    }
    else if(sortingCriteria === 'price'){
        result.sort((a, b) => {
            if (a.price < b.price) {
                return -1;
            }
            return 0;
        })
    }
    return result
}
tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price');