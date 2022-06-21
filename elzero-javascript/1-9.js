//first way q2
// console.log(' %cElzero ','color: blue;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial;');
document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "arial";
//q3
console.log(' %cElzero %cweb %cschool ','color: red;font-size: 40px;',' color: green;font-size: 40px;font-weight: bold',' color: blue;font-size: 40px;');
//q4
// console.log("group1");
console.group("group1");//start group
console.log("message one");
console.log("message two");
console.group("child group");
console.log("message one");
console.log("message two");
console.group(" grand child group");
console.log("message one");
console.log("message two");
console.groupEnd();//end group
console.groupEnd();
console.groupEnd();
console.group("group2");
console.log("message one");
console.log("message two");

//q5
console.table(['elzero','ahmed','sameh','gamal','aya']);
//q6
//console.log("Iam In Console");
//document.write("Iam In Page");


/*console.log("Iam In Console");
document.write("Iam In Page");*/