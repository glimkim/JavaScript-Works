const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketIO = require('socket.io');
const path = require('path');
const moment = require('moment');

const io = socketIO(server);

app.use(express.static(path.join(__dirname, 'src')));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {console.log(`Server is running at ${PORT}`)});

io.on('connection', (socket) => { //서버쪽
    socket.on('inAlert', (data) => {
        const { name } = data;
        io.emit('inAlert', {
            name
        });
    }); 
    socket.on('chatting', (data) => {
        const { name, msg } = data;
        io.emit('chatting', {
            name,
            msg,
            time: moment(new Date()).format('h:mm A')
        });
    });
});
