export const bootstrap = (): void => {
  const body = document.querySelector('body') as HTMLBodyElement;

  const valorDesconhecido: unknown = 'Aprendendo TS';
  const text = valorDesconhecido as string;

  console.log(text.toUpperCase());


  
 /* type DadosCertos = {
    status: "sucesso";
    dados: string[];
  };

  type DadosIncorretos = {
    status: "erro";
    msg: string;
  };

  type RespostaAPI = DadosCertos | DadosIncorretos;

  function tratarErros(res: RespostaAPI) {
    if (res.status === 'sucesso') {
      console.log(`Dados: ${res.dados}`);
    } else {
      console.log(`Erro: ${res.msg}`);
    }
  }
  tratarErros({status: "sucesso", dados: ["JS", "NODE"]})
  */
};
