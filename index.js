let a = document.querySelector('#t5');
let b = document.querySelector('#t3');
let c = document.querySelector('#t4');
let d = document.querySelector("#btn")

 function rndom(){
   const a = Math.floor(Math.random()*3+1);
     
   return  a ;   

}


a.addEventListener("click",()=>{
 let get1 = document.getElementById('t5').innerText = 1;
 document.getElementById("btn").classList.remove("hidden");


 if(get1===rndom()){
   document.getElementById('btn').innerHTML="you win";
     
    
 }
 else{
    document.getElementById('btn').innerHTML="Loose";

 }
 

 
})
b.addEventListener("click",()=>{
  let get2 = document.getElementById('t3').innerText = 2;
  if(get2===rndom()){
   document.getElementById('btn').innerHTML="you win";
   let d = document.querySelector("#btn")
  
   
 }
 else{
    document.getElementById('btn').innerHTML="Loose";
 }
})
c.addEventListener("click",()=>{
  let get3 = document.getElementById('t4').innerText = 3;
  if(get3===rndom()){
   document.getElementById('btn').innerHTML="you win";
 }
 else{
    document.getElementById('btn').innerHTML="Loose";
 }
  
})
img.addEventListener("click",)



