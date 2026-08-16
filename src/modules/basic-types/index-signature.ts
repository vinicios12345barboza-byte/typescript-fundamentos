type Movie = {
  title: string;
  year: number;
  [key: string | number]: string | number | boolean;
};

type Movies = {
  [key: string]: Movie;
};

let movies = {
  movie1: {
    title: 'A Origem',
    year: 2010,
    isFavorite: false,
    genre: 'Ficção Científica',
    director: 'Christopher Nolan',
  },
  movie2: {
    title: 'Homem-Aranha: No Aranhaverso',
    year: 2018,
    isFavorite: true,
    genre: 'Animação',
    runtime: 117,
  },
  movie3: {
    title: 'Relampago macqueen',
    year: 2006,
    isFavorite: true,
    genre: 'Ação',
  },
};

export function showMovies(movies: Movies) {
  console.log(movies);
}

showMovies(movies);

type Carro = {
  marca: string;
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
  console.log(carros);
}

showCarros(carros);
