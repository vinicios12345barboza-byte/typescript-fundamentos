export const bootstrap = (): void => {
  type Person = {
    name: string;
    age: number;
  };

  type Dev = {
    linguagem: string;
    cargo: 'fullstack' | 'backend';
  };

  type DevSenior = Person & Dev;

  const dev: DevSenior = {
    name: 'vinicios',
    age: 23,
    linguagem: 'Java',
    cargo: 'backend',
  };
  console.log(dev)
};
