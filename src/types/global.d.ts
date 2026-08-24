interface PersonalInfo {
    /*
    * Nome completo
    */
  fullname: string;
  email: string;
  dateOfBirth?: Date;
  sumary?: string;
}
/** 
* interface utilizada para criação de curriculos
*/
interface Resume extends PersonalInfo, Theme {
  skills: Skill[];
  addSkill: (skill: Skill) => boolean;
}

interface Skill {
  name: string;
  level: 'junior' | 'pleno' | 'senior';
}

interface Theme {
  font: Font;
  colorScheme: ColorScheme;
  layout: Layout;
}
