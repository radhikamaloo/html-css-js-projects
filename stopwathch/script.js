let hourEl = document.querySelector('#hour');
let minuteEl = document.querySelector("#minute");
let secondEl = document.querySelector("#second");
let hr =0;
let sec = 0;
let min=0;

const start =document.getElementById('start');
const stop = document.getElementById('stop');
const reset  = document.getElementById('reset');

const timer = document.getElementsByClassName('time');

let stopTime = true;





function startTimer() {
    if (stopTime == true) {
        stopTime = false;
        timerCycle();
    }
}

function stopTimer() {
    if (stopTime == false) {
        stopTime = true;
      }
}

function timerCycle() {
    console.log("sucess")
    if (stopTime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

       sec+=1;        

        if(sec == 60)
            {
                min+=1;
                sec = 0;
            }

        if (min == 60) {
            min+=1;
            sec=0;
            min=0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
          }
          if (min < 10 || min == 0) {
            min = '0' + min;
          }
          if (hr < 10 || hr == 0) {
            hr = '0' + hr;
          }

          setTimeout("timerCycle()", 1000);
        //   secondEl.innerHTML=`${sec}`;
        //   minuteEl.innerHTML=`${min}`;
        //   hourEl.innerHTML=`${hr}`;
        secondEl.innerHTML = sec;
        minuteEl.innerHTML=min;
        hourEl.innerHTML= hr;
        
    }
}
function resetTimer() {
    secondEl.innerHTML = '00';
    minuteEl.innerHTML = '00';
    hourEl.innerHTML ='00';
    stoptime = true;
    hr = 00;
    sec = 00;
    min = 00;
}