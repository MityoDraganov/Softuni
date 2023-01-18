function attachEvents() {
    let sendBtn = document.getElementById('submit')
    .addEventListener('click', sendMessage)

    let refreshBtn = document.getElementById('refresh')
    .addEventListener('click', loadMessages)

    let textArea = document.getElementById('messages')

    let name = document.getElementsByName('author')[0]
    let message = document.getElementsByName('content')[0]
    function loadMessages(){
        textArea.value = ''
    fetch('http://localhost:3030/jsonstore/messenger')
    .then(response => response.json())
    .then(data => {
        Object.values(data).forEach((value, index) =>{
            textArea.value += `${value.author}: ${value.content}`
            textArea.value += `\r\n`
        })
        textArea.value += textArea.value.slice(0, -2)
    })
    }

    async function sendMessage(){
        await fetch('http://localhost:3030/jsonstore/messenger', {
            method: 'post',
            headers:{
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                author: name.value,
                content: message.value
            })
        })
    }
}

attachEvents();
