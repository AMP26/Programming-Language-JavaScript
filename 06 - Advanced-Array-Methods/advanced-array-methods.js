// Array of objects representing products
products = [
  {name: "item1" , price: 500 , quantity: 4},
  {name: "item2" , price: 1000 , quantity: 2},
  {name: "item3" , price: 300 , quantity: 3},
  {name: "item4" , price: 50 , quantity: 0},
  {name: "item5" , price: 80 , quantity: 9},
  {name: "item6" , price: 100 , quantity: 0},
];

// Products below a certain range
let range = products.filter(item => item.price <= 100);
console.log("Products below 100: ", range);

// Array of product names
let productNames = products.map(item => item.name);
console.log("Product names: ", productNames);

// Total price of all products
let totalPrice = products.reduce((sum, item) => { return sum += item.price;}, 0);
console.log("Total Price of all products: ", totalPrice);

// Find first product out of stock
let firtProductOutOfStock = products.find(item => item.quantity === 0);
console.log("First product out of stock: " , firtProductOutOfStock);

// Find first index of product out of stock
let indexOfProductOutOfStock = products.findIndex(item => item.quantity === 0);
console.log("First index of product out of stock: " , indexOfProductOutOfStock);

// Check if all products are in stock
let inStock = products.every(item => item.quantity !== 0);
console.log("Are Products in stock? every(): " , inStock);

let outOfStock = products.some(item => item.quantity === 0);
console.log("Any product in stock? some(): " , outOfStock);