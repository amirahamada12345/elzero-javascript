'use strict'
// //========================================taask3=======
        let myp = document.getElementsByTagName("p")[0];
        console.log(myp);
        myp.remove();
        let element = document.getElementById("our-element");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");

        div1.textContent = "Start";
        div1.className = "start";
        div1.setAttribute("title", "Start Element", );
        div1.setAttribute("data-value", "Start");
        element.before(div1);
        div2.textContent = "end"
        div2.className = "end"
        div2.setAttribute("title", "end Element", )
        div2.setAttribute("data-value", "end")
        element.after(div2);
        // ===================task4============
                let myComment = document.querySelector("span").nextSibling;
        let newline = myComment.nextSibling;
        console.log( newline.nextSibling);
        // ================task5==========
        let elements=document.getElementsByClassName("one");
        // console.log(elements);
        for(let i=0;i<elements.length;i++){

            elements[i].onclick=function(){
             console.log (  `This Is ${elements[i].tagName} `); 
            }
        }