let arr = [5, 3, 7, 15, 8, 5, 9, 11];
let isIncrementBefore = [];
let x = "";
for (i = 0; i < arr.length; i++) {
  if (arr[i] < arr[i + 1]) {
    x += arr[i] + ",";
    //console.log(arr[i]);
    console.log(x);

    isIncrementBefore = true;
  } else {
    if ((isIncrementBefore = true)) {
      x += arr[i];
      //console.log(arr[i]);
      console.log(x);
      x = "";

      isIncrementBefore = false;
    } else {
      isIncrementBefore = false;
    }
  }
}

// var deret = [5, 3, 7, 15, 8, 5, 9, 11];
// var x;
// var ans = "";

// for (let i = 0; i < deret.length; i++) {
//   if (deret[i] < deret[i + 1]) {
//     ans += deret[i] + ", ";
//     x = true;
//   } else {
//     if (x == true) {
//       ans += deret[i];
//       console.log(ans);
//       ans = "";
//       x = false;
//     } else {
//       x = false;
//     }
//   }
// }
