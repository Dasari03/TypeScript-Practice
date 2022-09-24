import { createInferTypeNode } from "typescript";


 export interface User {
    name: string,
    age?: number,
    email: string,
    city: string
}

class Visitor {

    gender: string;
    yrEmployed : number;
    user : User;
    
    constructor(gender:string, yrEmployed:number, user: User){
        this.gender = gender,
        this.yrEmployed = yrEmployed;
        this.user = user;
    }

    visitorInfo() : string {
        return `Gender is ${this.gender} and year of employment is ${this.yrEmployed} and the visitor lives in the city of ${this.user.city}`
    }
}

let visitor1 = new Visitor('male', 1, {
    name: 'kevin',
    email: 'dasari03@hotmail.com',
    city: 'Santa Rosa'
})

console.log(visitor1.visitorInfo());

interface extraUser extends User {
    phoneNumber : number;
}

// let extraVisitor1 : extraUser= {name: 'kevin', email: 'dasari03@hotmail.com', city:'Santa Rosa',
//  phoneNumber : 2133427324}

 let {name, email} : extraUser= {name: 'kevin', email: 'dasari03@hotmail.com', city:'Santa Rosa',
 phoneNumber : 2133427324}

 console.log('///////// Object destructuring/////////');
 console.log(name, email);
 
 //Array Destructuring
 const [user1, user2, user3] : User[] = [
     {name: 'kev', email: "34", city:"1"} ,
     {name: 'kev1', email: "35", city:"2"},
     {name: 'kev2', email: "36", city:"3"}
 ]
 console.log('///////Array destructuring////////////');
 console.log(user1, user2, user3);
 

 




 

