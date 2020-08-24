let solve = (s) => {
  const lowerCase = s.match(/[a-z]/g) || [];
  const upperCase = s.match(/[A-Z]/g) || [];
  return lowerCase.length < upperCase.length
    ? s.toUpperCase()
    : s.toLowerCase();
};

console.log(solve("CODe"));
