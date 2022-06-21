'use strict'
// let myset=new Set([10]);
// myset.add(20).add(2);
// console.log(myset);
// myset.forEach(element => {
//     if(element===2)
//     console.log(element);
// });
// //another solution task1
// let setOfNumbers = new Set([10]);

// setOfNumbers.add(20).add(setOfNumbers.size)

// console.log(setOfNumbers)

// console.log([...setOfNumbers].pop())
//***********************************************task2 */
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// console.log(Array.from(new Set(myFriends)).sort())
// Needed Output
//(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
//***********************************************task3 */
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };
  
  // Needed Output
 // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
 // 3
 // true
// let res=myInfo.map(ele=>ele);
// console.log(res);
//***********************************************task4 */
let theNumber = 100020003000;


// Needed Output
//123

//******************************task5 */
// let theName = "Elzero";
// let res1=[...theName];
// console.log(res1);
// let res2=Array.from(theName);
// console.log(res2);
// let res3=theName.split('');
// console.log(res3);
// let res4=Object.assign([], theName);
// console.log(res4);
// let res5=Array.prototype.map.call(theName, eachLetter => eachLetter);
// console.log(res5);
// // Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
//******************************task7 */
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
let numthree1=[...numsOne,...numsTwo];
console.log(numthree1);
let numthree2=numsOne.concat(numsTwo);
console.log(numthree2);
let numthree3= [].concat(numsOne, numsTwo);

console.log(numthree3);
let numthree4= numsOne.push(...numsTwo);

console.log(numsOne);

// let numthree5= merge([1,2,3], [4,5,6]);

// console.log(numthree5);
//******************************task8 */

