//task4
//علشان هي مصفوفه فبعمل شيك علي كل عنصر فيها
//first solution
// function specialMix(...data) { 
//     let sum = 0;
//     for (let i = 0; i < data.length; i++) {
    
   
//      if (isNaN(parseInt(data[i])) === false) { //false===false here
//             sum += parseInt(data[i]);
       
//     }
   
   
// }
// if(sum===0)  {
//    return "All is strings" ;
// }
// return sum;
// }
//another solution

function specialMix(...data) { 
    let sum = 0;
    for (let i = 0; i < data.length; i++) {

        if (typeof(data[i]) === 'number') { 
            sum += data[i];
            
        }
     
   
        else if (isNaN(parseInt(data[i])) === false) { //false===false here
            sum += parseInt(data[i]);
       
    }
    
}
if(sum===0) {
       return `All is strings`;
     }
    return sum;
}

// console.log(specialMix(10,20,90,50,"50","30am","ss"))


  
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
//task2
let itsMe = () =>
    `Iam A Normal Function`;


console.log(itsMe()); // Iam A Normal Function

urlCreate = (protocol, web, tld) =>
    `${protocol}://www.${web}.${tld}`;


console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
//task3
checker = (zName) =>
    (status) =>
    (salary) =>
    status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;




console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
let a = 3;
console.log(isNaN(a)); //لو رقم بيرجعلي فولس
//*******************task1******************************************* */
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        return `${zName.split(" ")[0]} ${zName.split(" ")[1][0].toUpperCase()}.`;
      // Osama Mohamed => Osama M.
      // Ahmed ali => Ahmed A.
    }
    function ageWithMessage(zAge) {
        return `${zAge.substr(0,2)}`;
      // 38 Is My Age => Your Age Is 38
      // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
        return `${zCountry.substr(0,2).toUpperCase()} `;
      // Egypt => You Live In EG
      // Syria => You Live In SY
    }
    function fullDetails() {
        return `Hello ${namePattern(zName)}, Your Age Is ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`;
    }
    return fullDetails(); // Do Not Edit This
  }
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY