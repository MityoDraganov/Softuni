function create(words) {
   let parrent = document.getElementById('content')
   words.forEach(element => {
      let div = document.createElement('div')
      let p = document.createElement('p')
      p.innerHTML = element
      p.style.display = 'none'
      div.appendChild(p)
      div.addEventListener('click', show)
      parrent.appendChild(div)
   });

   function show(event){
      if(event.target.nodeName === 'P'){
         return;
      }
     let p =  event.target.children[0]
     p.style.display = 'block'
   }
}