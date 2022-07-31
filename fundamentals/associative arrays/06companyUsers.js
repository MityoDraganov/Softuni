function companyUsers(data){
    let companies = new Map()
    for(let line of data){
        let [company, id] = line.split(" -> ")
        if(!companies.has(company)){
        companies.set(company, new Set())
        }

        companies.get(company).add(id)
    }
    let sorted = new Map([...companies].sort());
    for(let [key,value] of sorted){
        console.log(key)
        for(let el of value){
            console.log(`-- ${el}`)
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )