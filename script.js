let gameseq = [];
let userseq = [];

let btns = ["yellow", "purple", "green","red"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();    
    }
});

function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},300);
}

function userFlash(btn){
btn.classList.add("userflash");
setTimeout(function(){
    btn.classList.remove("userflash");
},300);
}

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randbtn);

}

function checkans(idx){
 
   if(userseq[idx] === gameseq[idx]){
    if(userseq.length == gameseq.length){
        setTimeout(levelUp, 1000);
    }
   }else{
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    },200)
    funcReset();
   }
}

function btnpress(){
    let btn = this;
    userFlash(btn);
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click", btnpress);
}

function funcReset(){
    started = false;
    gameseq= [];
    userseq = [];
    level = 0;
}