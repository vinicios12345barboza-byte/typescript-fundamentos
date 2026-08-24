export const bootstrap = (): void => {
  const x = 'oi';
  console.log('string:', typeof x);
  console.log('number:', typeof 123);
  console.log('bigint:', typeof 231n);
  console.log('symbol:', typeof Symbol('teste'));
  console.log('undefined:', typeof undefined);
  console.log('object:', typeof {});
  console.log('array (object):', typeof [])
  console.log('null (object):', typeof null)
  console.log('function:', typeof function(){})
};
