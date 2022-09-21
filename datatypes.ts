let lastName = 'kim';

// lastName = 34;

let fName : string;

fName = 'kevin';

let sampleBoolean = fName.endsWith('n')

console.log(sampleBoolean);

let someType : number = 12;

console.log(someType);

let arrayOne : Array<number>;

arrayOne = [1, 11, 3, 4, 5, 100, 95,-10,0];

let arrayTwo : string[];

arrayTwo = ['12', 'kim']

//console.log(arrayOne);

let resultOne = arrayOne.filter((num)=>num < 500);
console.log(resultOne);

let resultOneOne = arrayOne.find((num)=> num === 4);
console.log(resultOneOne);

let resultOneTwo = arrayOne.reduce((acc, num)=> acc + num)
console.log(resultOneTwo);

enum Players {
    SON = 'Korean', KANE ='British', LUKAS='Brazilian'
}

console.log(Players.SON);

let sampleTuple : [string, string];

let sampleTuple1 : Array<string> = ['kim', 'jalili'];
let sampleTyple2 : string[] = ['JALILI', 'KIM'];

function swapMethod(player1:string, player2:string) : [string, string] {
    return [player2, player1];
}

 sampleTuple = swapMethod('neymar', 'mbape')

 console.log(sampleTuple);





