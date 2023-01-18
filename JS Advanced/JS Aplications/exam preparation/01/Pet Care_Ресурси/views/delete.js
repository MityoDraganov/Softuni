export async function deleteView(e){

    if(e.hasOwnProperty('params')){
        const str = e.params.idn
        const url = `http://localhost:3030/data/pets/${str}`
        
        const response = await fetch(url,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.accessToken
            }
        })
        console.log(response)
        if(response.ok === true){
            location.href = '/'
        }
        
        }
}