function throwError(message: string): never {
  throw new Error(message);
}

//throwError('Aplicação interrompida. Erro interno!');
console.log('Continuação...');
console.log('Continuação...');
console.log('Continuação...');
// fim do fluxo

function infiniteLoop(): never {
  while(true) {}
}
infiniteLoop();
console.log('Continuação...');
console.log('Continuação...');
console.log('Continuação...');
//fim do fluxo
