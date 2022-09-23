class Dog {
    age!: number;
    color!: string;
    }

const chiwawa = new Dog();

chiwawa.age = 10;
chiwawa.color = 'brown';

console.log(chiwawa);

//generating class with constructor

class Employee {
    name: string;
    protected age : number;
    #gender : string;
    

    constructor(name : string, age : number, gender : string){
        this.name = name;
        this.age = age;
        this.#gender = gender;
    }

    getGender() {
        return this.#gender;
    }

    setGender(genderInfo : string) {
        this.#gender = genderInfo;
    }

    description() : string {
        
        
        return `${this.name} is ${this.age} year old ${this.#gender}`
    }

    static fireEmployee() : string {
        return `${this.name} is fired !!!!`
    }
}




let worker1 = new Employee('Kev Kim',34, 'male');
worker1.setGender('men');

console.log('after setGender method...');

console.log(worker1);

let worker1Description = worker1.description()
console.log(worker1Description);

Employee.fireEmployee();



///////////// inheritance and protected variable
class Manager extends Employee {

#salary : number;
#password : number;

    constructor(salary:number, password:number, name:string, age:number, gender: string){
        super(name, age, gender)
        this.#salary = salary;
        this.#password = password;
    }

    describe() : string {
        return `${this.name} makes $${this.#salary} an year and her age is ${this.age}`
    }

    
}

let fary = new Manager(1000000, 1234, 'fary', 34, 'female')

//fary.describe

let faryDescription = fary.describe()

console.log(faryDescription);










