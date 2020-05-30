
const prompt = require("prompt-sync")({ sigint: true });

var seratusanribu = 0;
var limapuluhanribu = 0;
var limaribuan = 0;
var duaribuan = 0;
var cepean = 0;
var status = true;

var a = prompt("masukan nominal laba : ");
var b = prompt("masukan jumlah pegawai : ");
var c = prompt('masukkan nominal terkecil: ')
// console.log(a);
// console.log(b);
// console.log(c);

var laba = parseInt(a);
var pegawai = parseInt(b);
var nominal = parseInt(c)
// console.log(laba);
// console.log(pegawai);
// console.log(nominal);


var thr = laba / pegawai;
//var thrNett = 5000 * Math.floor(thr/5000);
if (nominal == 5000 ){
  thrNett  = 5000 * Math.floor(thr/5000)
}else if(nominal == 2000){
  thrNett = 2000 * Math.floor(thr/2000)
}else{
  thrNett = 100 * Math.floor(thr/100) 

}
//console.log();

// console.log(thr);
console.log(thrNett);

while (status) {
  if (thrNett >= 100000) {
    thrNett -= 100000;
    seratusanribu += 1;
  } else if (thrNett >= 50000) {
    thrNett -= 50000;
    limapuluhanribu += 1;
  } else if (thrNett >= 5000 && thrNett % 5000 == 0 && nominal==2000 ) {
    thrNett -= 5000 ; 
    limaribuan += 1;
  } else if (thrNett >= 5000 && nominal==100 ) {
    thrNett -= 5000 ;
    limaribuan += 1;
  } else if (thrNett >= 5000 && nominal==5000 ) {
    thrNett -= 5000 ;
    limaribuan += 1;
  } else if (thrNett >= 2000 && nominal==100 ) {
    thrNett -= 2000 ;
    duaribuan += 1;
  } else if (thrNett >= 2000) {
      thrNett -= 2000 ;
      duaribuan += 1;
  } else if (thrNett >= 100 && nominal == 100) {
    thrNett -= 100;
    cepean += 1;
//   // } else if (thrNett >= nominal){
//   //   thrNett -= nominal
  }else {
    status = false;
  }
}



console.log(seratusanribu);
console.log(limapuluhanribu);
console.log(limaribuan);
console.log(duaribuan);
console.log(cepean);

var totalseratusanribu = pegawai * seratusanribu;
var totallimapuluhanribu = pegawai * limapuluhanribu;
var totallimaribuan = pegawai * limaribuan;
var totalduaribuan = pegawai * duaribuan;
var totalcepean = pegawai * cepean;

console.log("total pecahan Rp.100000 yang di butuhkan adalah " + totalseratusanribu);
console.log("total pecahan Rp.50000 yang di butuhkan adalah " + totallimapuluhanribu);
console.log("total pecahan Rp.5000 yang di butuhkan adalah " + totallimaribuan);
console.log("total pecahan Rp.2000 yang di butuhkan adalah " + totalduaribuan);
console.log("total pecahan Rp.100 yang di butuhkan adalah " + totalcepean)