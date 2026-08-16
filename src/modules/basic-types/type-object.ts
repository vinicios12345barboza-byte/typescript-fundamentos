let programmer = {
    name: "vinicios",
    age: 19, 
    skills: ['JavaScript', 'TypeScript', 'NodeJS']
}

programmer.name = "vini"
programmer.age  = 20

export function showProgrammer(programmer: {name: string, age: number, skills?: string[]} ){
    console.log(programmer)

}

showProgrammer(programmer)
showProgrammer({name: "viniciosDev", age: 23})
