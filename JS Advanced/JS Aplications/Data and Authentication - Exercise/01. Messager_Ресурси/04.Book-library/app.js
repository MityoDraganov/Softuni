const url = 'http://localhost:3030/jsonstore/collections/books'

const loadBtn = document.getElementById('loadBooks')
.addEventListener('click', loadAllBooks)

let table = document.getElementsByTagName('table')[0]

let form = document.getElementsByTagName('form')[0]
form.addEventListener('submit', formSubmited)

let editId
let editTds

async function loadAllBooks(){
    let response = await fetch(url)
    let data = await response.json()

    table.innerHTML =`<thead>
    <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Action</th>
    </tr>
</thead>
<tbody>
</tbody>
</table>`

    let tbody = document.getElementsByTagName('table')[0].children[1]
    //console.log(tbody);

    Object.entries(data).forEach(fullInfo =>{
        let id = fullInfo[0]
        //console.log(id)
        let element = fullInfo[1]

        let tr = document.createElement('tr')
        tr.setAttribute('_id',id)
        let title = document.createElement('td')
        title.textContent = element.title

        let author = document.createElement('td')
        author.textContent = element.author

        let buttons = document.createElement('td')

        let editBtn = document.createElement('button')
        editBtn.textContent = 'Edit'
        editBtn.addEventListener('click', edit)

        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', deleteFnc)

        buttons.appendChild(editBtn)
        buttons.appendChild(deleteBtn)

        tr.appendChild(title)
        tr.appendChild(author)
        tr.appendChild(buttons)
        tbody.appendChild(tr)
    })
}


async function edit(e){
    
    editId = e.target.parentElement.parentElement.attributes._id.textContent

    let tds = e.target.parentNode.parentElement.children
    let title = tds[0].textContent
    let author = tds[1].textContent


    let titleField = document.getElementsByName('title')[0]
    titleField.value = title
    let authorField = document.getElementsByName('author')[0]
    authorField.value = author

    let h3 = form.getElementsByTagName('h3')[0]
    h3.textContent = 'Edit FORM'
    let button = form.getElementsByTagName('button')[0]
    button.textContent = 'Save'
    

    
}

async function deleteFnc(e){
    const id = e.target.parentElement.parentElement.attributes._id.textContent
    fetch(`${url}/${id}`,{
        method: 'delete'
    })
}

async function formSubmited(e){
    e.preventDefault()

    let button = form.getElementsByTagName('button')[0]
    let h3 = form.getElementsByTagName('h3')[0]

    let title = document.getElementsByName('title')[0]
    let titleValue = title.value
    let author = document.getElementsByName('author')[0]
    let authorValue = author.value

    if(titleValue !== '' && authorValue !== ''){
        if(button.textContent === 'Submit'){
    fetch(url, {
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "author": authorValue,
            "title": titleValue
        })
    })
} else{
    let titleField = document.getElementsByName('title')[0].value
    let authorField = document.getElementsByName('author')[0].value
    console.log(titleField)
    console.log(authorField)
    fetch(`${url}/${editId}`,{
        method: 'put',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "author": authorField,
            "title": titleField
        })
    })
}
    
}
button.textContent = 'Submit'
h3.textContent = 'FORM'
}