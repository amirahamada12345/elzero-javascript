'use strict'
// let mydiv1 = document.getElementById('#elzero');
// let mydiv2 = document.getElementsByClassName('.element');
// let mydi3 = document.getElementsByName('js');
// let mydi4 = document.getElementsByTagName('div');
// let mydi5 = document.querySelector('#elzero');
// let mydi6 = document.querySelector('.element');
// let mydi7 = document.querySelector('div');
// let mydi8 = document.querySelector('js');
// let mydi9 = document.querySelectorAll('js');
// let mydi10 = document.querySelectorAll('div');
// let mydi11 = document.querySelectorAll('.element');
// let mydi12 = document.querySelectorAll('#elzero');

// let myElemnt12 = document.body.children[0]
// let myElemnt13 = document.body.childNodes[1]
// let myElemnt14 = document.body.firstElementChild
// let myElemnt15 = document.body.firstChild
//***************************************************** */
// for (let i = 0; i < 10; i++) {

//     let img = document.getElementsByTagName('img')[i];
//     img.setAttribute("src", 'https://elzero.org/wp-content/themes/elzero/imgs/logo.png');
//   img.setAttribute("alt", 'Elzero Logo');
// }
// let inp=document.getElementById("inp");
// let div=document.getElementById("div");
// inp.onchange=function(){

//     div.value=inp.value*15.6;
//     var newtext = document.createTextNode(`${inp.value} USD Dollar  = ${div.value.toFixed(2)}  Egyptian Pound `);
//     div.appendChild(newtext);
// // document.write(`${inp.value} USD Dollar = ${div.value.toFixed(2)} Egyptian Pound`) ;

// }
//task5
let Images = document.querySelectorAll("img");
for (let i = 0; i < Images.length; i++) {
    if (Images[i].hasAttribute('alt')) {
        if (Images[i].getAttribute("alt") !== "  ") {
            Images[i].setAttribute("alt", "old");
        }
    } else {
   
        Images[i].setAttribute('alt', 'Elzero New');
    }

}
//TASK4 swaaping
 let div1=document.getElementsByClassName("one")[0];
 
 if(div1.hasAttribute('title')){ 
   if(div1.getAttribute('title')==='two'){
      div1.setAttribute("title","one");
      div1.innerHTML='one';
    }
 }
console.log(div1);
let div2=document.getElementsByClassName("two")[0];//خالي بالك لما بتستخدمي اي حاجه جمع زي باي كلاس هنا انتي بتتعاملي كمصفوفه

if(div2.hasAttribute('title')){
    
    if(div2.getAttribute("title")==="one"){
         div2.setAttribute("title","two");
         div2.innerHTML='two 2';
     } 
  
}

console.log(div2);

// task3
// let allImages = document.querySelectorAll("div img");
// allImages.forEach((img) => {
//   img.setAttribute(
//     "src",
//     "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
//   );
//   img.alt = "Elzero Logo";
// });
//codepen task5
// let myImgs = document.querySelectorAll("img");

// myImgs.forEach((img) => {
//   img.hasAttribute("alt")
//     ? (img.alt = "old")
//     : img.setAttribute("alt", "Elzero New");
// });
//task6
let input1=document.getElementsByName("numele")[0];
let input2=document.getElementsByName("texts")[0];
let input3=document.getElementsByName("type")[0];
let btn=document.getElementsByName("create")[0];
let divResult=document.getElementsByClassName("results")[0];
document.forms[0].onsubmit=function(event){
  event.preventDefault();
    let boxes = document.querySelectorAll(".results .box");
  boxes.forEach((box) => box.remove());
  for(let i=0;i<input1.value;i++){
    let element = document.createElement(input3.value);
    element.className = "box";
    element.title = "Element";
    element.id = `id-${i + 1}`;
    element.textContent = input2.value;
   divResult.appendChild(element);
  
  }
}

// let form = document.forms[0];
// let num = document.querySelector("form input[type='number']");


// let content = document.querySelector("input[type= 'text']");
// let type = document.querySelector("form select");
// let sub = document.querySelector("input[type='submit']");
// let result = document.querySelector("form .results");
// num.setAttribute("min", "0");

// form.onsubmit = (event) => {
//   event.preventDefault();

//   // remove all boxes
//   let boxes = document.querySelectorAll(".results .box");
//   boxes.forEach((box) => box.remove());

//   for (let i = 0; i < num.value; i++) {
//     let element = document.createElement(type.value);
//     element.className = "box";
//     element.title = "Element";
//     element.id = `id-${i + 1}`;
//     element.textContent = content.value;

//     result.appendChild(element);
//   }
// };