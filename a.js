/*
diskon 35% potongan 50.000 min.60.000
*/

const discount = (item, price) => {
  const qty = item * price;
  const disc = 0.35;
  const min = 60000;
  if (qty >= min) {
    total = qty * disc;
  } else {
    total = qty;
  }
  const subTotal = qty - total;
  return subTotal;
};
console.log(discount(3, 5000));
