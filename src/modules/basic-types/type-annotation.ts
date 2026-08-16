let product = "Laptop";
let price = 1200;


export function display(product: string, price: number){
    console.log(product.toUpperCase(), price.toFixed(2));
} 

display(product, price); 