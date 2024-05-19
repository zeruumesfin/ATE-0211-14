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
const homeBoxDiv=document.getElementById("homeBox");
homeBoxDiv.addEventListener("click", function(e){
   console.log("homeBox");
});
const studentDiv=document.getElementById("student");
studentDiv.addEventListener("click", function(e){
   console.log("student");
});
const feedDiv=document.getElementById("feed");
feedDiv.addEventListener("click", function(e){
   console.log("feedback");
});

