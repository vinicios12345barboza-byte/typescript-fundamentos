export const bootstrap = (): void => {
  const subtitle = document.getElementById('subtitle')!;

  subtitle.style.color = 'red';

  /*
  if(subtitle){
    subtitle?.style.color = "green"
  }
 */

  const getProducts = (): string[] | null => {
    return ['Iphone', 'Hedset'];
    // return null
  };
  // define que a atribuição não será de um valor null ou undefined
  const products = getProducts()!;

  products.map((i) => console.log(i));
};
