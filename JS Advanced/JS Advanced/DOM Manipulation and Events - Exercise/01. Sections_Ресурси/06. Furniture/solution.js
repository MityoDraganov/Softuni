function solve() {
  



  let allButtons = document.querySelectorAll('button')

  let generateButton = allButtons[0]
  generateButton.addEventListener('click', generate)


  function generate(e){

    let furnitureInput = document.querySelectorAll('textarea')[0].value
    let furnitureArray = furnitureInput.split(']')


    let tr = document.createElement('tr')

    furnitureArray.pop()

    for(let el of furnitureArray){
      el = el.substring(1)
      let obj = JSON.parse(el)



      let img = document.createElement('img')
      img.src = obj.img
      tr.appendChild(img)
      


      let name = document.createElement('td')
      name.innerHTML = obj.name
      tr.appendChild(name)

      let price = document.createElement('td')
      price.innerHTML = obj.price
      tr.appendChild(price)

      let decFactor = document.createElement('td')
      decFactor.innerHTML = obj.decFactor
      tr.appendChild(decFactor)

      let mark = document.createElement('INPUT')
      mark.setAttribute('type', 'checkbox')
      tr.appendChild(mark)
    }

    document.querySelectorAll('tbody')[0].appendChild(tr)
  }
}