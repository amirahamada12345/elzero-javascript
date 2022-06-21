"use strict"
//task1
// let setOfNumbers= new Set([10]);
// setOfNumbers.add(20).add(2);
// console.log([...setOfNumbers].pop());
//*************************** task2************************* */
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// let friend=new Set(myFriends.sort());
// console.log(friend);

 //['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
//*************************** task3************************* */
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };
  
   let map = new Map(Object.entries(myInfo));
    console.log(map);
  console.log(map.size);
  console.log(map.has("role"));
//*************************** task4************************* */
let theNumber = 100020003000;
console.log(+[...new Set(theNumber.toString())].sort().slice(1).join(""));

//*************************** task5************************* */
let theName = "Elzero";
 console.log(Array.from(theName));
 console.log([...theName]);
 console.log(theName.split(""));
 console.log(Object.values(theName))
 //console.log(Object.keys(theName))
 console.log(Object.assign([], theName));
 let array = [];
 for (let i of theName){
   array.push(i)
 }
// Needed Output
['E', 'l', 'z', 'e', 'r', 'o']
//*************************** task7************************* */
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
let three=[...numsOne,...numsTwo]
console.log(three);
// Needed Output
[1, 2, 3, 4, 5, 6]
//*************************** task6************************* */
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
let first=chars.copyWithin(3,0,5);
console.log(first);

//*************************** task8 challenge************************* */
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

let n3=[...n1,...n2];
let set=new Set(n3);
console.log(  Array.from(set).pop() * Array.from(set).shift() + Array.from(set).shift());
// Needed Output
210