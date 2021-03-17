function clock(){
    var today = new Date();
    var clockDate = [today.getFullYear(), today.getMonth() + 1, today.getDate()];
    var clockTime = [today.getHours(), today.getMinutes(), today.getSeconds()];


    var today = new Date();
    var clockDate = [today.getFullYear(), today.getMonth() + 1, today.getDate()];
    var clockTime = [today.getHours(), today.getMinutes(), today.getSeconds()];

    var weekDay = today.getDay();
    var week = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

    var time = document.getElementsByClassName('time');
    var date = document.getElementsByClassName('date');

    for(var i in time){
        if(clockTime[i] < 10){
            time[i].textContent = '0' + clockTime[i];
        }else{
            time[i].textContent = clockTime[i];
        }
    }
 
    for(var i in date){
        if(clockDate[i] < 10){
            date[i].textContent = '0' + clockDate[i];
        }else{
            date[i].textContent = clockDate[i];
        }
    }

}

clock();

setInterval(clock, 1000);