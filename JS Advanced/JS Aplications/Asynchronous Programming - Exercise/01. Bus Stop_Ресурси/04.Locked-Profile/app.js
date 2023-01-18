function lockedProfile() {
    let address = 'http://localhost:3030/jsonstore/advanced/profiles'
    let main = document.getElementById('main')
    fetch(address)
    .then(address => address.json())
    .then(data =>{
        main.innerHTML = ''
        Object.values(data).forEach((value, index) => {
            //console.log(index)
            //console.log(value)
            let profile = createProfile(value, index)
            main.appendChild(profile)
        });
    }      
    )
    function createProfile(value, index){
        let div = document.createElement('div')
        div.classList.add('profile')
        div.innerHTML =  `
        <img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user${index + 1}Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user${index + 1}Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user1Username" value="${value.username}" disabled readonly />
        <div id="hidfields" display = "nonde">
            <hr>
            <label>Email:</label>
            <input type="email" name="user${index + 1}Email" value="${value.email}" disabled readonly/>
            <label>Age:</label>
            <input type="email" name="user${index + 1}Age" value="${value.age}"  disabled readonly/>
        </div>
        <button>Hide it</button>`
        return div
    }
    main.addEventListener('click', clicked)
    function clicked(e){
        let isButton
        if(e.target.nodeName === 'BUTTON'){
            isButton = true
        } else{
            isButton = false
        }
        if (!isButton) {
            return
        }
        let profile = e.target.parentElement

        let lockButton = profile.querySelector('input')
        if (lockButton.checked) {
            return
        }
        let showButton = profile.querySelector('button')
        let emailDiv = profile.querySelector('#hidfields')
        if (showButton.textContent === 'Show more') {
            showButton.textContent = 'Hide it'
            emailDiv.style.display = 'block'
        } else {
            showButton.textContent = 'Show more'
            emailDiv.style.display = 'none'
        }
    }
}