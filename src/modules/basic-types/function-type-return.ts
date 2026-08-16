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

// console.log(`Detalhes do customer`, customer)

export function getPrincipalEndereco(customer: Customer): Address | undefined {
  return customer.addresses.find((endereco) => endereco.default);
}

const principalEndereco = getPrincipalEndereco(customer);
console.log(`Nome: ${customer.nome}, CPF: ${customer.cpf}`);
console.log(principalEndereco);
