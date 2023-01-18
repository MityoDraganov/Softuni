
function attachEvents() {
    let postsUrl = 'http://localhost:3030/jsonstore/blog/posts'

    let commentsUrl = 'http://localhost:3030/jsonstore/blog/comments'

    let postTitle = document.getElementById('post-title')
    let postBody = document.getElementById('post-body')
    let commentsUl = document.getElementById('post-comments')

    let options = document.getElementById('posts')
    let dataMap = new Map

    let loadButton = document.getElementById('btnLoadPosts')
    loadButton.addEventListener('click', loadClicked)

    let viewButton = document.getElementById('btnViewPost')
    viewButton.addEventListener('click', viewClicked)
    //LOAD
    function loadClicked(){
        fetch(postsUrl)
        .then(response => response.json())
        .then(data => {
           // console.log(data)
            Object.values(data).forEach((value,index) =>{
               let currentOption = createOptions(value)
               options.appendChild(currentOption)
            })
        })
    }
    function createOptions(value){
        //console.log(value);
        dataMap.set(value.id, value)
        let option = document.createElement('option')
        option.value = value.id
        option.textContent = value.title
        return option
    }

    //VIEW
    function viewClicked(){
        let currentId = options.value
        commentsUl.innerHTML = ''
        for(let [key, value] of dataMap){
            if(currentId === key){
                foundArticle(key, value, currentId)
            }
        }
        fetch(`${commentsUrl}/${currentId}`)
        //.then(response =>  console.log(response))
        
        
    }

    function foundArticle(key, value, currentId){
        //console.log(value)
        //console.log(currentId);
        postTitle.textContent = value.title

        postBody.textContent = value.body

        fetch(commentsUrl)
        .then(response => response.json())
        .then(data => {
            Object.values(data).forEach((value, index) => {
                console.log(value)
                //console.log(value.id)
                if(value.postId === currentId){
                    let li = document.createElement('li')
                    li.id = value.id
                    li.textContent = value.text
                    commentsUl.appendChild(li)
                }
            })
        })
    }
}

attachEvents();