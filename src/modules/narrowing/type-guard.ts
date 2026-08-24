export const bootstrap = (): void => {
  const zipCodeMask = (value: string | number): string => {
    // type guard
    if (typeof value === 'number') {
      value = value.toString();
    }
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    return value;
  };

  //const zipCode = zipCodeMask('10000000');
  //console.log(zipCode)

  type Per = {
    name: string;
    age: number;
  };

  const userVerific = (person:string | Per): string => {
    if (typeof person === 'string') {
      return person.toUpperCase();
    }
    return `${person.name.toUpperCase()}  ${person.age.toFixed(2)} `
  };
  const result = userVerific({name: 'alguma coisa', age: 18});
  console.log(result);
};
