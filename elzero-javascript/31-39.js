//from31-32
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 || 10 > 20); // true
console.log(-10 == "-10"); // true
console.log(!(-50 == +"-40")); // true
console.log(!(10 > -"-40")); // true
console.log(+"10" == 10); // true
console.log(!(20 == false)); // true

//task2
let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num2 > num1); // true
console.log(num1 != num2); // true
console.log(num1 >= true); // true
console.log(true <= num2); // true
console.log(!num2 == !num1); // true

//task3
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a != b); // true
console.log(a != b && a > c); // true
console.log(!(a > b) && !(a == b) && !(a < c) && !(a == c)); // true
//from 33=37
let numOne = 9;
// "009"
if (numOne < 10) {
    console.log(`00${ numOne}`);
}
// Test Case 2
let numTwo = 20;
if (numTwo > 10 && numTwo < 100) {
    console.log(`0${ numTwo }`);
}
let numThree = 110;
if (numThree >= 100) {
    console.log(`${numThree}`);
}

//task2
let num = 9;
let str = "9";
let str2 = "20";
if (num == str) {
    console.log(` ${ num} Is The Same Value As ${ str}`);

}

if (num == str && typeof num != typeof str) {
    console.log(`  ${ num} Is The Same Value As ${ str} But Not The Same Type`);

}
if (num != str2 && typeof num != typeof str2) {
    console.log(` ${ num} Is Not The Same Value Or The Same Type As  ${ str}`);
}
//task3
let n1 = 10;
let n2 = 30;
let n3 = "30";

// if(n3>n1&&  n3 !==  n2){
//     console.log(`  ${ n3} Is Larger Than${ n1} And Not The Same Type As ${ n2}`);

// }
// else if(n3>n1 && n3==n2 && typeof n3 !== typeof n2){
//     console.log(`"${ n3} Is Larger Than ${ n1} And Value Is The Same As ${ n3} And Type string Not The Same Type As number`);

// }





if (n3 > n1 && n3 !== n2) {
    console.log(`${ n3} Is Larger Than ${ n1} And Not The Same Type As ${ n2}`)
}
if (n3 > n1 && n3 == n2 && n3 !== n2) {
    console.log(`${ n3} Is Larger Than ${ n1} And Value Is The Same As ${ n2} And Type Is Not The Same As ${ n2}`)
} else(n3 !== n1 && n3 !== n2)
 {
    console.log(`${ n3} Value And Type Is Not The Same As ${ n1} And Type Is Not The Same As ${ n1}`)
}
//ttask4

// Edit What You Want Here

let nu1 = "15";
let nu2 = 10;
let nu3 = "15";
let nu4 = "20";


// Condition 1

if (nu1 > nu2) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (nu1 > nu2 && nu1 < nu4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (nu1 > nu2 && nu1 === nu3) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4

if ((nu1 + nu2) < nu4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((nu1 + nu3) < nu4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((nu1 + nu2 + nu3) < nu4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (-nu4 - (-nu1 + -nu3) + nu2 === 21) {
    console.log("True");
} else {
    console.log("False");
}
//challeng 
//task1


let st = "Elzero Web School";

// if ( st.length === "34") { error
//     console.log("Good");
//   }

if (st.charAt(st.indexOf("W")).toLocaleLowerCase() === "w") {
    console.log("Good");
}

if (typeof st.length !== "string") {
    console.log("Good");
}
if (typeof st.length === "number") {
    console.log("Good");
}

if (st.split(' ', 1).toString().repeat(2) === "ElzeroElzero") {
    console.log("Good");
}
if (st.slice(0, 6, 5).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}
//

let aa = 10;

if (aa < 10) {
    console.log(10);
} else if (aa >= 10 && aa <= 40) {
    console.log("10 to 40");
} else if (aa > 40) {
    console.log("> 40");
} else {
    console.log("UnKnown");
}
aa < 10 ?
    console.log(10) :
    aa >= 10 && aa <= 40 ?
    console.log("10 to 40") :
    aa > 40 ?
    console.log("> 40") :
    console.log("UnKnown");
//if challenge
let job = "Manager";
let salary = 0;
switch (job) {
    case 'Manager':
        salary = 8000;
        console.log(`salary=${salary}`);
        break;
    case 'IT':
    case 'Support':
        salary = 6000;
        console.log(`salary=${salary}`);
        break;

    case 'Developer':
    case 'Designer':
        salary = 7000;
        console.log(`salary=${salary}`);
        break;
    default:
        salary = 4000;
        console.log(`salary=${salary}`);
        break;
    }
//r=task2
let holidays = 0;
let money = 0;
if(holidays==0){
    money = 5000;
    console.log(`My Money is ${money}`);
}
else if(holidays==1||holidays==2){
    money = 3000;
    console.log(`My Money is ${money}`);
}
else if(holidays==3){
    money = 2000;
    console.log(`My Money is ${money}`);
}
else if(holidays==4){
    money = 1000;
    console.log(`My Money is ${money}`);

}
else if(holidays==5){
    money = 0;
    console.log(`My Money is ${money}`);

}
else{
    money = 0;
    console.log(`My Money is ${money}`);
}

//38-39
let day = "     Tuesday    ";//default value
let day_updated = day.trim().charAt(0).toUpperCase() + day.trim().slice(1);//دي معناها خود من بعد الاندكس صفر وكمل باقي الكلمه بتاعه اليوم

switch (day_updated ) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log(`No Appointments Available `);
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
}
