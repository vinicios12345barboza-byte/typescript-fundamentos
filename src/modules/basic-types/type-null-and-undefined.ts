export const bootstrap = (): void => {
  // null
  let title = null;
  console.log('title: ', title);
  console.log('Title (if):', title ? 'verdadeiro' : 'falso');
  console.log('Tipo null:', typeof null); // bug => retorna um object

  // undefined
  let subtitle = undefined;
  console.log('subtitle (if): ', subtitle ? 'verdadeiro' : 'falso');
  console.log('Tipo undefined:', typeof undefined);

  type Perfil = {
    name: string;
    bio?: string;
  };

  const exibirBio = (perfil: Perfil): void =>{
    const bio = perfil.bio?.trim() ?? 'Bio não definida'
    console.log(`${perfil.name}: ${bio} `)
  }

  exibirBio({name: 'vinicios', bio: 'Olá, mundo'})
};
