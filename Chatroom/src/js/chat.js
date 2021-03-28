'use strict'
const socket = io();
const nickname = document.querySelector('#nickname');
const chatList = document.querySelector('.chatList');
const cahtInput = document.querySelector('#cahtInput');
const sendButton = document.querySelector('.send');

sendButton.addEventListener('click', (e) => { //클릭을 하면 아래 객체 생성 + socket에 정보 방출
    const param = {
        name : nickname.value,
        msg : cahtInput.value
    }
    socket.emit('chatting', param);
});

socket.on('chatting', (data) => { //클라이언트쪽 서버에서 보낸 내용 받아옴
    const li = document.createElement('li');
    li.innerText = `${data.name}님이 - ${data.msg}`;
    chatList.appendChild(li);
});