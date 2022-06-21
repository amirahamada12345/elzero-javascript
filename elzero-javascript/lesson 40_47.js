//Array Methods Challenge
// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// console.log(my);
// console.log(my.slice(0,my.length-2).reverse());//["Osama", "Elham", "Mazero", "Ahmed"]; 
// console.log(my.slice(0,my.length-2).reverse().pop());// ["Elham", "Mazero"] step1
// console.log(my.slice(0,my.length-2).reverse().shift());//step 2
// console.log(my.splice(1,2,0).reverse()); // ["Elham", "Mazero"]








//************************************************************************************************* */
    //tasks تكليفات
//     let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;
// //first way
// console.log(myFriends.slice((myFriends.length-1-3),myFriends.length-1)); // ["Ahmed", "Elham", "Osama"];
// //second way
// console.log(myFriends.splice((myFriends.length-1-3),myFriends.length-1,0)); // ["Ahmed", "Elham", "Osama"];
//******************************************** */
// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here

// console.log(friends); // ["Eman", "Osama"]
// console.log(friends.splice((friends.length)-(friends.length-1),(friends.length-2),0));
// //***************task2 */
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code
// console.log(( finalArr.concat ((arrTwo.pop()),(arrOne.pop()),(arrOne.pop()),(arrOne.pop()),(arrTwo.pop()),(arrTwo.pop()))));
// // console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"];
// //TASK5
// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];
// console.log(haystack.includes("JS"));
// console.log(haystack.indexOf("JS"));//any vvalue mean true except 0
// console.log(haystack.lastIndexOf("JS"));
// Write 3 Solutions

// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];
// console.log((arr2.length-2));
// Your Code Here
//  let x=(arr2.indexOf("F"));
//  console.log(x.pop());
// console.log(allArrs.concat((arr1.pop()),(arr2.pop())).join("")); // fxy
// //task4
// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[2][0][2]+words[2][0][3]+words[2][0][4]+words[2][0][5]); // ZERO