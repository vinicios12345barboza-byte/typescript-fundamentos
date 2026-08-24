interface Resume {
  fullname: string;
  email: string;
  skills: Skill[];
  addSkill?: (skill: Skill) => boolean;
}

interface Skill {
  name: string;
  level: 'junior' | 'pleno' | 'senior';
}

const myResume: Resume = {
  fullname: 'vinicios',
  email: 'vinicios@.com',
  skills: [
    { name: 'node', level: 'junior' },
    { name: 'java', level: 'senior' },
  ],
};

console.log(myResume);
