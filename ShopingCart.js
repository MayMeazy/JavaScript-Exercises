let price = 20;
let quantity = 4;
let subTotal = price * quantity;
let treshold = 10;
let discount = 0.1 * subTotal;
// if (subTotal > treshold) {
// 	discount = subTotal * discount;
// } else discount = 0;
let tax = 0.15 * subTotal;
let discounted = subTotal - discount;
let total = discounted + tax;

console.log(`Price: $` + price);
console.log(`Quantity:` + quantity);
console.log(`Subtotal: $` + subTotal);
console.log(`Discount: $` + discount);
console.log(`Tax: $` + tax);
// console.log(discounted);
console.log(`Total: $` + total);
console.log("Thank you for shopping with us!");
