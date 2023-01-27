let hours = document.querySelector("#inputH");
let min = document.querySelector("#inputM");
let sec = document.querySelector("#inputS");

let start = document.querySelector("#Start");
let Stop = document.querySelector("#Stop");

var startTimer = null;

function timer(){
    if(hours.value == 0 && min.value == 0 && sec.value == 0 ){
        hours.value = 0;
        min.value = 0;
        sec.value = 0;
    } else if (sec.value != 0){
        sec.value--;
    } else if (min.value != 0 && sec != 0) {
        sec.value = 59;
        min.value--;
    } else if (hours.value != 0 && min.value == 0) {
        min.value = 60;
        hours.vlue--;
    }
    return
}

function stopTimer (){
    clearInterval(startTimer);
}

start.addEventListener ('click', () => {
     function startInterval(){
        startTimer = setInterval( function () {
            timer()
        }, 1000)
    }
    startInterval()
})

Stop.addEventListener('click', () => {
    hours.value = 0;
    min.value = 0;
    sec.value = 0; 
    stopTimer();
})