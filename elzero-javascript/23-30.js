// Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// Your Solutions
// console.log(10e4); // 100000
// console.log(10**5); // 100000
// console.log(50_000 + 50_000); // 100000
// console.log(150_000 -50_000 ); // 100000
// console.log(100*1000); // 100000
// console.log(Math.pow(10,5)); // 100000
// console.log(parseInt("100000")); // 100000
// console.log(Math.round(99999.6)); // 100000
// console.log(Math.trunc(100000.5)); // 100000
// console.log(Math.max(4004,38388,100000)); // 100000
//task2
console.log((Number.MIN_SAFE_INTEGER/-1)); // 9007199254740991
//TASK3
console.log((Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER) + (true + true + true) * (true + true + true + true + true));
//TASK4
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Math.trunc(parseInt(myVar))); // 100
console.log(Number(parseFloat(myVar).toFixed(2))) // 100.57
//task5
let num = 10;

console.log(  Number.isInteger(num)+true); // 2
//task6
let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Number(flt.toFixed())); // 10
//task7
console.log(Math.floor(Math.random() * 5)) // 0 || 1 || 2 || 3 || 4
//challenge
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
// Find Smallest Number In All Variables And Return Integer
console.log(Number(Math.min(a,b,c,d).toFixed())); // 2
// Use Variables a + d One Time To Get The Needed Output
console.log(a ** Math.trunc(d)); // 10000 
// Get Integer "2" From d Variable With 4 Methods
console.log(Number(d.toFixed())); // 2
console.log(Math.round(d)); // 2
console.log(Math.floor(d)); // 2
console.log(parseInt(d)); // 2
// Use Variables b + d To Get This Valus
// console.log(Math.ceil(d));
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(b) / Math.ceil(d)); // 67 => Number

//from 27-30

//task1
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase().repeat(3)); // eee

//TASK2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toLocaleUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
//String Manipulation challenge 27-30
let st = "Elzero Web School";
// Include This Method In Your Solution [slice, charAt]
console.log(st.slice(2,6).charAt(0).toLocaleUpperCase()+st.slice(3,6)); // Zero 3-6 to add ero
console.log(st.slice(13,14).repeat(8).toLocaleUpperCase()); // HHHHHHHH
// Return Array
console.log(st.split(" ",1)); // ["Elzero"]
// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${st.substr(0,6)} ${st.substr(11,17)}`); // Elzero School
// Solution Must Be Dynamic Because String May Changes
console.log(`${st.charAt(0).toLocaleLowerCase()}${st.substr(1,15).toLocaleUpperCase()}${st.charAt(st.length-1).toLocaleLowerCase()}`); // eLZERO WEB SCHOOl


