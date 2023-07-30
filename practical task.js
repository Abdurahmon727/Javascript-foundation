
const str = "Hello";
const bool = true;
//1
const result1 = str + bool; 
console.log(result1);

const number = 42;

const result2 = str + number; 
console.log(result2);

const num = 10;

const result3 = num + bool; 
console.log(result3);


//2
const result4 = str * bool; 
console.log(result4);


const result5 = str * number;
console.log(result5);

const result6 = num * bool;
console.log(result6);

//3
const result7 = str / bool; 
console.log(result7);

const result8 = str / number;
console.log(result8);


const result9 = num / bool; 
console.log(result9);


//4
const numFromString = Number(str); 
const numFromBoolean = Number(bool);
console.log(numFromString, numFromBoolean);


const strFromNumber = String(num); 
const strFromBoolean = bool.toString(); 
console.log(strFromNumber, strFromBoolean);

const boolFromNumber = Boolean(num); 
const boolFromString = Boolean(str); 
const boolFromEmptyString = Boolean(""); 
console.log(boolFromNumber, boolFromString, boolFromEmptyString);



