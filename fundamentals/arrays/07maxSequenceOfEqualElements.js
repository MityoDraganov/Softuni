function maxSequence(arr) {

  let maxSequence = [];

  for (let i = 0; i < arr.length; i++) {
    let current = [];
    for (let r = i; r < arr.length; r++) {
      if (arr[i] === arr[r]) {
        current.push(arr[i]);
      } else {
        break;
      }
    }
    if (current.length > maxSequence.length) {
      maxSequence = current;
    }
  }
  console.log(maxSequence.join(` `));
}
maxSequence([4, 4, 4, 4]);
