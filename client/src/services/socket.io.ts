import { io } from 'socket.io-client';

const SERVICES_URL =
	process.env.NODE_ENV === 'development' ? process.env.SERVER_ADDR : '';

function connectServices(
	connectCallback: (socket: any) => void,
	disconnectCallback: () => void
) {
	if (!SERVICES_URL) return;

	const socket_io = io(SERVICES_URL, {
		timeout: 10 * 1000,
		reconnectionDelayMax: 5,
	});

	// 连接成功
	socket_io.on('connect', () => {
		const old_id = sessionStorage.getItem('user_id');
		if (old_id) {
			socket_io.emit('update_page', { id: old_id });
			return;
		}

		sessionStorage.setItem('user_id', socket_io.id);
		connectCallback?.(socket_io);
	});

	// 页面刷新
	socket_io.on('update_page_response', () => {
		sessionStorage.setItem('user_id', socket_io.id);
		connectCallback?.(socket_io);
	});

	// 房间创建成功
	socket_io.on('created_room', room => {
		console.log(room);
		sessionStorage.setItem('room', JSON.stringify(room));
	});

	// 连接失败
	socket_io.on('connect_error', () => {
		console.log('connect_error:', socket_io);
	});

	// 断开连接
	socket_io.on('disconnect', () => {
		console.log('disconnect:', socket_io.connected);
		disconnectCallback?.();
	});
}

export { connectServices };
