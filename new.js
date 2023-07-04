const option=document.getElementsByClassName("option")[0];
const playBtn=document.getElementById("play");
const chose=document.getElementsByClassName("choose")[0];
const chose2=document.getElementsByClassName("choose")[1]
const guest=document.getElementsByClassName("player")[0]
const guest1=document.getElementsByClassName("player")[1]
const title=document.getElementsByName("score")[0]
const title2=document.getElementsByName("score")[1]
playBtn.addEventListener('click',function(){
    option.style.display="block";
    option.style.transition="3s"
    chose.style.display="none"
    chose2.style.display="none"
})
const rock= document.getElementsByClassName("opt")[0]
const paper= document.getElementsByClassName("opt")[1]
const scissors= document.getElementsByClassName("opt")[2]

const arr=['👊','🖐️','✌️']
let random=arr[Math.floor(Math.random() * arr.length)];


score=0;
score2=0;
let e=function(){
   let playerOne= guest.innerHTML="<h1>👊</h1>";
   let playerTwo= guest1.innerHTML=`<h1>${random}</h1>`;
    if(playerOne==playerTwo){
console.log("draw")
    }else if(playerOne==='👊' && playerTwo==='✌️'){
    score++
 title.innerHTML=`<h1>Score =${score}`
    }else if(playerTwo===`🖐️` && playerOne==='👊'){
        title2.innerHTML=`<h1>Score =${score2}`
    }
    
}
rock.addEventListener('click',e)
let ae=function(){
   let p1 =guest.innerHTML="<h1>🖐️</h1>";
    let p2=guest1.innerHTML=`<h1>${random}</h1>`;
    if(p1==playerTwo){
        console.log("draw")
            }else if(p1==='🖐️' && p2==='👊'){
            score++
         title.innerHTML=`<h1>Score =${score}`
            }else if(p2===`✌️` && p1==='🖐️'){
                title2.innerHTML=`<h1>Score =${score2}`
            }
}
paper.addEventListener('click',ae)
let aee=function(){
   let g1= guest.innerHTML="<h1>✌️</h1>";
   let g2= guest1.innerHTML=`<h1>${random}</h1>`;
    if(g1==g2){
        console.log("draw")
            }else if(g1==='✌️' && g2==='🖐️'){
            score++
         title.innerHTML=`<h1>Score =${score}`
            }else if(g2===`👊` && g1==='✌️'){
                title2.innerHTML=`<h1>Score =${score2}`
            }
}
scissors.addEventListener('click',aee)
