function descendingOrder(n) {
  const string = n.toString().split("").sort().reverse().join("");
  const convertNumber = Number(string);
  return convertNumber;
}
console.log(descendingOrder(123456789));
