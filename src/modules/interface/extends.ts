type Font = 'roboto' | 'open';
type ColorScheme = 'light' | 'dark';
type Layout = 'one-column' | 'two-column';

class MyResume implements Resume {
  constructor(
    public fullname: string,
    public email: string,
    public skills: Skill[],
    public font: Font,
    public colorScheme: ColorScheme,
    public layout: Layout,
  ) {}
  addSkill(skill: Skill): boolean {
    const initialLength = this.skills.length;
    this.skills.push(skill);
    return this.skills.length > initialLength;
  }
}

const myResume = new MyResume(
  'Vinicios barboza',
  'vinicios@.com',
  [],
  'open',
  'dark',
  'one-column',
);
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
