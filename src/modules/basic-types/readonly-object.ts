type Carro = {
  readonly marca: string;
  modelo: string;
  [key: string | number]: string | number | boolean;
};

type Carros = {
  [key: string]: Carro;
};

let carros = {
  carro1: {
    marca: 'Chevrolet',
    modelo: 'Onix',
    ano: 2020,
    cor: 'Branco',
    isFavorite: false,
  },
  carro2: {
    marca: 'Hyundai',
    modelo: 'Creta',
    ano: 2021,
    cor: 'Preto',
    isFavorite: true,
  },
  carro3: {
    marca: 'Volkswagen',
    modelo: 'Nivus',
    ano: 2022,
    cor: 'Azul',
    isFavorite: true,
  },
};

export function showCarros(carros: Carros) {
    // movies.carro1.marcar = 'Ferrari';  => error: type 'readonly string' is not assignable to type 'string'.
  console.log(carros);
}

showCarros(carros);