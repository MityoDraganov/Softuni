function employees(array){
    for(let person of array){
        console.log(`Name: ${person} -- Personal Number: ${person.length}`)
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )