//task1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;


console.log(myFriends.slice(false,myFriends.length-1)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length=num
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
//task2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]
//task3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr.push(arrOne.concat(arrTwo).sort().reverse());

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
//task4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[words.length-1][0].slice(length-4).toUpperCase()); // ZERO mera solution


//task5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
console.log(haystack.includes(needle));
console.log(haystack.indexOf(needle));
console.log(haystack.lastIndexOf(needle));
//another solution
if (needle === haystack[1]){
  console.log("Found")
}

if (haystack.includes("JS")){
  console.log("Found")
}

if (haystack.sort()[0] === "JS"){
  console.log("Found")
}
//task6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

console.log(allArrs.push(arr1.concat(arr2).sort().slice(4).join('').toLowerCase()));

console.log(allArrs.pop()); // fxy

//***************************** */
//Array Methods Challenge
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.slice(zero,my.length-counter+true).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice(my.indexOf("Mazero"),my.indexOf( "Osama")).reverse()); // ["Elham", "Mazero"]
// console.log(my[--counter].slice(zero, counter) + my[--counter].slice(++counter)); // "Elzero"
