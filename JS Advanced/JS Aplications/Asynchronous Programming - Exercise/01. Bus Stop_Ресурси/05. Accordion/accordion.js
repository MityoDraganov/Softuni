function solution() {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list'
    const main = document.getElementById('main')
    fetch(url)
    .then(response => response.json())
    .then(data => {
        iterateObj(data)
    })
    
    function iterateObj(data){
        Object.values(data).forEach((value,index) =>{
            //console.log(value)
            let currentThing = createElements(value, index)
            main.appendChild(currentThing)
        })
    }
    function createElements(value, index){
   let myDiv = document.createElement('div')
   myDiv.classList.add('accordion')

   myDiv.innerHTML = `<div class="head">
                        <span>${value.title}</span>
                        <button class="button" id="${value._id}">More</button>
                    </div>
                    <div class="extra" display: none>
                        
                    </div>
   `
   return myDiv
}
    main.addEventListener('click', isClicked)
    function isClicked(e){
        const detailsUrl = 'http://localhost:3030/jsonstore/advanced/articles/details/'
        let isButton = e.target.nodeName === "BUTTON"
        if(!isButton){
            return
        } else{
            let parent = e.target.parentElement.parentElement
            let extraDiv = parent.getElementsByClassName('extra')[0]

            let button = parent.querySelector('button')
            let buttonid = button.attributes.id.textContent


            //
            if(button.textContent === 'More'){
            console.log(extraDiv)
            if(extraDiv.childElementCount < 1){
            let p = document.createElement('p')
            fetch(`${detailsUrl}${buttonid}`)
            .then(response => response.json())
            .then(data => {
                p.textContent = data.content
            })
            extraDiv.appendChild(p)
        }
            extraDiv.style.display = 'block'
                button.textContent = 'Less'
            } 
            
            else{
                extraDiv.style.display = 'none'
                button.textContent = 'More'
            }
        }
    }
}
solution()
