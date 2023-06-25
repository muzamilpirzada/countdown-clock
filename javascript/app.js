const endDate ="1 june 2024 4:27 AM"

document.getElementById("end-date").innerHTML =endDate; 
const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff =(end - now)/ 1000;

    if(diff <0) return;
   
    // convert into days;
    inputs[0].value =Math.floor(diff /3600 /24);
    // convert into hours
    inputs[1].value =Math.floor(diff /3600) %24;
    // convert mints
    inputs[2].value =Math.floor((diff/60)%24);
    // convert seconds
    inputs[3].value =Math.floor((diff)%60);

}



setInterval(
    ()=>{
        clock()
    },
    1000
)


/**
 * 1 day = 24 hrs
 * 1 hr =60 mins
 * 60 mins = 3600 sec
 * 
 */