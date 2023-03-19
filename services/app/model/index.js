const createRoom = require('./hooks/create-room');
const updateClient = require('./hooks/update-client');

function modelHandler(socket_io) {
	// 监听连接
	socket_io.on('connection', socket => {
		console.log('[connection id] ', socket.id);

		// 全局房间集合
		const rooms = new Map();

		// 新建房间
		socket.on('create_room', createRoom.bind(socket, rooms));

		// 用户刷新页面
		socket.on('update_page', updateClient.bind(socket, rooms));

		// 加入房间
		socket.on('join_room', data => {
			console.log('join_room:', data);
		});

		// 退出请求
		socket.on('disconnect', () => {
			// 处理用户退出逻辑
		});
	});
}

module.exports = modelHandler;
