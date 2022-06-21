// let start = 10;
// let end = 100;
// let exclude = 40;
// for(let i=10;i<=100;i+=10){

// if(i===40){
// continue;
// }
// console.log(i);
// }

// let start = 10;
// let end = 0;
// let stop = 3;
// for(start=10;start>0;start-=1){

// console.log(`${start}`);
// if(start<10){
//     // console.log(`0${start}`);
// if(start===3){
//     break;
// }

// }
// }
// let start = 1;
// let end = 6;
// let breaker = 2;
// for(start=1; start<=end;start++){

// console.log(start);
// for(breaker=2;breaker<6;breaker++){

// if(breaker!=2 && breaker!=4){
//       continue;
// }
// console.log(` --${breaker}`);
// }
// // console.log(start);// error
// }

// let index = 10;
// let jump = 2;
// let end = 0;
//first way
// for (index=10;index>0;index-=2) {

//     if(index==2){
//        continue;
//     }
//     console.log(index);


// }

//second way
// for (  ;  ; ) {


//     console.log(index); // print
//     index -= 2; 
//     if (index === 2) {
//         break;
//     }
//     // if (index === 0 ) {
//     //     break;
//     // }


// }

// Output
// 10
// 8
// 6
// 4
//************************************************* */
// let i;
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "A";
// let arr=[];
// for (i= 0; i<friends.length; i++) {
   
//     if (friends[i].slice(0,1)=== "A") {
//        continue;
//     }
//    console.log(` [${i+1}] ${friends[i] } `);

// }
// [1] Sayed 
// [2] Eman 
//  [3] Mahmoud 
// [5] Osama 
//  [6] Sameh 

//Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
//*************************************** */
// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];
// let arr=[];
// for(start=0;start<mix.length;start++){
// if(typeof mix[start]==="number"){
//     if(mix[start]==1){
//         continue;
//     }
//     arr.push( mix[start]);
// }

// }

// console.log(arr);
// // Output
// 2
// 3
//4
//******************************* */
// let start = 0;error
// let swappedName = "elZerO";
// for(start=0;start<swappedName.length;start++){

//     if(swappedName[start]===swappedName[start].toUpperCase()){

//         swappedName[start].push(swappedName[start].toUpperCase());
//     }
// }
// // Output
// "ELzERo"
//task56
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
while(index<friends.length){


    index++;
}

// Output
"1 => Sayed"
"2 => Mahmoud"