const parent = document.getElementById('topics-parent')
const url = 'http://localhost:3030/jsonstore/collections/myboard/posts'
export async function getTopics(){
    const response = await fetch(url)
    const data = await response.json()
    console.log('data')
    console.log(data)
    showTopics(data)
}

function showTopics(data){
    parent.innerHTML = ``
    Object.entries(data).forEach((value, index) =>{
        console.log(value[1])
        createTopicCard(value[0], value[1])
    })
}
function createTopicCard(id, info){
    console.log(info)
    let div = document.createElement('div')
    div.classList.add('topic-title')
    div.innerHTML = `
                    <div class="topic-container" id = "${info._id}">
                        <div class="topic-name-wrapper">
                            <div class="topic-name">
                                <a href="#" class="normal">
                                <h2>${info.title}</h2>
                                </a>
                            <div class="columns">
                            <div>
                            <p>Date: <time>${info.formatedDate}</time></p>
                            <div class="nick-name">
                            <p>Username: <span>${info.username}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    parent.appendChild(div)
}
