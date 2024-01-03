// EventListener -> tag-d baigaa vguig sonsoh/shalgah
// ES6 -> variable/tag/document.addEventListener('click/keyboard/scroll',()=>{});
const start = document.querySelector(".start");
const time = document.getElementsByTagName('h1')[0];
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const lap = document.querySelector(".lap");
const ol = document.getElementsByTagName('ol')[0];
let second=0,minute=0,hour=0, doul=0;
// setInterval clearInterval --> hyzgaargui ajilna 
function watch(){
    doul++;
    if(doul==99){
        second++;
        doul=0;
        if(second==60){
            minute++;
            second=0;
            if(minute==60){
                minute=0;
                hour++;
            }
        }
    }
    let d = doul<10 ? "0"+doul : doul;
    let s = second<10 ? "0"+second : second;
    let m = minute<10 ? "0"+minute : minute;
    let h = hour<10 ? "0"+hour : hour;
    time.innerText = h+":"+m+":"+s+":"+d;
    
}
let up;
start.addEventListener('click',()=>{
    up=setInterval(watch,10);
    document.querySelector('.start').disabled = true;
    document.querySelector('.stop').disabled = false;
});
stop.addEventListener('click',()=>{
    clearInterval(up);
    document.querySelector('.stop').disabled = true;
    document.querySelector('.start').disabled = false;
});
reset.addEventListener('click',()=>{
    second=0;
    minute=0;
    hour=0;
    doul=0;
    time.innerText="00:00:00:00";
    ol.innerText="lap:";
    clearInterval(up);
    document.querySelector('.start').disabled = false;
    document.querySelector('.stop').disabled = false;
});
lap.addEventListener('click',()=>{
    // document.createElement('tagName'); -> shineer tag uusgeh
    let liEl = document.createElement('li');
    // .append()-. tag dotor uur tag oruulah
    let d = doul<10 ? "0"+doul : doul;
    let s = second<10 ? "0"+second : second;
    let m = minute<10 ? "0"+minute : minute;
    let h = hour<10 ? "0"+hour : hour;
    time.innerText = h+":"+m+":"+s+":"+d;
    liEl.innerText =time.innerText = h+":"+m+":"+s+":"+d;
    ol.append(liEl);
});