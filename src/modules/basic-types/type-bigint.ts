export const bootstrap = (): void => {
  console.log('Int - Max Safe: ', Number.MAX_SAFE_INTEGER);
  console.log('Int - Min Safe: ', Number.MIN_SAFE_INTEGER);

  let bigintNumber: bigint = 9007199254740991n;
  console.log('Atribuição com o sufixo n:', bigintNumber);

  let bigintNumber2: bigint = BigInt('9007199254740991');
  console.log('Atribuição com o construtor BIGINT:', bigintNumber2);
};
