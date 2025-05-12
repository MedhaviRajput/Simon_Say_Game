let gameSeq=[];
let userSeq=[];
let started = false;
let level = 0;
let highest=0;
let btns=["btn_pink","btn_Yellow","btn_Green","btn_blue"];
let h2=document.querySelector("h2");
function btnflash(btn){
       btn.classList.add("flash");
       setTimeout(function () {
        btn.classList.remove("flash");
       },250);
}
function userBtnFlash(btn){
      btn.classList.add("userFlash");
      setTimeout(function(){
        btn.classList.remove("userFlash");
      },250);
}
function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIndx =Math.floor(Math.random()*3);
    let randcolor = btns[randIndx];
    let randbtn = document.querySelector(`#${randcolor}`);
    gameSeq.push(randcolor);
    btnflash(randbtn);
    console.log("game");
    console.log(gameSeq);
} 
document.addEventListener("keypress",function(){
    if(started== false){
        started=true;
        levelup();
    }
});
function checkAns(idx){
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        if(highest<level){
            highest=level;
        }
        h2.innerHTML = `Game Over!Your score was <b>${level}<br> Highest Score = ${highest}</b><br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },170);

        reset();
    }
}
function reset(){
    started=false;
    level=0;
    userSeq=[];
    gameSeq=[];
}
function btnPress(){
    let userColor=this.getAttribute("id");
   userSeq.push(userColor);
   console.log(userSeq);
    userBtnFlash(this);
    checkAns(userSeq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
let btn;
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}
