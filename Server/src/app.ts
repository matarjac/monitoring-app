import { connectToDB } from "./connection";
import routes from "./routes/index";
import { Server } from 'socket.io';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
});

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

let connectCounter = 0;
io.on("connection", (socket) => {
    connectCounter++;
    console.log(`Total clients connected:${connectCounter}`);

    socket.on('users_count', () => {
        socket.emit('users_count', { onlineUsers: connectCounter });
    })

    socket.on('change_code', (data) => {
        socket.broadcast.emit('receive_code_change', data);
    })
    socket.on('disconnect', () => {
        connectCounter--;
        console.log(`Total clients connected:${connectCounter}`);
    })

})

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`started listenning on http://localhost:${PORT}`));

connectToDB();
// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('chat message', (msg) => {
//         console.log('message: ' + msg);
//         io.emit('chat message', msg);
//     });
// });