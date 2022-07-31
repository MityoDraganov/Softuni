function addAndSubtract(input) {
  let arrL = input.length;
  let originalSum = 0;
  let newSum = 0;

  for (let n = 0; n < arrL; n++) {
    originalSum += input[n];
    if (input[n] % 2 !== 0) {
      input[n] -= n;
    } else {
      input[n] += n;
    }
    newSum += input[n];
  }
  console.log(input);
  console.log(originalSum);
  console.log(newSum);
}
addAndSubtract([5, 15, 23, 56, 35]);
