
var Timer = 60;
var score = 0;
var hitrn = 0;


function makeBubble(){

var clutter = "";

for (i = 1; i <= 152; i++) {
  var rn = Math.floor(Math.random() * 10);

  clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;

}



function runTimer(){
  var Timerint =  setInterval(function(){
        if (Timer>0){
            Timer--;
            document.querySelector("#timerVal").textContent= Timer;
        }else{
            clearInterval(Timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>
`;
        }
    },1000)
}



function getNewHit (){
   hitrn = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore (){
    score +=10;
    document.querySelector("#scoreval").textContent = score;
}


document.querySelector("#pbtm").addEventListener("click", function(dets){
var clickedNum = Number(dets.target.textContent);
if (clickedNum===hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();

}

});

runTimer();
makeBubble();
getNewHit();
increaseScore();
