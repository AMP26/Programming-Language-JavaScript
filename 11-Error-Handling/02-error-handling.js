function calculateTotal(cart) {
  try {
      
      const taxRate = taxRate;  // taxRate is undefined - Error 1

      const total = cart.reduce((total, item) => {
          if (typeof item.price !== "number") {
              throw new Error("Price Not Valid"); // Error 2
          }
          return total + item.price;
      }, 0);

      const finalPrice = total + (total * taxRate); 
      console.log("Total price including tax: " + finalPrice);
      
  } 
  catch (error) {
      console.error("An error occurred:", error.message);
  }
}


const cart = [
  { name: "Sugar", price: "20" }, // Invalid price - string instead of number
  { name: "Salt", price: 40 },  
  { name: "Orange", price: 90 }
];

calculateTotal(cart);