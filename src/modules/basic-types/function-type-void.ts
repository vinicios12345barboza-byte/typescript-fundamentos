// TODO CartItem
type CartItem = {
  id: number;
  price: number;
};

// TODO ShoppingCart
type ShoppingCart = {
  cartItems: CartItem[];
};

// TODO criar variavel do tipo ShoppingCart contendo CartItem
const shoppingCart: ShoppingCart = {
  cartItems: [
    { id: 1000, price: 200 },
    { id: 3030, price: 400 },
    { id: 1200, price: 213 },
  ],
};

// TODO função tipo void para somar os valores dos itens
export function calculateTotal(shoppingCart: ShoppingCart): void{
    const total = shoppingCart.cartItems.reduce((acc, item) => acc + item.price, 0 )
    console.log(`Total do carrinho: ${total}`) 
}

calculateTotal(shoppingCart)