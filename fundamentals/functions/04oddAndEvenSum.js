function oddAndEven(num) {
    let numAsString = num.toString()
  let inputL = numAsString.length;
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < inputL; i++) {
    if (Number(numAsString[i]) % 2 == 0) {
      evenSum += Number(numAsString[i]);
    } else {
      oddSum += Number(numAsString[i]);
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
oddAndEven(1000435)