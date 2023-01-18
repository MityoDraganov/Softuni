function lockedProfile() {
    let isShown = false
    let buttons = document.querySelectorAll('button')
    for(let button of buttons){
        button.addEventListener('click', showMore)
    }
    function showMore(e){
       let parentElement = e.target.parentElement
       let elements = parentElement.children
       //console.log(elements)
       //console.log(all)
       if(parentElement.children[4].checked === true){
           for(let el of elements){
               el.style.display = 'block'
           }
           document.querySelector('button').addEventListener('click' , showLess)
           let button = elements[elements.length - 1]
           button.innerHTML = 'Hide it'
       } 
    }

    function showLess(e){
        let parentElement = e.target.parentElement
        let elements = Array.from(parentElement.children)
        if(parentElement.children[4].checked === true){
        elements.pop().innerHTML = 'Show more'
        elements.pop().style.display = 'none'
        }
        document.querySelector('button').addEventListener('click' , showMore)
    }
}