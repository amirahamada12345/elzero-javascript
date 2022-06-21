
//task1

let NumberOne = 10;
let NumberTow = 20;
console.log( typeof NumberOne );
console.log( (NumberOne + "" + NumberTow));
console.log( (typeof(NumberOne + "" + NumberTow)));
console.log(`${NumberOne +""+ NumberTow}`);
console.log(` ${typeof(NumberOne +""+ NumberTow)}`);
console.log(NumberOne + "\n" + NumberTow);
console.log(` ${NumberOne}     
 ${NumberTow}`);

//task2
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

//task3
// console.log("I'm In" + "\n" + "\\\\" + "\n" + "Love \\\\ \"\"\" \' \'\' " + "\n" + "++ With ++" + "\n" + "\\\"\"\" \\\"\"\"" + "\n" + "\"\" JavaScript\"\" \~\~  ");


//TASK4 10-17
let a = 21;
let b = 20;
console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_



//week3 18-22
// console.log(10-'ali');//nan
// console.log((10 * 20 + 15 % 3 + 190 + 10) % 400)
// console.log(10 * 20 + 15 % 3 + 190 + 10 - 400)
//task2
let num = 3;
console.log(num * num - true - true - true) // 6
console.log(num + num) // 6
console.log( num + true +  true +  true ) // 6
console.log(true + true + true + true + true + true ) // 6
console.log(num * num - num) //6
console.log(num * (true + true)) //6
//task3
let num2 = "10";

// Solution One
console.log(+num2  +  +num2); // 20

// Solution Two
console.log(+num2 * (true+true)); // 20

// Solution Three
console.log(  Number(num2) + Number(num2)); // 20

// Solution Four
console.log( Number(num2)* (true+true)); // 20 number
//task4
let points = 10;
console.log(++points + true + true); // 13
console.log(points++ + (true+true)); // 13
console.log(--points - (true+true+true)); // 8;


//36 challenge
// let st = "Elzero Web School";
// if (typeof st === "34") {

//     console.log("good");
// }
// if ("kkkkkk" === "w") {

//     console.log("good");
// }

// if ("kkkkkk" === "string") {

//     console.log("good");
// }

// if ("kkkkkk" === "number") {

//     console.log("good");
// }
// if (typeof st === "ElzeroElzero") {

//     console.log("good");
// }

//challeng 31-39
// let salary = 0;
// let job=prompt("enter the job");
// switch (job) {
//     case "manager":
//         salary = 8000;
//         console.log(salary);
//         break;

//     case "it":
//     case "support":
//         salary = 6000;
//         console.log(salary);
//         break;

//     case "devoloper":
//     case "designer":
//         salary = 7000;
//         console.log(salary);
//         break;
//         default :
//             salary = 4000;
//             console.log(4000); 


// }
// let holidays=prompt("enter the holidays");
// let money =0;
// if(holidays==0){
// money=5000;
// console.log(money);

// }
//  else if(holidays==1 ||holidays==2){
//     money=3000;
//     console.log(money);

//     }

//     else if(holidays==3){
//         money=2000;
//         console.log(money);

//         }
//LESSON 31-32
// console.log(100 == "100"); //true
// console.log(100 != 1000); // true
// console.log(110 !=  100 !=  10 !=  20); // true
// console.log(-10 !== "-10"); // true must be equal in value and datatype
//---------------------dificult------------------------------------
//        console.log(? -50 ? ? +"-40"); // true
// console.log(? 10 ? ? -"-40"); // true
// console.log(? "10" ? ? 10); // true
// console.log(? 20 ? false); // true
//-----------------------------------------------------
// let num1 = 10;
// let num2 = 20;

// console.log(10 != 20); // true
// console.log(10<20); // true
// console.log(20>10); // true
// console.log(20 >= 10); // true
// console.log(10<=20); // true
// console.log(10 !==20); // true
//--------------------------------
//  a = 20;
//  b = 30;
// let c = 10;

// console.log(a < b && a > c || a < b); // true
// console.log(a < b && a > c); // true
// console.log(!(a > b) && !(a == b) && !(a< c) && !(a == c)); // true
//lesson 33-37
// let number = prompt("enter the  number");
// if (number < 10) {
//     console.log(`00${number}`);
// } else if (10 < number && number <100) {
//     console.log(`0${number}`);
// } else if (number >= 100) {
//     console.log(`${number}`);
// }

// let num1 = 9;
// let str = "9";
// let str2 = "20";
// if(num1==str){
//     console.log(`${num1} Is The Same Value As ${str}`);
// }
// if((typeof num1 !=typeof str)&&(num1==str )){
//     console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
// }
// if(num1!==str2){
//     console.log(`${num1} Is Not The Same Value and  not The Same Type As ${str2}`);
// }
// if(str!=str2){
//     console.log(`${str}  not The Same Value As ${str2}`);
// }
// let num1 = "74.5";
// let num2 = 10;
// let num3 = "74.5";
// let num4 = 160;
// if (num1 > num2) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }

//   if (num1 > num2 && num1 < num4) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
//   if (num1 > num2 && num1 === num3) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
//   if ((+num1 + num2) < num4) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
//   if ((+num1 + +num3) < num4) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
//   if ((+num1 + num2 + +num3) < num4) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
//   if (num4 - (+num1 + +num3) + num2 === 21) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
// let text = "     Hello World!     ";
// let result = text.trim();
// console.log(result);
// let day =prompt("enter the day");
// d=day.trim();
//   let d=day.trim()// انا مش ينفع اعرف متغير يحمل نفس القيمه بتاع day
// console.log(day.trim().charAt(0).toUpperCase());//S // بروح في المكان اللي غلط وبطبع قيمه العنصر او الحاجه
// switch (d) {

//     case 'Saturday':
//     case 'Sunday':
//     case 'Friday':
        
//         console.log("No Appointments Available");
//         console.log(d);
//         break;


//     case 'Monday':
//     case 'Thursday':
       
//         console.log("Appointments Available from 10 am to 5 pm");
//         console.log(d);
//         break;

//     case 'Tuesday':
       
//         console.log("Appointments Available from 10 am to 6 pm");
//         console.log(d);
//         break;

//     case 'Wednesday':
        
//         console.log("Appointments Available from 10 am to 7 pm");
//         console.log(d);
//         break;
// default:

//     console.log("Its Not A Valid Day");

// }
// challenge 31-39 number 1
let st = "Elzero Web School W";
// for(let i=0; i<st.length; i++){
// if (st.charAt(i) === "W") {
//     console.log("Good");
//   }

// }

// console.log( st.indexOf("W").charAt(7));
//1
// console.log( typeof st.charAt(7));
if (st.charAt(7) === "W") {
    console.log("Good");
  }

//2
  if (st.length !== "string") {
    console.log("Good");
  }

//3
// console.log( typeof st.indexOf("W"));
if (typeof st.indexOf("W") === "number") {
    console.log("Good");
  }

  //4
//    let x=st.slice(0,6).repeat(2);
//   console.log(x);
  if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
  }