let palidrome = (str) => {
  let words = str.split('').reverse().join('')
  return str === words

}
console.log(palidrome('malam'));


