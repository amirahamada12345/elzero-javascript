//task1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let arr=mix.map(function(ele){

    return  typeof ele==="number"?' ':ele
}).join('');
console.log(arr);

// Elzero
//task2
let myString = "EElllzzzzzzzeroo";//الفلترر بترجع الحاجه مره واحده يعني مش هترجع الeمره ثانيه
let arr2=myString.split('').filter(function(ele,index,arr){//arr===mystring
    return arr.indexOf(ele)===index
}).join(" ");
console.log(arr2);
// Elzero
//task3************************************************
// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let arr3=myArray.reduce(function(acc,curr,index,arr){
// return (arr.slice(0,3).concat(arr[3].slice(0,2),arr.slice(4,5)))

// }).join('')
// console.log(arr3);


//solution3

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let concat = myArray.reduce(function(acc, cur){
  return acc.concat(Array.isArray(cur) ? cur.join("") : cur) 
})

console.log(concat)
// Elzero
// let myArray2 = ["E", "l", "z", ["e", "r"], "o"];
// let task32 = myArray2.flat(1).reduce(function (acc, curr) {

//     return `${acc}${curr}`;
// });
// document.write(`${task32}<br>`);
// console.log(`${task32}`);

// Elzero************************************************************
//التكليف 04
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let arr4=numsAndStrings.filter(function(ele){
return typeof ele!=="string"
}).map(function(ele){
return -ele;
})
console.log(arr4)
// [-1, -10, 10, 20, -5, -3]
//task5
let nums = [2, 12, 11, 5, 10, 1, 99];
let arr5=nums.reduce(function(acc,curr){
if(curr%2==0){
    return acc*curr
}
else
return acc+curr

},1)
console.log(arr5)
// 500

//challenge
let myStr = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myStr
  .split(",")
  .filter((el) => isNaN(el))
  .map((el) =>
    el === "_"
      ? " "
      : el === myStr[myStr.length - true]
      ? ""
      : el[el.length - el.length] // 1-1 = 0 2-2 =0  
  ).reduce((acc , cur) =>  `${acc}${cur}`  )

console.log(solution); // Elzero Web School