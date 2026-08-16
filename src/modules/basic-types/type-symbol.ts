export const bootstrap = () => {
  /* 
    const title: symbol = Symbol('HOME');
  const pageTitle: symbol = Symbol('HOME');

  if (title === pageTitle) {
    console.log(`SIM, HOME é igual a HOME`);
  }
*/

  const titleSymbol: symbol = Symbol('title');
  const Page = {
    title: 'Home',
    [titleSymbol]: 'Página principal',
  };

  console.log(Page.title);
  console.log(Page[titleSymbol]);

  console.log(Page);
};
