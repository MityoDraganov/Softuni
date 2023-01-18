
const url = 'http://localhost:3030/jsonstore/collections/myboard/posts'
export async function getTopics(){
    const response = await fetch(url)
    const data = await response.json()
    showTopics(data)
}

function showTopics(data){
    Object.entries(data).forEach((value, index) =>{
        console.log(value[1])
        createTopicCard(value[0], value[1])
    })
}
function createTopicCard(id, info){
    let div = document.createElement('div')
    console.log(info)
}