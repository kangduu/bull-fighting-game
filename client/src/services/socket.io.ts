import { io } from 'socket.io-client';

const SERVICES_URL =
	process.env.NODE_ENV === 'development' ? 'ws://192.168.10.99:3000' : '';

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
		const old_id = localStorage.getItem('user_id');
		if (old_id) socket_io.emit('page_update', { old_id });
		localStorage.setItem('user_id', socket_io.id);

		connectCallback?.(socket_io);
	});

	// 连接失败
	socket_io.on('connect_error', () => {
		console.log(socket_io);
	});

	// 断开连接
	socket_io.on('disconnect', () => {
		console.log(socket_io.connected);

		disconnectCallback?.();
	});
}

export { connectServices };
