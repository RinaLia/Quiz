function digitize(n) {
  const change = n.toString().split("").reverse().map(Number);

  return change;
}
console.log(digitize(35231));

// const what = [1, 3, 2, 5, 3];
// console.log(typeof what);
