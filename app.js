var name = prompt("Enter your name");

var userChoice = prompt("Welcome " + name  + " Do you choose rock, paper or scissors?");

//random number
var aiChoice = Math.floor(Math.random() * 3);
var aiArray = ["Rock", "paper", "scissors"];


var aiScore = 0;
var userScore = 0;
//
switch (userChoice) {
  case "rock":
  if (aiChoice == 0) {
    alert("This round a draw. Ai picked " + aiArray[aiChoice]);
  } else if (aiChoice == 1) {
    alert("you have lost. Ai has picked "  + aiArray[aiChoice]);
    aiScore++;
  } else {
    alert("You have won. Ai has picked. " + aiArray[aiChoice]);
    userScore++;
  }
    break;
  case "paper":
  if (aiChoice == 0) {
    alert("You have won. Ai has piceked. " + aiArray[aiChoice]);
  } else if (aiChoice == 1) {
    alert("This round a draw. Ai picked " + aiArray[aiChoice]);
  } else {
    alert("you have lost. Ai has picked " + aiArray[aiChoice]);
  }
  break
  case "scissors":
  if (aiChoice == 0) {
    alert("ou have lost. Ai has pickedY " + aiArray[aiChoice]);
  } else if (aiChoice == 1) {
    alert("ou have won. Ai has piceked. " + aiArray[aiChoice]);
  } else {
    alert("This round is a draw. Ai picked " + aiArray[aiChoice]);
}
    break;
  default:"please enter one of the following"

}









//NOT WORKING
// var computerChoice = ["rock", "paper", "scissors"];
//  var Math.floor((Math.random) * 3);



// //random genenerator
// var array = ["0", "1", "2"]
// floor(Math.random()* array.length)










// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice <0.34){
//     computerChoice = "rock";
// }else if(computerChoice <=0.67){
//     computerChoice = "paper";
// }
// else{
//     computerChoice = "scissors";
// }
// var compare = function(choice1,choice2){
//     if(choice1===choice2){
//         return "The result is a tie!";
//     }
//     if(choice1==="rock"){
//         if(choice2==="scissors"){
//             return "rock wins";
//         }
//         else{
//             return "paper wins";
//         }
//     }
//     if(choice1==="paper"){
//         if(choice2==="rock"){
//             return "paper wins";
//         }
//         else{
//             return "scissors wins";
//         }
//     }
//     if(choice1==="scissors"){
//         if(choice2==="rock"){
//             return "rock wins";
//         }
//         else{
//             return "scissors wins";
//         }
//     }
// };
//
// //compare(userChoice,computerChoice);
