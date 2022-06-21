// 'use strict'
// // function SHowinfo(user='UNKON',age=22,rate=0,show='yes', ...skills){
// // document.write(`<div>`);
// // document.write(`<P>welcome${user}</p> `);
// // document.write(`<P>age${age}</p> `);
// // document.write(`<P>hour rate${rate}</p> `);
// // if(show==='yes'){
// //     if(skills.length>0){
// //         document.write(`<p> skills:skill${skills.join('|')}</p>`)
// //     }
// //     else{
// //         document.write(`<p> skills:no skills</p>`)
// //     }

// // }
// // else{
// //     document.write(`<p> skills:skills is hidden</p>`)  
// // }
// // document.write(`</div>`);

// // }
// // SHowinfo('osama',23,22,'yes','hml','css');
// function showDetails(a, b, c) {
//     document.write("<div>");

//       c === true ? 
//           typeof(a) == "string" && typeof b == "number" ? // s n t
//               document.write(`<p>Hello ${a}, your age is ${b}, you are available for hire</p>`)
//           : typeof(b) == "string" && typeof a == "number" ? // n s t
//               document.write(`<p>Hello ${b}, your age is ${a}, you are available for hire</p>`)
//           : null
//       :
//           typeof(a) == "string" && typeof b == "number" ? // s n f
//               document.write(`<p>Hello ${a}, your age is ${b}, you are NOT available for hire</p>`)
//           : typeof(b) == "string" && typeof a == "number" ? // n s f
//               document.write(`<p>Hello ${b}, your age is ${a}, you are NOT available for hire</p>`)
//           : null;



//       b === true ?
//           typeof(a) == "string" && typeof c == "number" ? // s t n
//               document.write(`<p>Hello ${a}, your age is ${c}, you are available for hire</p>`)
//           : typeof(c) == "string" && typeof a == "number" ? // n t s
//               document.write(`<p>Hello ${c}, your age is ${a}, you are available for hire</p>`)
//           : null
//       :
//           typeof(a) == "string" && typeof c == "number" ? // s f n
//               document.write(`<p>Hello ${a}, your age is ${c}, you are NOT available for hire</p>`)
//           : typeof(c) == "string" && typeof a == "number" ? // n f s
//               document.write(`<p>Hello ${c}, your age is ${a}, you are NOT available for hire</p>`)
//           : null ;



//       a === true ?
//           typeof(c) == "string" && typeof b == "number" ? // t n s
//               document.write(`<p>Hello ${c}, your age is ${b}, you are available for hire</p>`)
//           : typeof(b) == "string" && typeof c == "number" ? // t s n 
//               document.write(`<p>Hello ${b}, your age is ${c}, you are available for hire</p>`)
//           : null
//       :
//           typeof(c) == "string" && typeof b == "number" ? // f n s
//               document.write(`<p>Hello ${c}, your age is ${b}, you are NOT available for hire</p>`)
//           : typeof(b) == "string" && typeof c == "number" ? // f s n
//               document.write(`<p>Hello ${b}, your age is ${c}, you are NOT available for hire</p>`)
//           :null ;

//     document.write("</div>");
//   }

//   showDetails("rami", 34, true);
//   showDetails(34, "rami", true);
//   showDetails(true, 34, "rami");
//   showDetails(false, "rami", 34);

// function sayHello(theName, theGender) {
//     if(theGender=='male'){
//         document.writeln(`hello Mr ,${theName} <br>`);
//     }
//     else if(theGender=='female'){
//         document.writeln(`hello MiSS ,${theName} <br>`)
//     }
//     else{
//         document.writeln(`hello ,${theName} <br>`)
//     }


//   }

//   // Needed Output
//   sayHello("Osama", "male"); // "Hello Mr Osama"
//   sayHello("amira", "female"); // "Hello Mr Osama"
//   sayHello("Eman", "female"); // "Hello Miss Eman"
//   sayHello("Sameh"); // "Hello Sameh

//   function calculate(firstNum, secondNum, operation) {
//          if (firstNum === undefined || secondNum === undefined)
//     document.write(`Second Number Not Found`);
// switch(operation){
 
//     case 'add':
//        document.write(firstNum+secondNum) ;
//        document.write('<br>') ;
//        break;
//        case 'subtract':
//         document.write(firstNum-secondNum) ;
//         document.write('<br>') ;
//         break;
//         case 'multiply':
//             document.write(firstNum*secondNum) ;
//             document.write('<br>') ;
//             break;
//             default:
//                 document.write(firstNum+secondNum) ;
//                 document.write('<br>') ;
// }
//   }
//   // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600

// function ageInTime(theAge) {
//   if((theAge>10)&&(theAge<100)){
//       let ageMonth=theAge*12;
//       let ageWeek=theAge*12*4;
//       let ageday=theAge*12*4*7;
//     document.write(`${ageMonth} Months<br> ${ageWeek} weeks <br>${ageday} days<br>`);
//   }
//   else{
//       document.write('age out of range<br>');
//   }
//   }

//   // Needed Output
//   ageInTime(110); // Age Out Of Range
//   ageInTime(38); // Months Example => 456 Months
//   ageInTime(11);
//mera
// function multiply(...numbers) {
//     let result = 1;
//     for (let i = 0; i < numbers.length; i++) {
//         if (typeof numbers[i]==="string") 
//             continue;
//             // else if(typeof numbers[i] === "float" )//ليه بيطلع ايروو لما بستحدم else if
//             // result*= parseInt(numbers[i]);
//             result*= Math.floor(numbers[i]);
           

//     }
//     document.write(`${result} <br>`);
// };
// multiply(10, 20); // 200
//  multiply("A", 10, 30); // 300
//  multiply(100.5, 10, "B"); // 1000
//  multiply(10.4, 10, "B");


// function multiply(...num) {
//     let result = 1;
//     for (let i = 0; i < num.length; i++) {
//       if (typeof num[i] === "string") continue;
//       result *= Math.trunc(num[i]);
//     }
//     document.write(`${result} <br>`);
//   }
//   multiply(10, 20); // 200
//   multiply("A", 10, 30); // 300
//   multiply(100.5, 10, "B"); // 1000

// function createSelectBox(startYear, endYear) {
//     document.write(`<select> `)
//    for(let i=startYear;i<endYear;i++){
      
       
//       document.write(` <option value=${i}> ${i} <br></option> <br>`);
 
//    }
//    document.write(`</select>`)
//   }
//   createSelectBox(2000, 2021);
//from code ben
function calculate(firstNum, secondNum, operation) {
    if (firstNum === undefined || secondNum === undefined)
      console.log(`Second Number Not Found`);
    else if (operation === "multiply") console.log(firstNum * secondNum);
    else if (operation === "subtract") console.log(firstNum - secondNum);
    else console.log(firstNum + secondNum);
  }
  
  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, "add"); // 50
  calculate(20, 30, "subtract"); // -10
  calculate(20, 30, "multiply"); // 600
  
  