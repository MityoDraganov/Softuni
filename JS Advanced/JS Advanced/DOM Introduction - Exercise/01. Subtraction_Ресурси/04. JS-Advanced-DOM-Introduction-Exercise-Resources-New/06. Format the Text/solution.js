function solve() {
  //TODO
 // document.getElementById("output").innerHTML = ''
  let input = document.getElementById("input").value
  let sentences = input.split('.')
  let sentenceCounter = 0
  let result = []
  let regexp = /[\w]+/gm
  for(let sentence of sentences){
    if(!regexp.test(sentence)){
      let index = sentences.indexOf(sentence)
      sentences.splice(index, 1)
    }
  }

  for(let sentence of sentences){
    if(sentenceCounter === 3){
      //console.log(result.join('. '))
      result.push('.')
      document.getElementById("output").innerHTML += `<p> ${result.join('')} </p>` + '.'
      result = []
      sentenceCounter = 0
    }
    result.push(sentence)
    sentenceCounter++;
  }
  result.push('.')
  document.getElementById("output").innerHTML += `<p> ${result.join('')} </p>` + '.'
}