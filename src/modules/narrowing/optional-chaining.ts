export const bootstrap = (): void => {
  let title: HTMLElement | undefined;
  const subtitle = document.getElementById('subtitle');

  //leitura segura
  console.log('title:', title?.innerText);
  console.log('subtitle:', subtitle?.innerText);
  console.log('subtitle:', subtitle?.style.color);

  //atribuição de valor
  if (subtitle) {
    subtitle.style.color = 'blue';
  }

  type Users = {
    name: string;
    endereco?: {
      city: string;
    };
  };

  const user1: Users = {
    name: 'vinicios',
    endereco: {
      city: 'rua gama',
    },
  };

  console.log(user1.endereco?.city ?? 'Endereço não encontrado');
};
