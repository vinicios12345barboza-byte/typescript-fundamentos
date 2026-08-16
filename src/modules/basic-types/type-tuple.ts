let filmArray: (number | string | boolean)[] = [1, 'Invocação do Mal', true];
let filmTuple: [number, string, boolean] = [2, 'A Freira 2', false];

let filmTupleOpcional: [number, string, boolean?] = [3, 'A maldição da chorona', true];
//
const [idArr, titleArr, availableArr] = filmArray;
const [id, title, available] = filmTuple;

console.log(id)