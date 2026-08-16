let films = ['Meu malvado favorito', 'Vingadores: Ultimato', 'Velozes e Furiosos 9'];

// let films: string[] = ['Meu malvado favorito', 'Vingadores: Ultimato', 'Velozes e Furiosos 9'];
// let numbers: number [] = [23, 30, 20, 1, 0];

// let films: Array<string> = [
//   'Meu malvado favorito',
//   'Vingadores: Ultimato',
//   'Velozes e Furiosos 9',
// ];
// let numbers: Array<number> = [23, 30, 20, 1, 0];

export function toUperCaseStrings(arr: string[]) {
    return arr.map(item => item.toUpperCase());
}

console.log(toUperCaseStrings(films));