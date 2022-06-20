//Main function starts here
function rpsgame(yourchoice){
    
    console.log(yourchoice);
    var HumanChoice,BotChoice;
    HumanChoice=yourchoice.id;
    BotChoice= choice(random());
    console.log(BotChoice);

    result=decideWinner(HumanChoice,BotChoice);
    console.log(result);

    messege= finalmessage(result);
    console.log(messege);

   rpsfrontend(yourchoice.id,BotChoice,messege);

}

//function for generating random numbers
function random(){

    return Math.floor(Math.random()*3);
}
//function for the Bot's rock paper scissor
function choice(number){
  
    return['rock','paper','scissor'][number];
}

//function for deciding the winner and sending score
function decideWinner(yourchoice,compChoice){

var rpsscore = {
    
    'rock': {'scissor': 1,'rock':0.5,'paper':0 },
    'paper': {'rock': 1 ,   'paper':0.5,   'scissor':0},
    'scissor': {'paper': 1,'scissor':0.5, 'rock':0 }
};
var humanscore= rpsscore[yourchoice][compChoice];
var botscore= rpsscore[compChoice][yourchoice];

return [humanscore];

}
//function for the messege to be printed

function finalmessage(humanscore){
    var num=humanscore;
    console.log(num);
    if(num==0){
        return{ 'message': 'You Lost!', 'color': 'red'};
    }
    else if(num==0.5){
        return{ 'message': 'You tied!', 'color': 'yellow'};
    }
    else {
        return{ 'message': 'You win!', 'color': 'green'};
    }
    
   
}

//function for showing the output in the frontend
function rpsfrontend(Humanimagechoice,Botimagechoice,finalmessege){

    var imagedatabase={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    //remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    document.getElementById('txt-div').remove();

    //creating element

    var humandiv = document.createElement('div');
    var textdiv = document.createElement('div');
    var botdiv = document.createElement('div');

    var paragraph = document.getElementById('you-div');
    var text = document.createTextNode("Player");
   
    var paragraph2 = document.getElementById('comp-div');
    var text2 = document.createTextNode("Computer");
    
    paragraph.appendChild(text);
    paragraph2.appendChild(text2);

    //HTML CSS
    humandiv.innerHTML= "<img src='"+ imagedatabase[Humanimagechoice]+ "' style='box-shadow: 0px 10px 50px rgb(255, 255, 255);'>"
    textdiv.innerHTML= "<h1 style='color: " +finalmessege['color']+ "; font-size: 60px;  padding: 100px 30px 30px 30px;'>" + finalmessege['message'] + "</h1>"
    botdiv.innerHTML= "<img src='"+ imagedatabase[Botimagechoice]+ "' style='box-shadow: 0px 10px 50px rgb(153, 80, 222);'>"

    //document.getElementById('txt-div').appendChild(h1);
    document.getElementById('images-div').appendChild(humandiv);
    document.getElementById('images-div').appendChild(textdiv);
    document.getElementById('images-div').appendChild(botdiv); 

}
