'use strict'
//challeng
//**********************task6,challenge*************************/

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
  ];
let chosen= parseInt(prompt("enter the number")) ;
if(chosen===1){
   
 let [{title,age,available,skills:[,cs]}, , ]=myFriends;
console.log(`${title} `);
console.log(age);
console.log(available?"avilable":"");
console.log(cs);
}
if(chosen===2){
   
    let [,{title,age,available,skills:[,cs]} , ]=myFriends;
   console.log(`${title} `);
   console.log(age);
   console.log(available?"avilable":"");
   console.log(cs);
   }

   if(chosen===3){
   
    let [, ,{title,age,available,skills:[,cs]} ]=myFriends;
   console.log(`${title} `);
   console.log(age);
   console.log(available?"avilable":"");
   console.log(cs);
   }


//*********************task1**************************/
// task1
// let a,e,c,d,f,g,b,h,r;
// let myNumbers = [1, 2, 3, 4, 5];

// // Write Your Destructuring Assignment Here
// [a, , , ,e]=myNumbers;

// console.log(a * e); // 5
//**********************task2*************************/

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

[h,b,c,[d,r,[f,g]]]=mySkills;

console.log(`My Skills: ${h}, ${b}, ${c}, ${d}, ${r}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
//**********************task3*************************/
//task3
// let s,n,m,arr4;
// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];
// arr4=[arr3,arr1,arr2,];
// [[,n,m],[s,,],[,,]]=arr4;


// console.log(`My Best Friends:  ${n}, ${m},${s}`);

// My Best Friends: Shady, Mahmoud, Ahmed
//**********************task4*************************/
// //task4

// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
//   };
  
//   const {age:k,working:w,country:P,hobbies:[h1,,h3]}=member;
// //   h1,h3,P,w;
//   // Write Your Destructuring Assignment Here
  
//   console.log(`My Age Is ${k} And Iam ${w ? "" : "Not"} Working`);
//   // My Age Is 30 And Iam Not Working
  
//   console.log(`I Live in ${P}`);
//   // I Live in Egypt
  
//   console.log(`My Hobbies: ${h1} And ${h3}`);
//   // My Hobbies: Reading And Programming
  
//**********************task5 more important*************************/
  //task5
//   const game = {
//     title: "YS",
//     developer: "Falcom",
//     releases: {
//       "Oath In Felghana": ["USA", "Japan"],
//       "Ark Of Napishtim": {
//         US: "20 USD",
//         JAP: "10 USD",
//       },
//       Origin: "30 USD",
//     },
//   };
  
// const{title:t,developer:fa}=game;
// const{"Oath In Felghana":[us,jp],"Ark Of Napishtim":{p}}=game.releases;
  
//   console.log(`My Favourite Games Style Is ${t} Style`);
//   // My Favourite Games Style Is YS Style
  
//   console.log(`And I Love ${fa} Games`);
//   // And I Love Falcom Games
  
//   console.log(`My Best Release Is o It Released in ${us} & ${jp}`);
//   // My Best Release Is Oath In Felghana It Released in USA & Japan
  
//   console.log(`Although I Love ${p}`);
//   // Although I Love Ark Of Napishtim
  
//   console.log(`${a} Price in USA Is ${u_price}`);
//   // Ark Of Napishtim Price in USA Is 20 USD
  
//   console.log(`${a} Price in USA Is ${j_price}`);
//   // Ark Of Napishtim Price in USA Is 10 USD
  
//   console.log(`Origin Price Is ${or}`);
//   // Origin Price Is 30 USD
//task5 nt solution

  const game = {
    title: "YS",
    developer: "Falcom",

    releases: {
      "Oath In Felghana o": ["USA", "Japan"],
      "Ark Of Napishtim a": {
        US: "20 USD",
        JAP: "10 USD",
      },
                  Origin: "30 USD orig",
    },

  };

let { title: t, developer: d, releases: r } = game;

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

let [o, a, ori] = Object.keys(r);
let [u, j] = Object.values(r[o]);

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
//My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

let [u_price, j_price] = Object.values(r[a]);

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in USA Is ${j_price}`);
// Ark Of Napishtim Price in USA Is 10 USD

let [or] = [Object.values(game.releases.Origin).join("")];
console.log();

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD
