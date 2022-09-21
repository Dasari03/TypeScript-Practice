//regular function
//optional parameter
function sum(num1:number, num2:number, num3?:number):number{
return num3? num1 + num2 + num3 : num1 + num2;
}

console.log(sum(100,101, 90000001));

//regular function another
//required parameter
const multip = function(num1:number, num2:number, num3 = 999):number{
    return num1 * num2*num3;
}

console.log(multip(12,33));


//arrow function

const sub = (num1:number, num2:number) : number => num1 - num2;

console.log(sub(201, 87));

const sum41 = (num1:number, num2:number, ...rest:number[]) : number => {
    return num1 + num2 + rest.reduce((a,b)=> a+b);
}

console.log(sum41(100,100, 22,33,44,55));

function concatArray<T>(items: T[]) : T[]{
    return new Array<T>().concat(items);
}



console.log(concatArray([11,22,33,44]));

function myGenericTSFunction<Type>(items: Type[]) : Type {
    return items[0];
}

console.log(myGenericTSFunction([27,13,7,999]));

