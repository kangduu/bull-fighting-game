const cors = require('cors'),
	express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');
const { deal } = require('./deal');
const { sources } = require('./sources');

const app = express();
app.use(cors(sources));

const HttpServer = createServer(app);
const port = 3000;

// 创建实时连接
const SocketIO = new Server(HttpServer, {
	cors: { origin: sources },
});

// 监听连接
SocketIO.on('connection', socket => {
	console.log('current-id:', socket.id);

	// 新建房间
	socket.on('create_room', data => {
		console.log('create_room:', data);
	});

	// 用户刷新页面
	socket.on('page_update', data => {
		console.log('page_update:', data);
	});

	// 加入房间
	socket.on('join_room', data => {
		console.log('join_room:', data);
	});

	// 退出请求
	socket.on('disconnect', () => {
		// 处理用户退出逻辑
	});
});

HttpServer.listen(port, () => {
	console.log(`Server listening on ${port}`);
});
