const homeDiv= document.getElementById("home");
homeDiv.addEventListener("click", function(e){
  console.log("home");
}); 
homeDiv.addEventListener("mouseover", function(e){
  homeDiv.style.backgroundColor="rgb(209,142,71)";
});
homeDiv.addEventListener("mouseleave", function(e){
  homeDiv.style.backgroundColor="orange";
});
const announceDiv=document.getElementById("announce");
announceDiv.addEventListener("click", function(e){
   console.log("announce");
});
const calender2Div=document.getElementById("calender2");
calender2Div.addEventListener("click", function(e){
   console.log("calender2");
});
const teacherDiv=document.getElementById("teacher");
teacherDiv.addEventListener("click", function(e){
   console.log("teacherManagement");
});
const studentDiv=document.getElementById("student");
studentDiv.addEventListener("click", function(e){
   console.log("studentManagement");
});