'use strict'
let adminds=['Ahmed','Osama','Sayed','Stop','Samira'];
let employee=['Amgad','Samah','Ameer','Omar','Osamn','Amany','Samia'];
let count=0;
for(let i=0;i<adminds.length;i++){
count+=1;
if(adminds[i]==='stop')
break;
   
}

document.write(`<div>we have ${count} admins</div>`);
document.write(`<div>the admin for team ${[i+1]} is ${adminds[i]} </div>`);
// for(let j=0; j<employee.length;j++){

//     if(adminds.startsWith('A')||adminds.startsWith('O')||adminds.startsWith('S'))
// document.write(`<h3>the teams members${employee[j]}}</h3>`);

// }


