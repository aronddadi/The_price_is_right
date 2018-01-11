// Variables that will be used
var message="Type in the number you want between 20 and 80";
var tries=0;
var minimum=20;
var maximum=80;
var number;
var win=false;
var input;

// Function generating the random number between 20 and 80 + calling it once to generate it
function randomNumber(){
  number=Math.floor(Math.random()*(maximum-minimum)+20);
  return(number);
}
randomNumber();
console.log(number);

// Function checking if the input of the user is the right number & reacting accordingly
function check(input){
  if(input==number){
    window.alert("Ayy you won bruv");
    win=true;
  }
  else if(input>number){
    tries=tries+1;
    window.confirm("It's lower fam \n You have "+(10-tries)+" left");
  }
  else if(input<number){
    window.confirm("It's higher pal \n You have "+(10-tries)+" left");
    tries=tries+1;
  }
  else {
    window.confirm("Stay within limits pls between 20 and 80");
  }
}
// Loop that plays the game untill 10 mistakes or untill the right number is found
while(tries<10 && win===false){
  input=window.prompt(message);
  check(input);
}
// End of game message
if(win===true){
  window.alert("You won with  "+tries+" mistakes !")
}
else{
  window.alert("The game is over go home goddamnit");
}
