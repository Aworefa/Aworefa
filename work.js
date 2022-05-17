const sum= document.getElementById("test");
function mywork(p1, p2) {
    return p1+p2;
}
sum.innerHTML= mywork(2,3)
// var darkmode= document.querySelector("input")
// darkmode
if (new Date().getHours()<18) {
    document.getElementById("demo").innerHTML= "good day";
    document.querySelector("body").style.backgroundColor= "grey"
}
const text= document.getElementById("bad")
// const player= function(playernumber){
//     text.innerHTML= "the player is number", playernumber, "he is from protugal";
// };
// player(7)

// const player = function (playernumber) {
//     console.log(
//       "The player number is ",
//       playernumber,
//       "and he plays for Manchester United"
//     );
  
//     if (playernumber != 7) {
//       console.log(
//         "His name is Crisriano Ronaldo and he's the greatest of all time"
//       );
//     }
//     else{
//         console.log("it will be messi or other goat alive")
//     }
//   };
  
//   player(7);

  const player = function (playernumber) {
    console.log(
      "The player number is ",
      playernumber,
      "and he plays for Manchester United"
    );
  
    if (playernumber > 10) {
      console.log(
        "His name is Crisriano Ronaldo and he's the greatest of all time"
      );
    }
    else if (playernumber < 65 && playernumber <= 80){ console.log("Still the wrong player"); }
    
    else { console.log("Not the right number for the greatest of all time!"); 
         }}
  
  player(7);
  
//   for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + "";
//   };

let counter = "";
let i = 0;
while (i < 5) {
  counter += "<p> The number is " + i;
  i++;
}
document.getElementById("test").innerHTML = counter;

let tebt = "";
for (let i = 0; i < 5; i++) {
  tebt += "The number is " + i + "<br>";
}

document.getElementById("tevt").innerHTML = tebt;
const cars = [
  "Tesla", 
  "Camry", 
  "BMW"];
document.getElementById("cool").innerHTML = cars;
