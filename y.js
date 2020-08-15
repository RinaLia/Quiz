function reverseSegitiga(jumlah) {
  var jumlah;
  var s = "";
  for (var i = jumlah; i >= 0; i--) {
    for (var j = i; j <= jumlah; j++) {
      s += " ";
    }
    for (var k = 1; k <= i; k++) {
      s += "*";
    }
    for (var l = 1; l <= i - 1; l++) {
      s += "*";
    }
    s += "\n";
  }
  console.log(s);
}
reverseSegitiga(4);
