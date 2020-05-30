const dnaStrand = (dna) => {
  const pairs = {'A':'T', 'T':'A', 'C':'G', 'G':'C'}
  //return dna.split('').map(function (arr) {return pairs[arr]}).join('')
  return dna.split('').map(arr=>pairs[arr]).join('')
}
console.log(dnaStrand('AAAA'));
console.log(dnaStrand('ATTGC'));