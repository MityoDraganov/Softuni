function solve() {
  let string = document.getElementById("text").value
  let namingConvention = document.getElementById("naming-convention").value

  let arrayOfWords = string.split(' ')
  let result = ''
  if(namingConvention === 'Camel Case'){
    let firstWord = arrayOfWords.shift().toLowerCase()
    result += firstWord
    for(let el of arrayOfWords){
      el = el.toLowerCase()
      result += el[0].toUpperCase() + el.substring(1)
    }
  }else if(namingConvention === 'Pascal Case'){
    for(let el of arrayOfWords){
      el = el.toLowerCase()
      result += el[0].toUpperCase() + el.substring(1)
    }
  } else{
    result = 'Error!'
  }

  document.getElementById("result").innerText = result
}