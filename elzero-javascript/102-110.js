'use strict'
//task1
// let promptMsg=prompt("Print Number From – To","5-20");
// let sortMsg= promptMsg.split("-")//split convert string to array
// console.log(sortMsg);// array of string
// let i;
// sortMsg.reduce(function (acc, curr) {
//     if (+acc > +curr) {
//       for (i = +curr; i <= +acc; i++) {
//         document.write(`${i} <br>`);
       
//       }
//     } else {
//       for (i = +acc; i <= +curr; i++) {
//         document.write(`${i} <br>`);
//       }
//     }

//   });
  //********************************************task3,4,5 */
  let count=1;
let div1 = document.querySelector('div')

function countDown() {
    document.write(div1.innerHTML -= 1);
    if (div1.innerHTML === "0") {
        clearInterval(counter);
        // location.href="https://elzero.org/";
    } else if (div1.innerHTML === "5") {
        window.open("https://elzero.org/", "_blank", "width=400px, height=400px");//note here we use =
    }

}
let counter = setInterval(countDown, 1000);
  //********************************************task2 amasing */
// //taslk2
let div = document.createElement("div");
let head = document.createElement("h1");
let p = document.createElement("p");
let button = document.createElement("button")

button.innerHTML = "<img src='https://img.icons8.com/ios-glyphs/30/000000/macos-close.png'/>"

head.textContent = "Welcome"
p.textContent = "Welcome to Elzero web school"

div.append(head,p,button)

div.style.cssText = "text-align: center;padding: 20px; width: 40%; position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);"
div.style.backgroundColor = "#fcfc";

button.style.cssText = "position: absolute; top: -15px;right: -17px; background: none;border: none;cursor: pointer;"

setTimeout(function () {
  document.body.appendChild(div)}, 5000)



button.onclick = function () {
  button.parentElement.remove()
}