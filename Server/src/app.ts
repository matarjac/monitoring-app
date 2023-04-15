import { connectToDB } from "./connection";
import routes from "./routes/index";
import { Server } from 'socket.io';
import { updateCodeBlock } from "./services/codeBlocksServices/codeBlocks.services";

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"],
        credentials: true
    }
});

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

let connectCounter = 0;
let currentCodeBlockID = '';
let currentCode = '';

io.on("connection", (socket) => {
    connectCounter++;

    socket.on('socket_id', () => {
        socket.emit('receive_socket_id', { id: socket.id });
    });

    socket.on('users_count', () => {
        socket.emit('receive_users_count', { onlineUsers: connectCounter });
    });

    socket.on('change_code', (data, room) => {
        socket.to(room).emit('receive_code_change', data);
        currentCode = data.code;
    });

    socket.on('join_room', (room) => {
        socket.join(room);
        currentCodeBlockID = room;
    })

    socket.on('leave_room', (room) => {

        // update DB when user leave codeBlock page only if user is not Mentor
        if (currentCodeBlockID && currentCode) {
            updateCodeBlock(currentCodeBlockID, currentCode);
            currentCode = '';
        }
        socket.leave(room);
    })

    socket.on('disconnect', () => {
        connectCounter--;
    })
})

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`started listenning on http://localhost:${PORT}`));

connectToDB();