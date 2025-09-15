//class = (ES6 features) provides a more structured
//and clear syntax to create objects


class Products{
  constructor(name,price){
    this.name = name;
    this.price = price;
  }

  displayProduct(){
    console.log(`Product: ${this.name}, Price: $${this.price.toFixed(2)}`);
  }

  calculateTotal(taxRate){
    return this.price + (this.price * taxRate);
}
}

const salesTax = 0.07; 
const Product1 = new Products('Laptop', 999);
const Product2 = new Products('sHIRT', 45.89);

Product1.displayProduct();
Product2.displayProduct();

const total1 = Product2.calculateTotal(salesTax);
console.log(`Total price for ${Product2.name} after tax: $${total1.toFixed(2)}`);
