let shoppingCart = [200.76, 145,12., '33.99', '44', 'not defined'] 

export function totalize(values: (string | number)[]){  
    return values.map(value => typeof value === 'number' ? value : parseFloat(value))
    .filter(value => !isNaN(value))
    .reduce((acc, value) => acc + value, 0);
}

console.log(totalize(shoppingCart));