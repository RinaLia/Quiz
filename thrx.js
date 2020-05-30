const prompt = require("prompt-sync")({ sigint: true });

var seratusanribu = 0; //1
var limapuluhanribu = 0; //1
var limaribuan = 0; //1
var duaribuan = 0; //1
var cepean = 0; 
var status = true; 

var a = prompt("masukan nominal laba : "); 
var b = prompt("masukan jumlah pegawai : ");   
var c = prompt('masukkan nominal terkecil : ')
//console.log(a);
//console.log(b);

pecahan(a, b, c); 

function pecahan(a, b, c) {
  var laba = parseInt(a); 
  var pegawai = parseInt(b); 
  var nominal = parseInt(c)
  //console.log(laba);
  //console.log(pegawai);

  var thr = laba / pegawai; 
  var thrNett = 100 * Math.floor(thr / 100); 
  //console.log(thr);
  //console.log(thrNett);

  while (status) {
    if (thrNett >= 100000) { 
      thrNett -= 100000; 
      seratusanribu += 1; 
    } else if (thrNett >= 50000) { 
      thrNett -= 50000; 
      limapuluhanribu += 1; 
    } else if (thrNett >= 5000) { 
      thrNett -= 5000; 
      limaribuan += 1; 
    // } else if (thrNett >= 2000) { 
    //   thrNett -= 2000; 
    //   duaribuan += 1;
    // } else if (thrNett >= 100) { 
    //   thrNett -= 100; 
    //   cepean += 1; 
    } else {
      status = false; 
    }
  }

  //console.log(seratusanribu);
  //console.log(limapuluhanribu);
  //console.log(limaribuan);
  //console.log(duaribuan);
  //console.log(cepean);

  var totalseratusanribu = pegawai * seratusanribu; 
  var totallimapuluhanribu = pegawai * limapuluhanribu; 
  var totallimaribuan = pegawai * limaribuan; 
  var totalduaribuan = pegawai * duaribuan; 
  var totalcepean = pegawai * cepean;

  var hasil = console.log(
    "total pecahan Rp.100000 yang di butuhkan adalah " +
      totalseratusanribu +
      "\ntotal pecahan Rp.50000 yang di butuhkan adalah " +
      totallimapuluhanribu + 
      "\ntotal pecahan Rp.5000 yang di butuhkan adalah " +
      totallimaribuan + 
      "\ntotal pecahan Rp.2000 yang di butuhkan adalah " +
      totalduaribuan + 
      "\ntotal pecahan Rp.100 yang di butuhkan adalah " +
      totalcepean 
  );

  return hasil; 
}