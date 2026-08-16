type Salary = number | string;
type Cargo = 'Frontend' | 'Backend' | 'Fullstack' | 'DevOps' | string;
type Empresa = string;
type Programmer = {
  name: string;
  age: number;
  skills?: string[];
  contact: {
    email: string;
    phone: string;
  };
  nivel: 'junior' | 'pleno' | 'senior';
  salary?: Salary;
  cargo: Cargo;
  empresa: Empresa;
};

export function showProgrammer(programmer: Programmer): void {
  console.log(
    `O usuário ${programmer.name} tem ${programmer.age} anos. CONTATOS: ${programmer.contact.email && programmer.contact.phone}, cargo: ${programmer.cargo} do nivel: ${programmer.nivel} `,
  );
}

showProgrammer({
  name: 'Vinicios',
  age: 20,
  skills: ['JavaScript', 'TypeScript', 'NodeJS', 'Java'],
  contact: { email: 'vinicios@gmail.com', phone: '21988946527' },
  nivel: 'junior',
  cargo: 'Backend',
  salary: 'R$ 3.500,00',
  empresa: 'Tech Solutions',
});

showProgrammer({
  name: 'Sarah',
  age: 19,
  skills: ['Canva', 'Adobe Photoshop', 'Adobe Illustrator'],
  contact: { email: 'sarah@gmail.com', phone: '21988946527' },
  nivel: 'junior',
  cargo: 'Designer',
  salary: 'R$ 2.000,00',
  empresa: 'Design Studio',
});
