
var activePlayer=0,gameMessage,score1El,score2El,score1,score2,count,
playAgain,reStart,gridbtn,btnArr=[],player1Turn,player2Turn,allGrids
backdrop;
player1Turn=document.querySelector(".Player1Turn");
player2Turn=document.querySelector(".Player2Turn");
playAgain=document.querySelector(".playAgain");
reStart=document.querySelector(".reStart");
gameMessage=document.querySelector("h4");
score1El=document.querySelector("#score-1");
score2El=document.querySelector("#score-2");
player1Turn.classList.add("highlight");
allGrids=document.querySelectorAll(".grid-item");
backdrop=document.getElementById("backdrop");
modal=document.getElementById("Modal");
modalbody=document.querySelector(".modal-body");
modaltitle=document.querySelector(".modal-title");

for(i=0;i<9;i++){
    gridbtn=document.querySelector("#grid-"+i);
    btnArr[i]=gridbtn;
    btnArr[i].disabled=false;
}

reStart.addEventListener('click',function(){
reSettingGame();
score1El.textContent=0;
score2El.textContent=0;
});

playAgain.addEventListener('click',function(){
    reSettingGame();
});

function reSettingGame(){
    gameMessage.textContent="Start Playing";
    activePlayer=0;
    player1Turn.classList.add("highlight");
    player2Turn.classList.remove("highlight");
    for(let i=0;i<9;i++){    
       btnArr[i].textContent=''; 
       btnArr[i].disabled=false;
    }
};

for(i=0;i<9;i++){
    btnArr[i].addEventListener('click',function(e){
        if(!e.target.disabled){
        if(activePlayer==0){
            e.target.textContent='X';
            e.target.disabled=true;
            player1Turn.classList.remove("highlight");
            player2Turn.classList.add("highlight");
            activePlayer=1;
        }
        else{
            e.target.textContent='O';
            e.target.disabled=true;
            player1Turn.classList.add("highlight");
            player2Turn.classList.remove("highlight");
            activePlayer=0;
        }
        count=0;
        for(i=0;i<9;i++){
            if(allGrids[i].textContent.trim().length!=" "){
                count+=1;
            }
        }
        if(count>4)
            winningCheck();
        }
    });
}


function winningCheck(){
    var b0,b1,b2,b3,b4,b5,b6,b7,b8;
    //storing values in grid-items to a variable.
    b0=btnArr[0].textContent;
    b1=btnArr[1].textContent;
    b2=btnArr[2].textContent;
    b3=btnArr[3].textContent;
    b4=btnArr[4].textContent;
    b5=btnArr[5].textContent;
    b6=btnArr[6].textContent;
    b7=btnArr[7].textContent;
    b8=btnArr[8].textContent;
    if((b0=='X' && b1=='X' && b2=='X') ||(b3=='X' && b4=='X' && b5=='X') ||
       (b6=='X' && b7=='X' && b8=='X') ||(b0=='X' && b4=='X' && b8=='X') || 
       (b2=='X' && b4=='X' && b6=='X') ||(b0=='X' && b3=='X' && b6=='X') || 
       (b1=='X' && b4=='X' && b7=='X') ||(b2=='X' && b5=='X' && b8=='X')){
        PlayerWon(0);
    }
    else if((b0=='O' && b1=='O' && b2=='O') ||(b3=='O' && b4=='O' && b5=='O')||
    (b6=='O' && b7=='O' && b8=='O') ||(b0=='O' && b4=='O' && b8=='O') || 
    (b2=='O' && b4=='O' && b6=='O') ||(b0=='O' && b3=='O' && b6=='O') || 
    (b1=='O' && b4=='O' && b7=='O') ||(b2=='O' && b5=='O' && b8=='O')){
        PlayerWon(1);
    }
    else if(((b0=='X') || (b0=='O')) && ((b1=='X') || (b1=='O')) &&
    ((b2=='X') || (b2=='O')) && ((b3=='X') || (b3=='O')) &&
    ((b4=='X') || (b4=='O')) && ((b5=='X') || (b5=='O')) &&
    ((b6=='X') || (b6=='O')) && ((b7=='X') || (b7=='O')) 
    ){
        gameMessage.textContent="It's a Draw";
        player1Turn.classList.remove("highlight");
        modalbody.textContent=gameMessage.textContent;
        modaltitle.textContent="Oops!!";
        openModal();
    }
    else{
    } 
}

function PlayerWon(playerno){
    player1Turn.classList.remove("highlight");
    player2Turn.classList.remove("highlight");
    gameMessage.textContent=`Player ${playerno+1} Won`;
    modalbody.textContent=gameMessage.textContent;
    modaltitle.textContent="Hurray!!";
    openModal();
    for(i=0;i<9;i++){
        btnArr[i].disabled=true;
    }
    if(playerno==0){
        score1=Number(score1El.textContent);
        score1El.textContent=score1+1;
    }
    else{
        score2=Number(score2El.textContent);
        score2El.textContent=score2+1;
    }
}

function openModal() {
    backdrop.style.display = "block";
    modal.style.display = "block";
}
function closeModal() {
    reSettingGame();
    backdrop.style.display = "none";
    modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal()
  }
}

