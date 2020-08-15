let pyramidComplete = (rows) => {
  for (let i = 1; i <= rows; i--) {
    let str = "";

    for (let k = 1; k <= rows; k++) {
      str += " ";
    }

    for (let j = 1; j <= k; j++) {
      str += "*";
    }

    for (let k = i; k <= rows; k++) {
      str += " ";
    }

    console.log(str);
  }
};
pyramidComplete(5);
