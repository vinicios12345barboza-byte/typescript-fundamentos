/*
const file = {
  name: 'lista_de_funcionarios.txt',
  size: 2323,
  
} as const;
*/

type File = {
  readonly name: string;
  size: number;
};

const file: File = {
  name: 'lista_de_funcionarios.txt',
  size: 2323,
};

// file.name = 'lista_de_dependentes.txt';

export function handleFileUpload(file: File) {
  console.log(`Nome: ${file.name}, 
    Tamanho: ${file.size}`);
}

handleFileUpload(file);
