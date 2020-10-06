
function myFunction(){
  var dice1 = Math.floor(Math.random() * 6 + 1);
  var dice2 = Math.floor(Math.random() * 6 + 1);
  if(dice1 > dice2){
    document.querySelector("#title").textContent ="Player 1 is winner";
  }
  else if(dice1 < dice2){
    document.querySelector("#title").textContent ="Player 2 is winner";
  }
  else{
    document.querySelector("#title").textContent ="Draw!";
  }
  if(dice1 === 1){
    document.querySelector("#player1 img").src ="images/dice1.png";
    if(dice2 == 1){
      document.querySelector("#player2 img").src ="images/dice1.png";
    }
  }
  else if(dice1 === 2){
    document.querySelector("#player1 img").src ="images/dice2.png";
  }
  else if(dice1 === 3){
    document.querySelector("#player1 img").src ="images/dice3.png";
  }
  else if(dice1 === 4){
    document.querySelector("#player1 img").src ="images/dice4.png";
  }
  else if(dice1 === 5){
    document.querySelector("#player1 img").src ="images/dice5.png";
  }
  else if(dice1 === 6){
    document.querySelector("#player1 img").src ="images/dice6.png";
  }
  if(dice2 == 1){
    document.querySelector("#player2 img").src ="images/dice1.png";
  }
  else if(dice2 === 2){
    document.querySelector("#player2 img").src ="images/dice2.png";
  }
  else if(dice2 === 3){
    document.querySelector("#player2 img").src ="images/dice3.png";
  }
  else if(dice2 === 4){
    document.querySelector("#player2 img").src ="images/dice4.png";
  }
  else if(dice2 === 5){
    document.querySelector("#player2 img").src ="images/dice5.png";
  }
  else if(dice2 === 6){
    document.querySelector("#player2 img").src ="images/dice6.png";
  }
}
