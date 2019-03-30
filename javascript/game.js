
var randomNumber;
var guessNumber;
var randomPicture1;
var randomPicture2;
var randomPicture3;
var randomPicture4;
var win = 0;
var losses = 0;

function initialize(){
    randomNumber = 0;
    guessNumber = 0;
    randomPicture1 = 0;
    randomPicture2 = 0;
    randomPicture3 = 0;
    randomPicture4 = 0;

    $("#result-box").text(guessNumber);
    
    
   while(true){
       var tempRandom = 0;
        tempRandom = Math.floor(Math.random()*100);

       if(tempRandom > 18 && tempRandom < 121){
           randomNumber = tempRandom;
        //    alert("" + randomNumber);
           $("#random-numbers-box").text(randomNumber);
           break;
       }
   }
   
   while(true){
    var tempRandom = 0;
    tempRandom = Math.floor(Math.random()*100);

   if(tempRandom > 0 && tempRandom < 13){
    
        // alert("Valor Picture 1" + randomNumber);
       $("#hexagon").attr("Value",tempRandom);
    //    alert($("#hexagon").attr("Value"));
       break;
   }
   }

   while(true){
    var tempRandom = 0;
    tempRandom = Math.floor(Math.random()*100);

   if(tempRandom > 0 && tempRandom < 13){
        //tested
        // alert("Valor Picture 1" + randomNumber);
       $("#diamond").attr("Value",tempRandom);
    //    alert($("#diamond").attr("Valor"));
       break;
   }
   }
   
   while(true){
    var tempRandom = 0;
    tempRandom = Math.floor(Math.random()*100);

   if(tempRandom > 0 && tempRandom < 13){
       //tested
        // alert("Valor Picture 1" + randomNumber);
       $("#octagon").attr("Value",tempRandom);
    //    alert($("#diamond").attr("Valor"));
       break;
   }
   }

   while(true){
    var tempRandom = 0;
    tempRandom = Math.floor(Math.random()*100);

   if(tempRandom > 0 && tempRandom < 13){
       //tested
        // alert("Valor Picture 1" + randomNumber);
       $("#square").attr("Value",tempRandom);
    //    alert($("#diamond").attr("Valor"));
       break;
   }
   }
}

initialize();

//Calculate 
function WinLose(){
if (guessNumber == randomNumber){
    $("#result").text("You Won!!!");
    win++;
    $("#win").text("Win : " + win);
    initialize();
}

if (guessNumber > randomNumber){
    $("#result").text("You Lost!!!");
    losses++;
    $("#losses").text("Losses: " + losses);
    initialize();
}
}


//make cliks each images
$("#hexagon").on("click", function(){
guessNumber = guessNumber + parseInt($("#hexagon").attr("Value"));
$("#result-box").text(guessNumber);
WinLose();
});

$("#diamond").on("click", function(){
guessNumber = guessNumber + parseInt($("#diamond").attr("Value"));
$("#result-box").text(guessNumber);
WinLose();
});

$("#octagon").on("click", function(){
    guessNumber = guessNumber + parseInt($("#octagon").attr("Value"));
    $("#result-box").text(guessNumber);
    WinLose();
    });

$("#square").on("click", function(){
    guessNumber = guessNumber + parseInt($("#square").attr("Value"));
    $("#result-box").text(guessNumber);
    WinLose();
    });
