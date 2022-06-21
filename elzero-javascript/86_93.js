"use strict"
//task2
// let imgs=document.getElementsByTagName("img");
// console.log(imgs);
// for(let i=0;i<imgs.length;i++){
//     if(imgs[i].hasAttribute("src")&&imgs[i].hasAttribute("alt")){
//    imgs[i].setAttribute("src"," https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
// imgs[i].setAttribute("alt"," Elzero Logo");
// }
// }
//***************************************task4 */
// let divOne = document.querySelector(".one");
// let divTwo = document.querySelector(".two");

     
//     if((divOne.hasAttribute("title"))){
//         divOne.setAttribute("title","one");
//        divOne.innerHTML="one";
//      }
  
//      if((divTwo.hasAttribute("title"))){
//         divTwo.setAttribute("title","two");
//        divTwo.innerHTML="two 2";
//      }

// console.log(divOne);
// console.log(divTwo);
//***************************************task5 */
// let im=document.getElementsByTagName("img");
// let i;
// console.log(im);
// for( i=0;i<im.length;i++){
//     if(im[i].hasAttribute("alt")){
//         im[i].setAttribute("alt","old");
//     }
//     else if(!(im[i].hasAttribute("alt"))){
//         im[i].setAttribute("alt"," Elzero New");
//     }
// }
// console.log(im[i]);
//***************************************task3 */
// let div1 = document.querySelector(".result");
// let inp = document.getElementById("inp");
// inp.onchange=function(){
//   console.log( div1.innerHTML=`${inp.value} USD Dollar = ${(inp.value*15.6).toFixed(2)} Egyptian Pound`
//   ) ;
// }

//***************************************task6 */



let form = document.forms[0];
let num = document.querySelector("form input[type='number']");


let content = document.querySelector("input[type= 'text']");
let type = document.querySelector("form select");
let sub = document.querySelector("input[type='submit']");
let result = document.querySelector("form .results");
num.setAttribute("min", "0");

form.onsubmit = (event) => {
  event.preventDefault();

  // remove all boxes
  let boxes = document.querySelectorAll(".results .box");
  boxes.forEach((box) => box.remove());

  for (let i = 0; i < num.value; i++) {
    let element = document.createElement(type.value);
    element.className = "box";
    element.title = "Element";
    element.id = `id-${i + 1}`;
    element.textContent = content.value;

    result.appendChild(element);
  }
};






//***************************************task6 */
//error
// let selectSubmit = document.querySelector("[type = 'submit']");

// let numOfElement = document.querySelector("[name='elements']");
// let boxText = document.querySelector("[name='texts']");
// let selectValue = document.querySelector("[name='type']");
// let restDiv = document.querySelector(".results");


// selectSubmit.onclick=function(event){
//     event.preventDefault();
//       let boxes = document.querySelectorAll(".results .box");
//     boxes.forEach((box) => box.remove());
    
//     for(let i=0;i<numOfElement.value;i++){
//       let element = document.createElement(selectValue.value);
//       element.className = "box";
//       element.title = "Element";
//       element.id = `id-${i + 1}`;
//       element.textContent = boxText.value;
//       restDiv.appendChild(element);

    
//     }
//   }
  