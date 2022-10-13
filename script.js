var activePlayer=0;
var gridbtn0,gridbtn1,gridbtn2,gridbtn3,
gridbtn4,gridbtn5,gridbtn6,
gridbtn7,gridbtn8,gridbtn9,
player1Score,player2Score,playAgain,reStart,gridbtn;

btnArr=[];
for(i=0;i<9;i++){
    gridbtn=document.querySelector("#grid-"+i);
    btnArr[i]=gridbtn;
}

gridbtn=document.querySelectorAll(".grid-item");
gridbtn0=document.querySelector("#grid-0");
gridbtn1=document.querySelector("#grid-1");
gridbtn2=document.querySelector("#grid-2");
gridbtn3=document.querySelector("#grid-3");
gridbtn4=document.querySelector("#grid-4");
gridbtn5=document.querySelector("#grid-5");
gridbtn6=document.querySelector("#grid-6");
gridbtn7=document.querySelector("#grid-7");
gridbtn8=document.querySelector("#grid-8");
gridbtn9=document.querySelector("#grid-9");
playAgain=document.querySelector(".playAgain");
reStart=document.querySelector(".reStart");
player1Score=document.querySelector("#score-1");
player2Score=document.querySelector("#score-2");

reStart.addEventListener('click',function(){
reSettingGame();
player1Score.textContent=0;
player2Score.textContent=0;
});

playAgain.addEventListener('click',function(){
    reSettingGame();
});
function reSettingGame(){
    document.querySelector("#message").textContent="Start Playing";
    activePlayer=0;
    for(let i=0;i<9;i++){    
       btnArr[i].textContent=''; 
       btnArr[i].disabled=false;
    }
    // gridbtn0.textContent='';
    // gridbtn1.textContent='';
    // gridbtn2.textContent='';
    // gridbtn3.textContent='';
    // gridbtn4.textContent='';
    // gridbtn5.textContent='';
    // gridbtn6.textContent='';
    // gridbtn7.textContent='';
    // gridbtn8.textContent='';
    
    // gridbtn0.disabled=false;
    // gridbtn1.disabled=false;
    // gridbtn2.disabled=false;
    // gridbtn3.disabled=false;
    // gridbtn4.disabled=false;
    // gridbtn5.disabled=false;
    // gridbtn6.disabled=false;
    // gridbtn7.disabled=false;
    // gridbtn8.disabled=false;
    console.log(gridbtn0.textContent);
};

// for(i=0;i<9;i++){
//     btnArr[i].addEventListener('click',function(){
//         console.log(btnArr[i].disabled);
//         if(!btnArr[i].disabled){
            
//         if(activePlayer==0){
//             btnArr[i].textContent='X';
//             btnArr[i].disabled=true;
//         }
//         else{
//             btnArr[i].textContent='O';
//             btnArr[i].disabled=true;
//         }
//         winningCheck();
//         }
//         });
// }

gridbtn0.addEventListener('click',function(){
    if(!gridbtn0.disabled){
        
    if(activePlayer==0){
        gridbtn0.textContent='X';
        gridbtn0.disabled=true;
    }
    else{
        gridbtn0.textContent='O';
        gridbtn0.disabled=true;
    }
    winningCheck();
    }
    });
gridbtn1.addEventListener('click',function(){
    if(!gridbtn1.disabled){
    if(activePlayer==0){
        gridbtn1.textContent='X';
        gridbtn1.disabled=true;
    }
    else{
        gridbtn1.textContent='O';
        gridbtn1.disabled=true;
    }
    winningCheck();
    }
    });  
gridbtn2.addEventListener('click',function(){
    if(!gridbtn2.disabled){
    if(activePlayer==0){
        gridbtn2.textContent='X';
        gridbtn2.disabled=true;
    }
    else{
        gridbtn2.textContent='O';
        gridbtn2.disabled=true;
    }
    winningCheck();
    }
    }); 
gridbtn3.addEventListener('click',function(){
    if(!gridbtn3.disabled){
    if(activePlayer==0){
        gridbtn3.textContent='X';
        gridbtn3.disabled=true;
    }
    else{
        gridbtn3.textContent='O';
        gridbtn3.disabled=true;
    }
    winningCheck();
    }
    }); 
gridbtn4.addEventListener('click',function(){
    if(!gridbtn4.disabled){
    if(activePlayer==0){
        gridbtn4.textContent='X';
        gridbtn4.disabled=true;
    }
    else{
        gridbtn4.textContent='O';
        gridbtn4.disabled=true;
    }
    winningCheck();
    }
    }); 
gridbtn5.addEventListener('click',function(){
    if(!gridbtn5.disabled){
    if(activePlayer==0){
        gridbtn5.textContent='X';
        gridbtn5.disabled=true;
    }
    else{
        gridbtn5.textContent='O';
        gridbtn5.disabled=true;
    }
    winningCheck();
    }
    });
gridbtn6.addEventListener('click',function(){
    if(!gridbtn6.disabled){
    if(activePlayer==0){
        gridbtn6.textContent='X';
        gridbtn6.disabled=true;
    }
    else{
        gridbtn6.textContent='O';
        gridbtn6.disabled=true;
    }
    winningCheck();
    }
    });
gridbtn7.addEventListener('click',function(){
    if(!gridbtn7.disabled){
    if(activePlayer==0){
        gridbtn7.textContent='X';
        gridbtn7.disabled=true;
    }
    else{
        gridbtn7.textContent='O';
        gridbtn7.disabled=true;
    }
    winningCheck();
    }
    });
gridbtn8.addEventListener('click',function(){
    if(!gridbtn8.disabled){
    if(activePlayer==0){
        gridbtn8.textContent='X';
        gridbtn8.disabled=true;
    }
    else{
        gridbtn8.textContent='O';
        gridbtn8.disabled=true;
    }
    winningCheck();
    }
    });

function winningCheck(){
    var b0,b1,b2,b3,b4,b5,b6,b7,b8,status,score1,score2,score1El,score2El;
    b0=document.querySelector("#grid-0").textContent;
    b1=document.querySelector("#grid-1").textContent;
    b2=document.querySelector("#grid-2").textContent;
    b3=document.querySelector("#grid-3").textContent;
    b4=document.querySelector("#grid-4").textContent;
    b5=document.querySelector("#grid-5").textContent;
    b6=document.querySelector("#grid-6").textContent;
    b7=document.querySelector("#grid-7").textContent;
    b8=document.querySelector("#grid-8").textContent;
    status=document.querySelector("#message");
    score1El=document.querySelector("#score-1");
    score2El=document.querySelector("#score-2");
    score1=Number(score1El.textContent);
    score2=Number(score2El.textContent);

    if(b0=='X' && b1=='X' && b2=='X'){
        score1+=1;
        score1El.textContent=score1;
        status.textContent="Player 1 Won";
        gridbtn3.disabled=true;
        gridbtn4.disabled=true;
        gridbtn5.disabled=true;
        gridbtn6.disabled=true;
        gridbtn7.disabled=true;
        gridbtn8.disabled=true;
    }
    else if(b3=='X' && b4=='X' && b5=='X'){
        score1+=1;
        score1El.textContent=score1;
        status.textContent="Player 1 Won";
        gridbtn0.disabled=true;
        gridbtn1.disabled=true;
        gridbtn2.disabled=true;
        gridbtn6.disabled=true;
        gridbtn7.disabled=true;
        gridbtn8.disabled=true;

    }
    else if(b6=='X' && b7=='X' && b8=='X'){
        score1+=1;
        score1El.textContent=score1;
        status.textContent="Player 1 Won";
        gridbtn0.disabled=true;
        gridbtn1.disabled=true;
        gridbtn2.disabled=true;
        gridbtn3.disabled=true;
        gridbtn4.disabled=true;
        gridbtn5.disabled=true;

    }
    else if(b0=='X' && b4=='X' && b8=='X'){
        score1+=1;
        score1El.textContent=score1;
        status.textContent="Player 1 Won";
        gridbtn3.disabled=true;
        gridbtn1.disabled=true;
        gridbtn5.disabled=true;
        gridbtn6.disabled=true;
        gridbtn7.disabled=true;
        gridbtn2.disabled=true;

    }
    else if(b2=='X' && b4=='X' && b6=='X'){
        score1+=1;
        score1El.textContent=score1;
        status.textContent="Player 1 Won";
        gridbtn0.disabled=true;
        gridbtn1.disabled=true;
        gridbtn3.disabled=true;
        gridbtn5.disabled=true;
        gridbtn7.disabled=true;
        gridbtn8.disabled=true;

    }
    else if(b0=='X' && b3=='X' && b6=='X'){
        score1+=1;
        score1El.textContent=score1;
        status.textContent="Player 1 Won";
        gridbtn5.disabled=true;
        gridbtn1.disabled=true;
        gridbtn2.disabled=true;
        gridbtn5.disabled=true;
        gridbtn7.disabled=true;
        gridbtn8.disabled=true;

    }
    else if(b1=='X' && b4=='X' && b7=='X'){
        score1+=1;
        score1El.textContent=score1;
        status.textContent="Player 1 Won";
        gridbtn0.disabled=true;
        gridbtn3.disabled=true;
        gridbtn2.disabled=true;
        gridbtn6.disabled=true;
        gridbtn5.disabled=true;
        gridbtn8.disabled=true;

    }
    else if(b2=='X' && b5=='X' && b8=='X'){
        score1+=1;
        score1El.textContent=score1;
        status.textContent="Player 1 Won";
        gridbtn0.disabled=true;
        gridbtn1.disabled=true;
        gridbtn3.disabled=true;
        gridbtn4.disabled=true;
        gridbtn6.disabled=true;
        gridbtn7.disabled=true;

    }
    else if(b0=='O' && b1=='O' && b2=='O'){
        score2+=1;
        score2El.textContent=score2;
        status.textContent="Player 2 Won";
        gridbtn3.disabled=true;
        gridbtn4.disabled=true;
        gridbtn5.disabled=true;
        gridbtn6.disabled=true;
        gridbtn7.disabled=true;
        gridbtn8.disabled=true;
    }
    else if(b3=='O' && b4=='O' && b5=='O'){
        score2+=1;
        score2El.textContent=score2;
        status.textContent="Player 2 Won";
        gridbtn0.disabled=true;
        gridbtn1.disabled=true;
        gridbtn2.disabled=true;
        gridbtn6.disabled=true;
        gridbtn7.disabled=true;
        gridbtn8.disabled=true;

    }
    else if(b6=='O' && b7=='O' && b8=='O'){
        score2+=1;
        score2El.textContent=score2;
        status.textContent="Player 2 Won";
        gridbtn0.disabled=true;
        gridbtn1.disabled=true;
        gridbtn2.disabled=true;
        gridbtn3.disabled=true;
        gridbtn4.disabled=true;
        gridbtn5.disabled=true;

    }
    else if(b0=='O' && b4=='O' && b8=='O'){
        score2+=1;
        score2El.textContent=score2;
        status.textContent="Player 2 Won";
        gridbtn3.disabled=true;
        gridbtn1.disabled=true;
        gridbtn5.disabled=true;
        gridbtn6.disabled=true;
        gridbtn7.disabled=true;
        gridbtn2.disabled=true;

    }
    else if(b2=='O' && b4=='O' && b6=='O'){
        score2+=1;
        score2El.textContent=score2;
        status.textContent="Player 2 Won";
        gridbtn0.disabled=true;
        gridbtn1.disabled=true;
        gridbtn3.disabled=true;
        gridbtn5.disabled=true;
        gridbtn7.disabled=true;
        gridbtn8.disabled=true;

    }
    else if(b0=='O' && b3=='O' && b6=='O'){
        score2+=1;
        score2El.textContent=score2;
        status.textContent="Player 2 Won";
        gridbtn5.disabled=true;
        gridbtn1.disabled=true;
        gridbtn2.disabled=true;
        gridbtn5.disabled=true;
        gridbtn7.disabled=true;
        gridbtn8.disabled=true;

    }
    else if(b1=='O' && b4=='O' && b7=='O'){
        score2+=1;
        score2El.textContent=score2;
        status.textContent="Player 2 Won";
        gridbtn0.disabled=true;
        gridbtn3.disabled=true;
        gridbtn2.disabled=true;
        gridbtn6.disabled=true;
        gridbtn5.disabled=true;
        gridbtn8.disabled=true;

    }
    else if(b2=='O' && b5=='O' && b8=='O'){
        score2+=1;
        score2El.textContent=score2;
        status.textContent="Player 2 Won";
        gridbtn0.disabled=true;
        gridbtn1.disabled=true;
        gridbtn3.disabled=true;
        gridbtn4.disabled=true;
        gridbtn6.disabled=true;
        gridbtn7.disabled=true;

    }
    else if(((b0=='X') || (b0=='O')) && ((b1=='X') || (b1=='O')) &&
    ((b2=='X') || (b2=='O')) && ((b3=='X') || (b3=='O')) &&
    ((b4=='X') || (b4=='O')) && ((b5=='X') || (b5=='O')) &&
    ((b6=='X') || (b6=='O')) && ((b7=='X') || (b7=='O')) 
    ){
        status.textContent="Draw";
    }
    else{
        if(activePlayer==0){
            activePlayer=1;
        }
        else{
            activePlayer=0;
        }
    }
   
}






