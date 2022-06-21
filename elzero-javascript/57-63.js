//task1
function sayHello(theName, theGender) {
    if(theGender==="Male"){
        console.log(`Hello Mr ${theName}`);
    }
    else if(theGender==="Female"){
        console.log(`Hello Miss ${theName}`);
    }

    else{
        console.log(`Hello ${theName}`);
    }
  
}


 sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
//task2
function calculate(firstNum='', secondNum='', operation=' ') {
 if(operation==='add'){
     console.log(firstNum+secondNum);
 }
 else if(operation==='subtract'){
    console.log(firstNum-secondNum); 
 }
 else if(operation==='multiply'){
    console.log(firstNum*secondNum); 
 }
 else if( firstNum==='' || secondNum===''){
    console.log(`${firstNum} second  not found`); 
 }
 else{
    console.log(firstNum+secondNum); 
 
  }
}

  // Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

//task3
function ageInTime(theAge) {
  if(theAge>10&&theAge<100){
    console.log(`my age by month ${theAge*12}`);
    console.log(`my age by week ${theAge*12*4}`);
    console.log(`my age by day ${theAge*12*30}`);
    console.log(`my age by hours ${theAge*12*30*24}`);
    console.log(`my age by minutes ${theAge*12*30*24*60}`);
    console.log(`my age by seconds ${theAge*12*30*24*60*60}`);

  }
  else{
      console.log('Age Out Of Range');
  }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months

  //task6 impor
  function multiply(...numbers){
      let result=1;
      for(let i=0;i<numbers.length;i++){
        if(typeof numbers[i]==="string"){

            continue;
        }
        else {
            result *= Math.trunc(numbers[i]);//trunc return integer number
          }

      }
      return result;
  }
  console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000
//task5
function createSelectBox(startYear, endYear) {
   document.write("<div>");
   document.write("<select>")
for(let i=startYear;i<=endYear;i++){
    document.write("<option>")
document.write(i);
    document.write("</option>");
}
   document.write("</select>");

   document.write("</div>");
   
  }
  createSelectBox(2000, 2021);
  //task5 challenge
  function checkStatus(a, b, c) {
    let str, num, bol;
    typeof a === "string"
      ? (str = a)
      : typeof b === "string"
      ? (str = b)
      : (str = c);
    typeof a === "number"
      ? (num = a)
      : typeof b === "number"
      ? (num = b)
      : (num = c);
    typeof a === "boolean"
      ? (bol = a)
      : typeof b === "boolean"
      ? (bol = b)
      : (bol = c);
      bol === false ? bol = "Are Not": bol = "Are" 
    console.log(
      `Hello ${str}, Your Age Is ${num}, You ${bol} Available For Hire`
    );
  }

  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
  let arr=[1,3,5,8];
//   console.log(arr.slice(1,3)); 
//   console.log(arr);
//   console.log(arr.splice(1,3)); 
//    console.log(arr);