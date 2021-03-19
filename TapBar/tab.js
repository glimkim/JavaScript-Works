//문서클래스 담기
var tabLink = document.getElementsByClassName('tabLink');
var tabContent = document.getElementsByClassName('tabContent');

//첫 요소들의 버튼 활성화, 컨텐츠 활성화
//className : 문서객체의 클래스명을 컨트롤하는 속성

tabLink[0].className += ' active'; //뒤에 더해서 대입!!
tabContent[0].style.display = 'block';

/* function tab(){
    tabContent[].style.display = 'none';
    this.style.display = 'block';
} */

for( var i=0; i<tabLink.length;i++){
    tabLink[i].addEventListener('click',function(){
        for(var j =0;j<tabLink.length;j++){
            tabLink[j].className = 'tabLink';
            tabContent[j].style.display = 'none';
        }
        this.className += ' active';
        
        /* tabContent[i].style.display = 'block'; */
        var getId = this.textContent.toLowerCase();
        document.getElementById(getId).style.display = 'block';
    });

}

/* 
var london = document.getElementById('london');
var paris = document.getElementById('paris');
var madrid = document.getElementById('madrid');

london.style.display = 'block'; */