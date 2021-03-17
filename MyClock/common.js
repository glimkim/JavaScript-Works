function clock(){
    var today = new Date();
    var clockDate = [today.getFullYear(), today.getMonth() + 1, today.getDate()];
    var clockTime = [today.getHours(), today.getMinutes(), today.getSeconds()];

    var w = today.getDay();
    var week = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    
    var time = document.getElementsByTagName('h2');
    var day = document.getElementById('weekday');
    var date = document.getElementsByTagName('h3');
    
    for(var i in date){
        if(clockDate[i] >= 10){
            date[i].textContent = clockDate[i];
        }else{
            date[i].textContent = '0' + clockDate[i];
        }
    }
    for(var i in time){
        if(clockTime[i] >= 10){
            time[i].textContent = clockTime[i];
        }else{
            time[i].textContent = '0' + clockTime[i];
        }  
    }
    day.textContent = week[w];
}

clock();

setInterval(clock, 1000);