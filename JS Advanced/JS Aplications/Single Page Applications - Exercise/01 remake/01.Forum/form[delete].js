const url = 'http://localhost:3030/jsonstore/collections/myboard/posts'
let form

export function checkSubmitter(e){
    //console.log(e)
    //debugger
    e.preventDefault()
    form = e.target
    if(e.submitter.textContent === 'Post'){
        onSubmit(form)
    }else{
        onCancel(form)
    }
}
function onSubmit(form){
    const title = form[0].value
    const username = form[1].value
    const post = form[2].value

    if(title && username && post){
        createCard(title, username, post)
    }
}

function onCancel(){
    form[0].value = ''
    form[1].value = ''
    form[2].value = ''
}

async function createCard(title, username, post){
    form[0].value = ''
    form[1].value = ''
    form[2].value = ''
    const body = {
        title,
        username,
        post
    }
    try{
   const response = await fetch(url, {
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    //console.log(response)
    if(response.ok != true){
        throw new Error(response.message)
    }
    const data = await response.json()
    
} catch(err){
    alert(err)
}
}
