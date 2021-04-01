'use strict'
const socket = io();
const nickname = document.querySelector('#nickname');
const nextButton = document.querySelector('#next01');
const select01 = document.querySelector('.select01');

const chatRoom = document.querySelector('.chatRoom');
const displayContainer = document.querySelector('.displayContainer');
const chatList = document.querySelector('.chatList');
const message = document.querySelector('#message');
const sendButton = document.querySelector('#send');

chatRoom.style.display = 'none';

const param = {}

nextButton.addEventListener('click', () => {
    param.name = nickname.value;
    socket.emit('inAlert', param);
    select01.style.display = 'none';
    chatRoom.style.display = 'block';
});

socket.on('inAlert', (data) => {
    const inAlert = document.createElement('li');
    inAlert.classList.add('inAlert');
    inAlert.innerText = `${data.name} joined`;
    chatList.appendChild(inAlert);
});

sendButton.addEventListener('click', () => {
    param.msg = message.value;
    socket.emit('chatting', param);
});

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

socket.on('chatting', (data) => {
    console.log(data);
    const {name, msg, time} = data;
    const aMessage = new LiModel(name, msg, time);
    aMessage.makeLi();
});