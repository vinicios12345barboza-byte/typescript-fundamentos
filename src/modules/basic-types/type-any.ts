export function handleFileUpload(file: any){
    console.log(`Nome: ${file.name}, Tamanho: ${file.size}`)
}
const file = {name: 'lista_de_funcionarios.txt', size: 2323}
handleFileUpload(file)