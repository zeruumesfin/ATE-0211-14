const homeDiv= document.getElementById("home");
homeDiv.addEventListener("click", function(e){
  console.log("home");
}); 
homeDiv.addEventListener("mouseover", function(e){
  homeDiv.style.backgroundColor="rgb(209,142,71)";
});
homeDiv.addEventListener("mouseleave", function(e){
  homeDiv.style.backgroundColor="orange";
})
const announceDiv=document.getElementById("announce");
announceDiv.addEventListener("click", function(e){
   console.log("announce");
});
const attendDiv=document.getElementById("attend");
attendDiv.addEventListener("click", function(e){
   console.log("attend");
});
const gradeDiv=document.getElementById("grade");
gradeDiv.addEventListener("click", function(e){
   console.log("grade");
});
const assignment2Div=document.getElementById("assignment2");
assignment2Div.addEventListener("click", function(e){
   console.log("assignment");
});
const informationDiv=document.getElementById("information");
informationDiv.addEventListener("click", function(e){
   console.log("information");
});
const classScheduleDiv=document.getElementById("clasSchedule");
classScheduleDiv.addEventListener("click", function(e){
   console.log("classSchedule");
});

