let x = "saya tutup kantor"; 
let y = "pada suatu hari saya pergi ke kantor dan ternyata kantor saya tutup";

let checker = (x, y) => {
  let arrx = x.split(" "); //1
  let arry = y.split(" "); //1

  for (let i = 0; i < arrx.length; i++) { //
    let cek = arry.includes(arrx[i]);

    if (cek == false) {
      return false;
    }
  }
  return true;
};

console.log(checker(x,y));




