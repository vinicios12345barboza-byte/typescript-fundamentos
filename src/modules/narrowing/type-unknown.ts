let valueUnkenown: unknown; // tipo é desconhecido
valueUnkenown = [1, 23, 4];
valueUnkenown = {a: 1, b: 2}
valueUnkenown = 'curso de typescript'
valueUnkenown = 43.23
//let valueAny: any; // pode assumir qualquer tipo

function processDataWithUnlnown(value: unknown) {
  if (Array.isArray(value)) {
    value.map((item) => console.log(item));
  }

  if(value instanceof Object){
    if('b' in value){
        console.log(value.b)
    }
  }

  if(typeof value === 'string'){
    console.log(value.toUpperCase())
  }

  if(typeof value === 'number'){
    console.log(value.toFixed(0))
  }
}
processDataWithUnlnown(valueUnkenown);
