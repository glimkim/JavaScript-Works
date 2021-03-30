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
    //name
    const li = document.createElement('li');
    const profile = document.createElement('span');
    const figure = document.createElement('figure');
    const user = document.createElement('span');
    const img = document.createElement('img');    

    img.setAttribute('src', 'https://placeimg.com/50/50/any',);

    figure.appendChild(img);

    profile.className = 'profile';
    user.className = 'user';

    user.innerText = `${data.name}`;

    profile.appendChild(user);
    profile.appendChild(figure);

    //msg
    const message = document.createElement('div');
    const contents = document.createElement('span');
    const time = document.createElement('time');

    message.className = 'message';
    contents.className = 'contents';
    time.className = 'time';

    const now = new Date();
    const timeNow = `${now.getHours()}:${now.getMinutes()}`;

    contents.innerText = `${data.msg}`;
    time.innerText = `${timeNow}`;

    message.appendChild(contents);
    message.appendChild(time);

    li.appendChild(profile);
    li.appendChild(message);

    chatList.appendChild(li);
});