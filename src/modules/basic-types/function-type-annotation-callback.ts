type Address = {
  cep: string;
  default: boolean;
};

type Customer = {
  addresses: Address[];
  cpf?: number;
  nome?: string;
};

const enderecos: Address[] = [
  { cep: '00000-000', default: false },
  { cep: '00000-001', default: true },
  { cep: '00000-002', default: false },
];

const customer: Customer = {
  addresses: enderecos,
  cpf: 12345,
  nome: 'Vinicios',
};

type AddressOrUndefined = (c: Customer) => Address | undefined;

const getPrincipalEndereco: AddressOrUndefined = (
  customer: Customer,
): Address | undefined => {
  return customer.addresses.find((endereco) => endereco.default);
};

type CartItem = {
  id: number;
  price: number;
};

type ShoppingCart = {
  cartItems: CartItem[];
};

const shoppingCart: ShoppingCart = {
  cartItems: [
    { id: 1000, price: 200 },
    { id: 3030, price: 400 },
    { id: 1200, price: 213 },
  ],
};

type ApplyDiscountFn = (total: number, discount: number) => number;
const ApplyDiscount: ApplyDiscountFn = (
  total: number,
  discount: number,
): number => {
  return total - total * discount;
};

type Calc = (sC: ShoppingCart, callback: ApplyDiscountFn) => number;

let calculateTotal1: Calc = (shoppingCart: ShoppingCart, applyDiscount: ApplyDiscountFn): number => {
  const total = shoppingCart.cartItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );
  console.log(`Total do carrinho: ${total}`);
  return applyDiscount(total, 0.10);
};


const total = calculateTotal1(shoppingCart, ApplyDiscount);

const principalEndereco = getPrincipalEndereco(customer);
console.log(`Nome: ${customer.nome}, CPF: ${customer.cpf}`);
console.log(principalEndereco);

export { getPrincipalEndereco, calculateTotal1 };
