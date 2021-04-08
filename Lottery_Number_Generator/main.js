const ul = document.querySelector('ul');
const button = document.querySelector('.generate');

function LottoGenerator(){
    const lotteryNumber = [];
    let num;

     for(var i=0;i<6;i++){
        num = Math.round(Math.random() * 45);

         for(var j in lotteryNumber){
            if(num == lotteryNumber[j] || num == 0){
                num = Math.round(Math.random() * 45);
            }
        }

         lotteryNumber.push(num);
    }

     lotteryNumber.sort(function(a,b){return a - b});

     for(var i in lotteryNumber){
        var li = document.createElement('li');
        li.textContent = lotteryNumber[i];
        if(li.textContent < 10){
            li.style.backgroundColor = '#f18e05';
        }else if(li.textContent < 20){
            li.style.backgroundColor = '#1f9523';
        }else if(li.textContent < 30){
            li.style.backgroundColor = '#0548ac';
        }else if(li.textContent < 40){
            li.style.backgroundColor = '#ffd900';
            li.style.color = '#999';
        }
        ul.appendChild(li);
    }
}

button.addEventListener('click', () => {
    if(button.textContent == 'Retry'){
        ul.innerHTML = '';
        LottoGenerator();
    }else{
        LottoGenerator();
        button.textContent = 'Retry';
    }
});