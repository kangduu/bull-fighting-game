const cors = require('cors'),
	express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');
const { deal } = require('./deal');

const app = express();
app.use(cors('http://192.168.88.59:9999'));

const HttpServer = createServer(app);
const port = 3000;

// 创建实时连接
const SocketIO = new Server(HttpServer, {
	cors: { origin: 'http://192.168.88.59:9999' },
});

// 监听连接
SocketIO.on('connection', socket => {
	// 处理用户登录和注册请求
	socket.on('login', data => {
		// 处理用户登录逻辑
		console.log(data);
	});

	socket.on('register', data => {
		// 处理用户注册逻辑
	});

	// 处理炸金花游戏请求
	socket.on('start_game', data => {
		// 处理炸金花游戏逻辑
	});

	// 处理用户退出请求
	socket.on('disconnect', () => {
		// 处理用户退出逻辑
	});
});

HttpServer.listen(port, () => {
	console.log(`Server listening on ${port}`);
});
