let button=document.getElementById("btn");
button.addEventListener("mouseover",function(){
    this.innerText="Party Time";
})
button.addEventListener("mouseout",function(){
    this.innerText="Set Alarm";
})


button.addEventListener("click",function(){
    
    let date=new Date();
    let hours=date.getHours();
    let wakeuptime = document.getElementById("wakeuptime"); 
    let lunchtime = document.getElementById("lunchtime"); 
    let naptime = document.getElementById("naptime"); 
    let nighttime = document.getElementById("nighttime");

//     let a=document.getElementById("wakeuptime").value;

//    if(a== hours){

    if(parseInt(wakeuptime.value)===hours){
        document.getElementById("settime").innerText="GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("card_img").style.backgroundImage ="url(./OIP.jpeg)";
    }
    if(parseInt(lunchtime.value)===hours){
        document.getElementById("settime").innerText="LET'S HAVE SOME LUNCH!!!";
        document.getElementById("card_img").style.backgroundImage ="url(./lunch.jpeg)";
    }
    if(parseInt(naptime.value)===hours){
        document.getElementById("settime").innerText="STOP YAWNING,GET SOME TEA...I'TS JUST EVENING!!!";
        document.getElementById("card_img").style.backgroundImage ="url(./even.jpg)";
    }
    if(parseInt(nighttime.value)===hours){
        document.getElementById("settime").innerText="CLOSE YOUR EYES AND GOT TO SLEEP";
        document.getElementById("card_img").style.backgroundImage ="url(./night.webp)";
    }

    let timing=document.getElementsByClassName("timing");

timing[0].innerText=wakeuptime.options[wakeuptime.selectedIndex].text
timing[1].innerText=lunchtime.options[lunchtime.selectedIndex].text
timing[2].innerText=naptime.options[naptime.selectedIndex].text
timing[3].innerText=nighttime.options[nighttime.selectedIndex].text


})


function clock(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    console.log(hours,minutes,seconds);
      if(hours > 12){
        hours = hours-12;
       }    
    let hrs=document.getElementById("hrs");
    hrs.innerText = hours;

    let mins=document.getElementById("mins");
    mins.innerText = minutes;

    let secs=document.getElementById("secs");
    secs.innerText = seconds;
    
}

 setInterval(()=>{
        clock();
    },1000)

let date=new Date();
let hours=date.getHours();

if(hours>=12) {
    let ampm=document.getElementById("ampm");
        ampm.innerText="PM";
    }
else if(hours <12) {
    let ampm = document.getElementById("ampm");
    ampm.innerText = "AM";
}

let greeting=document.getElementById("greeting");
if(hours<12){
    greeting.innerText="GOOD MORNING!! WAKE UP!!";
}
if(hours >=12 && hours < 16) {
    greeting.innerText = "GOOD AFERTNOON!!";
}
if(hours >=16 && hours < 20) { 
    greeting.innerText = "GOOD EVENING!!";
}

if(hours >= 20 && hours < 24) {
    greeting.innerText = "GOOD NIGHT!!";
}







