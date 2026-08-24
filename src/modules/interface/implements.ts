interface Resume {
  fullname: string;
  email: string;
  skills: Skill[];
  addSkill: (skill: Skill) => boolean;
}

interface Skill {
  name: string;
  level: 'junior' | 'pleno' | 'senior';
}

interface Resume {
  dateOfBirth?: Date;
  sumary?: string;
}

class MyResume implements Resume {
  constructor(
    public fullname: string,
    public email: string,
    public skills: Skill[],
  ) {}
  addSkill(skill: Skill): boolean {
    const initialLength = this.skills.length;
    this.skills.push(skill);
    return this.skills.length > initialLength;
  }
}

const myResume = new MyResume('Vinicios barboza', 'vinicios@.com', []);
myResume.addSkill({ name: 'Node', level: 'junior' });
myResume.addSkill({ name: 'Docker', level: 'senior' });
console.log(myResume);
/*
const myResume: Resume = {
  fullname: 'vinicios',
  email: 'vinicios@.com',
  skills: [
    { name: 'node', level: 'junior' },
    { name: 'java', level: 'senior' },
  ],
};

console.log(myResume);
*/
