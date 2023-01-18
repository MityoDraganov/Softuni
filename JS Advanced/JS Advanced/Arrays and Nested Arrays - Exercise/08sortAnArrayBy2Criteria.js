function sortArrayTwoCriteria(arr){
    arr.sort((a,b) =>{
        return a.length - b.length || a.localeCompare(b)
    })
    arr.forEach(element => {
        console.log(element)
    });
}
sortArrayTwoCriteria(['alpha', 
'beta', 
'gamma']
)