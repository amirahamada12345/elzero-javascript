"use strict"

 //========================================taask2=======
 let addInput = document.querySelector(".classes-to-add");
 let removeInput = document.querySelector(".classes-to-remove");
 
 let myDiv = document.querySelector("[title='Current']");
 let myClassesDiv = document.querySelector(".classes-list div");
 let i;
 let check = function () {
   if (myDiv.classList.length === 0) {
     let myP = document.createElement("p");
     myP.textContent = `No Classes To Show`
     myClassesDiv.appendChild(myP);
   } else {
     myClassesDiv.innerHTML = ""
     for (  i = 0; i < myDiv.classList.length; i++) {
       let myspan = document.createElement("span")
       myspan.textContent = `${myDiv.classList[i]}`
       myClassesDiv.appendChild(myspan)
     }
   }
 };
 window.onload = check;
 
 addInput.addEventListener(
   "blur",
   function () {
     if (addInput.value.split("").length !== 0) {
       for (i = 0; i < addInput.value.split(" ").length; i++) {
         myDiv.classList.add(addInput.value.toLowerCase().split(" ")[i]);
       }
       addInput.value = ``;
     }
   }
 );
 addInput.addEventListener("blur", check)
 
 removeInput.addEventListener(
   "blur",
   function () {
     if (removeInput.value.split("").length !== 0) {
       for (i = 0; i < removeInput.value.split(" ").length; i++) {
         myDiv.classList.remove(removeInput.value.toLowerCase().split(" ")[i]);
       }
       removeInput.value = ``;
     }
   }
 );
 removeInput.addEventListener("blur", check);
 const app = () => {
	const inputFields = document.querySelectorAll("input");
	const currentElement = document.querySelector(".assign > div:first-of-type");
	const allClasses = document.querySelector(".classes-list > div");

	// A function for show all of the avaliable classes on the current element.
	function showClasses() {
		if (currentElement.classList.value !== "") {
			allClasses.innerHTML = "";
			currentElement.classList.value
				.split(" ")
				.sort()
				.forEach((cls) => {
					let curClass = document.createElement("span");
					let curText = document.createTextNode(cls);
					curClass.append(curText);
					allClasses.append(curClass);
				});
		} else {
			allClasses.innerHTML = "No Classes To Show";
		}
	}
	// Call the showClasses function to make classes visiable at first.
	showClasses();

	inputFields.forEach((input) => {
		input.addEventListener("blur", function () {
			if (this.value.trim() !== "") {
				this.value
					.trim()
					.split(" ")
					.forEach((cls) => {
						this.className === "classes-to-add"
							? currentElement.classList.add(cls.toLowerCase())
							: currentElement.classList.remove(cls.toLowerCase());
					});
				this.value = "";
				showClasses();
			}
		});
	});
};

app();

 //========================================taask3=======
//  let par=document.getElementsByTagName("p")[0];
//  console.log(par.remove());
//  let d1=document.getElementById("our-element");
//      let div1 = document.createElement("div");
//      let pa = document.createElement("p");
//      console.log(d1.after((div1)));
//      console.log(d1.before(pa));

  //========================================taask4=======
//   let span1= document.querySelector("span").nextSibling;//for enter
//  console.log( span1.nextSibling.nextSibling); 



   //========================================taask5 =======
// let elements=document.getElementsByClassName("one");

// for(let i=0;i<elements.length;i++){

//     elements[i].onclick=function(){
//      console.log (  `This Is ${elements[i].tagName} `); 
//     }
// }
  //========================================taask5 second way=======

//   let ele=document.getElementsByClassName("one");
//   let i=0;

//   ele[i].addEventListener('click',function(){
//       for(;i<ele.length;i++)
//         console.log (  `This is ${ele[i].tagName} from second way `);
      
//   });

  //========================================taask =======