'use strict'
let swappingCase = 'elZERo';
let swap = swappingCase.split("").map(function (ele) {
    return ele === ele.toUpperCase ? ele.toLowerCase() : ele.toUpperCase();

}).join(""); // جول اللاسترند لمصفوفه فااستخدم اسبلت وبفي الاخر عمل جوين علشان يرجعها لمصفوفه
document.write(`${swap}<br>`);
let invertedNumber = [1, -10, -20, 15, 100, -30];
let inv = invertedNumber.map(function (ele) {
    return -ele;
})
document.write(`${inv}<br>`);
let ignornumber = 'Elz123er4o ';
let ign = ignornumber.split("").map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : '';
}).join("");
document.write(`${ign}<br>`);

let friends = ['ali', 'safa', 'amira', 'faten', 'soha'];

let friendsFilter = friends.filter((ele) => ele.startsWith('a'));
document.write(`${friendsFilter}<br>`);
console.log(friendsFilter);
let numbers = [11, 20, 2, 5, 17, 10];
let evennumber = numbers.filter(ele => ele % 2 == 0 ? ele : '');
document.write(`${evennumber}<br>`);
console.log(evennumber);
let mix = 'A13BS2ZX';
let mi = mix.split("").filter(function (ele) {
    return !isNaN(parseInt(ele));
}).map(ele => ele * ele);
document.write(`${mi}<br><br>`);
let nums = [10, 20, 30, 40];
let add = nums.reduce(function (acc, curr, index, arr) {

    return acc + curr;
})
document.write(`${add}<br><br>`);
let thebiggest = ['mona', 'ali', 'sami', 'amal', 'tahany'];
let res = thebiggest.reduce(function (acc, cur) {
    return acc.length > cur.length ? acc : cur;
});
document.write(`${res}<br>`);
let removechar = ['E', '@', '@', 'L', 'Z', '@', '@', 'E', 'R', '@', 'O'];
// let finalString=removechar.filter(ele=>ele!=='@'?ele:'');
let finalString = removechar.filter(ele => !ele.startsWith('@') ? ele : '').reduce(function (acc, curr) {
    return `${acc}${curr}`; //استخدم التمبلت مكان الجوين علشان يظلع الكلمه كامله
})
document.write(`${finalString}<br>`);
console.log(finalString);
let allList = document.querySelectorAll("ul li");
allList.forEach(function (ele) {
    ele.onclick = function () {
        allList.forEach(function (ele) {

            ele.classList.remove("active");
        });

        this.classList.add("active");
        allDivs.forEach(function (ele) {
            ele.style.display = "none";
        });
    };

});
//------------------------------------challenge
let allDivs = document.querySelectorAll(".content div");
let mystring = "1,2,3,EE,l.z.e,r,o,_,w,e,b,_,s,c,h,o,o,l,2,0,z";
let solution = "";
console.log(solution); //elzero web school
//--------------------------tasks
// let mixTask = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// let task1=mixTask.map((ele)=>{
//     return isNaN(ele)?ele:'';
// }).reduce(function(acc,curr){
// return`${acc}${curr}`;
// });
// document.write(`${task1}<br>`);

// let myString = "EElllzzzzzzzeroo";
// let task2=myString.split("").filter((ele,index)=>
//     myString.indexOf(ele) === index
//     ).join("");

// document.write(`${task2}<br>`);
// // Elzero

let myArray = ["E", "l", "z", ["e", "r"], "o"];
let task3 = myArray.reduce(function (acc, curr) {

    return `${acc}${curr}`;
});
document.write(`${task3}<br>`);
console.log(`${task3}`);
// Elzero
//solution task3 using flat
let myArray2 = ["E", "l", "z", ["e", "r"], "o"];
let task32 = myArray.flat(1).reduce(function (acc, curr) {

    return `${acc}${curr}`;
});
document.write(`${task32}<br>`);
console.log(`${task32}`);
// Elzero


//task4
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// let number = numsAndStrings.filter((ele) => {
//     return !isNaN(parseInt(ele)) ? ele : '';
// }).map(ele => {
//     return -ele;
// });
// document.write(`${number}<br>`);

// [-1, -10, 10, 20, -5, -3]
//task5
// let num= [2, 12, 11, 5, 10, 1, 99];
// let task5=num.reduce(function(acc,curr){
//     return curr%2!=0?curr+acc:acc*curr;
// },1);
// document.write(`${task5}<br>`);

// 500
//code pen task2
// let str = "EElllzzzzzzzeroo";

// const rvDup = str
// 	.split("")
// 	.filter((letter, pos, self) => self.indexOf(letter) === pos)
// 	.join("");

// console.log(rvDup);
//codepen task 3
// <---Q3--->
let amyArray = ["E", "l", "z", ["e", "r"], "o"];

const newArr = amyArray.reduce((acc, cur) => {
	return Array.isArray(cur)
		? acc + cur.reduce((subAcc, subCur) => subAcc + subCur)
		: acc + cur;
}, "");

// ANOTHER SOLUTION
// const newArr = amyArray.reduce((acc, cur) => acc.concat(cur), []).join("");

console.log(`newarr sol2 ${newArr}`);





