document.getElementById('form')
.addEventListener('submit', submitPressed)



async function submitPressed(e){
    e.preventDefault()
    let table = document.getElementById('results')

    let url = 'http://localhost:3030/jsonstore/collections/students'
    const FirstName = document.querySelectorAll('input')[0]
    const LastName = document.querySelectorAll('input')[1]
    const FacultyNumber = document.querySelectorAll('input')[2]
    const Grade = document.querySelectorAll('input')[3]

    if(FirstName.value === '' || LastName.value === '' || FacultyNumber.value === '' || Grade.value === ''){
        loadAndDisplay()
        return
    } else{
        send()
    }
    

    //load and display
    async function loadAndDisplay(){
        table.innerHTML = `<table id="results">
                            <thead>
                            <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Faculty Number</th>
                            <th>Grade</th>
                            </tr>
                            </thead>
                            <tbody></tbody>
                            </table>`
    let response = await fetch(url)
    let data = await response.json()
    Object.values(data).forEach(element =>{
        console.log(element);
        let row = table.insertRow(-1);

        let cell1 = row.insertCell(0)
        cell1.innerHTML = `${element.firstName}`
        let cell2 = row.insertCell(1)
        cell2.innerHTML = `${element.lastName}`
        let cell3 = row.insertCell(2)
        cell3.innerHTML = `${element.facultyNumber}`
        let cell4 = row.insertCell(3)
        cell4.innerHTML = `${element.grade}`
    })
    }

    //send
    async function send(){
    await fetch(url,{
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            "firstName": FirstName.value,
            "lastName": LastName.value,
            "facultyNumber": FacultyNumber.value,
            "grade": Grade.value
        })
    })
    .catch()
    loadAndDisplay()
}
}