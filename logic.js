
// timer variable
let timer = 60;
// score varaible
let score = 0;

document.querySelector(".pbtm").addEventListener('click', (e) =>{
    //    console.log(e);
    const hitBox = document.getElementById("hit"); 

   // check whether we clicked on any box containing value 
  let currentContent = e.target.textContent;  // get the current content
  let hitTextContent = hitBox.textContent;  // get the hitbox content

    if(currentContent === hitTextContent){
        increaseScore();
        getNewHit();
    }else{
        // check whether we clicked on the wrong box
        // if(currentContent !== hitTextContent){
        //     // handle wrong ans logic
        // }else{
        //     // show 
        // }
    }
});



function increaseScore(){
    const scoreVariable = document.getElementById("score");
    score += 10;
    scoreVariable.textContent = score;

}


function getNewHit(){
    const hitBox = document.getElementById("hit");
    let randomInteger = Math.floor(Math.random() * 10)+1;
    hitBox.textContent = randomInteger;
}
getNewHit();
 
function generateBubble(){
    const panelBtm = document.getElementById("panle-btm");

 // run a loop to create elements
 for(let i=0; i<120; i++){
    // random number generator
  
let randomInteger = Math.floor(Math.random() * 10)+1;

   const bubble =  document.createElement('div');
   bubble.setAttribute('class', 'bubble');
   bubble.textContent = randomInteger;
   panelBtm.appendChild(bubble);
 }
}


function runTimer(){
    const timerPlace = document.getElementById("timerValue");
    const timerInterval  = setInterval(() =>{

     if(timer > 0){
     timer--;
    //  console.log(timer);
        timerPlace.textContent = timer;
     }
    else{
     clearInterval(timerInterval)}
    },1000);
 
}
runTimer();

generateBubble();

