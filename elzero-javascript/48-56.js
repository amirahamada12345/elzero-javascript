
//task1 48-53
let start = 10;
let end = 100;
let exclude = 40;
for(i=start;i<end;i+=10){
   
    if(i===40) continue;
    console.log(i);
}
// //task2
let start1 = 10;
let end1 = 0;
let stop = 3;
for(i=start1;i>end1;i--){
   if(i>=start){
    console.log(`${i}`);
   }
     else if(i<10){

        console.log(`0${i}`);
        if(i===3)break;
    }
   
}
//task3 important
let start2 = 1;
let end2 = 6;
let breaker = 2;
for (i = start2; i <= end2; i++) {
    console.log(i);
  for (j = breaker; j < end2; j += breaker){
    console.log(`-- ${j}`)
    }
   }
  
    //task4
    let index = 10;
let jump = 2;
let end3 = 0;

for (i=index;i>0;i-=jump) {
    if(i==2)break;
    console.log(i);
    

}

// Output
// 10
// 8
// 6
// 4

//task5 mysolution
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = +true;

for(let i=+false;i<friends.length;i++)
{
  if(friends[i].charAt(+false)===letter.toUpperCase()){continue;}
  console.log(`${i+1}=>${friends[i]}`);
  

}



// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
//task6 important
let start5 = 0;
let swappedName = "elZerO";
let word = "";// for swap

for (i = start5; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    word += swappedName[i].toUpperCase();
  } else { word += swappedName[i].toLowerCase();}
}
console.log(word)

// // Output
// "ELzERo"
//task7
let start6 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];


for (i = start6; i < mix.length; i++) {
  if (typeof mix[i] === "string" || mix[i] === +true){
  continue;}
  console.log(mix[i])
}

// Output
2
3
4
//Assignments For Lessons 54 To 56
let friends1 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index1 = 0;
let counter1 = 0;// مش عايز اجيب كل عنصر مكانه فين علشان اعد العناصر
//friends1.length>index1 طلع غلط االاول علشان دايما ال7 اكبر من الصفر
while(index1<friends1.length){
index1++;
  if( typeof friends1[index1] ==="number" || typeof friends1[index1].charAt(+false)==="A"){
    continue;
  }
  console.log(` ${++counter1}=>${friends1[index1]}`);


  
}

// Output
"1 => Sayed"
"2 => Mahmoud"

//CHALLENGE
