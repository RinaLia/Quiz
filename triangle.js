/*elbow triangle*/

// let x = "";
// for (i = 0; i < 5; i++) {
//   for (j = 5; i > j; j--) {
//     x += "*";
//   }
//   x += "\n";
// }
// console.log(x);

/*Implement a method that accepts 3 integer values a, b, c. The method should return true if
a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted)*/

function isTriangle(a, b, c) {
 let max = Math.max(a,b,c)
 let sum = a+b+c
 return sum-max > max
//console.log(sum);


}
console.log(isTriangle(7,2,2));
console.log(isTriangle(1,2,2));
console.log(isTriangle(-1,2,0));



