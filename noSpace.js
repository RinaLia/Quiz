function noSpace(x) {
  const move = x.replace(/\s/g, "");
  return move;
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
