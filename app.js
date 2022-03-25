function aname () {
    var name = prompt ("Hi what is your name?")
    return name
}


function number() {
    var rando = Math.floor(Math.random() * 10) + 1;
    return rando
}

function player() {
    alert(`its your turn we will deal you a card`);
    var total = 0;
    do{
        var a = number()
        total = a + total;
        console.log(a)
        alert(`you drew ${a} your total is ${total}`)
        
        var another = prompt("Do you want another card?");
    }while(another == "y");
    return total 
}


function computer() {
    var totalc = 0;
    do{
        var a = number()
        totalc = a + totalc;
        console.log(a)
        alert(`the pc drew ${a} its total is ${totalc}`)
    }while(totalc < 16)
    return totalc
}



function results (player, computer) {
    if (player < computer){
        alert(`you got ${player} the pc got ${computer} you loose better luck next time`);
       
      
    }else if ((player < 21) && (player > computer)){    alert(`you Win congrats`)                                            
      
    }else if (player == computer){
      alert(`Its a draw better luck next time you got ${player} and the cpu got ${computer}`);
      
      }else if (player > 20){
      alert(`you went over 20 better luck next time your score was ${player}`);
      
      }
}

function brain (){
    // do{
    aname();
    results(player() , computer());
    var again = prompt(`Would you like to play again (y) or (n)?`)
    // }while(again == "y");
    if (again == "y") {
        brain() // recursive function
    }
    
}

alert(`Welcome to Crazy Twentys point of the game is to get as close to 20 without going over in this game you go up agenst a cpu it will draw cards until it hits 16 good luck and have FUN!`);
brain()
