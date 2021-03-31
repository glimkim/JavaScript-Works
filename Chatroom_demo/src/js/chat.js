'use strict'
const socket = io();
const nickname = document.querySelector('#nickname');
const chatList = document.querySelector('.chatList');
const chatInput = document.querySelector('#chatInput');
const sendButton = document.querySelector('.send');
const displayContainer = document.querySelector('.displayContainer');

function send(){
    const param = {
        name : nickname.value,
        msg : chatInput.value
    }
    socket.emit('chatting', param);
    chatInput.value = '';
}

chatInput.addEventListener('keypress', (e) => {
    if(e.keyCode === 13 && e.keyCode != 16){
        send();
    }
});
sendButton.addEventListener('click', send);

function LiModel(name, msg, time){
    this.name = name;
    this.msg = msg;
    this.time = time;

    this.makeLi = () => {
        const li = document.createElement('li');
        li.classList.add(nickname.value==this.name?'sent':'received');
        const dom = 
        `
        <div class="profile">
            <span class="user">${this.name}</span>
            <figure>
                <img src="https://placeimg.com/50/50/any" alt="any image">
            </figure>
        </div>
        <div class="message">
            <span class="contents">${this.msg}</span>
            <span class="time">${this.time}</span>
        </div>
        `;
        li.innerHTML = dom;
        chatList.appendChild(li);
    }
}

socket.on('chatting', (data) => { //클라이언트쪽 서버에서 보낸 내용 받아옴
    const {name, msg, time}  = data;
    const item = new LiModel(name, msg, time);
    item.makeLi();
    displayContainer.scrollTo(0, displayContainer.scrollHeight);
});