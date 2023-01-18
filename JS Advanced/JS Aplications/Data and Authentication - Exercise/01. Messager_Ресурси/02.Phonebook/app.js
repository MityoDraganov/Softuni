
function attachEvents() {
    let url = 'http://localhost:3030/jsonstore/phonebook'

    //BUTTONS
    const loadBtn = document.getElementById('btnLoad')
    .addEventListener('click', load)

    const createBtn = document.getElementById('btnCreate')
    .addEventListener('click', create)


    //UL
    let ulResult = document.getElementById('phonebook')

    //input fields
    let person = document.getElementById('person')
    let phone = document.getElementById('phone')



    async function load(){
        ulResult.innerHTML = ''
        let promise = await fetch(url)
        let data = await promise.json()

        Object.values(data).forEach(element => {
            let li = document.createElement('li')

            let deleteBtn = document.createElement('button')
            deleteBtn.textContent = 'Delete'
            li.setAttribute('_id', element._id)
            deleteBtn.addEventListener('click', deleteRequest)

            li.textContent = `${element.person}: ${element.phone}`

            li.appendChild(deleteBtn)
            ulResult.appendChild(li)
        });
    }

    async function create(){
        await fetch(url,{
            method: 'post',
            headers:{
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                "person": person.value,
                "phone": phone.value
            })
        })
        load()
        person.value = ''
        phone.value = ''
    }

    async function deleteRequest(e){
        let parent = e.target.parentElement
        console.log(parent)
        const targetId = parent.attributes._id
        
        await fetch(`${url}/${targetId.textContent}`,{
            method: 'delete'
        })
    }
}

attachEvents();