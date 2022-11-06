function solution() {
    let storage = {
      protein: 0,
      carbohydrate: 0,
      fat: 0,
      flavour: 0,
    };
    let recepeis = {
      apple: { carbohydrate: 1, flavour: 2 },
      lemonade: { carbohydrate: 10, flavour: 20 },
      burger: { carbohydrate: 5, fat: 7, flavour: 3 },
      eggs: { protein: 5, fat: 1, flavour: 1 },
      turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };
    return function (string) {
      let args;
      if (string.length === 6) {
        let output = ``;
        for (let [el, value] of Object.entries(storage)) {
          output += `${el}=${value} `;
        }
        return output.trim();
      } else {
        args = string.split(" ");
      }
      if (args[0] === "restock") {
        storage[args[1]] = storage[args[1]] + Number(args[2]);
        return "Success";
      } else if (args[0] === "prepare") {
        let newObj = Object.assign({}, storage);
        let recObj = recepeis[args[1]];
        for (let [el, value] of Object.entries(recObj)) {
          if (newObj[el] >= value * Number(args[2])) {
            newObj[el] = newObj[el] - value * Number(args[2]);
          } else {
            return `Error: not enough ${el} in stock`;
          }
        }
        storage = Object.assign({}, newObj);
        return "Success";
      }
    };
  }