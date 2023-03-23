import styles from './app.module.less';
import React from 'react';
import { ReactComponent as BullSvg } from '@/assets/bull.svg';
import { ReactComponent as FiredSvg } from '@/assets/fired.svg';
import Card from '@/components/card';
import Operation from '@/components/operation';
import { connectServices } from '@/services/socket.io';
import Modal from '@/components/modal';
import Login from '@/components/login';
import JoinRoom from '@/components/join-room';

const SocketContext = React.createContext(null);
export default function App() {
	const [socket, setSocket] = React.useState<any>(null);
	React.useEffect(() => {
		Modal({
			content: <Login />,
			title: '登录',
			onOk: () => {},
			okText: '登录',
			cancelText: '稍后',
			closable: false,
		});
		// connectServices(
		// 	socket => setSocket(socket),
		// 	() => setSocket(null)
		// );
		// fetch(process.env.SERVER_ADDR + '/login', {
		// 	method: 'POST',
		// 	// mode: 'cors',
		// 	// cache: 'no-cache',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({
		// 		username: 'duk',
		// 		passwd: '123456',
		// 	}),
		// });
		// fetch(process.env.SERVER_ADDR + '/user');
	}, []);

	// 创建斗牛牛游戏，新建房间
	const handleCreateBullFightingGame = () => {
		try {
			Modal({
				content: <Login />,
				title: '创建房间',
				onOk: () => {},
			});
			// let total: string | number | null = window.prompt(
			// 	'请输入玩家数量【2-10】',
			// 	'6'
			// );
			// if (total === null) return; // 取消

			// if (total) {
			// 	total = Number(total);
			// 	if (isNaN(total) || total < 2 || total > 10) throw Error();
			// 	// 开始创建房间
			// 	if (!socket) return;
			// 	socket?.emit?.('create_room', {
			// 		id: socket.id,
			// 		type: 'bull',
			// 		total,
			// 	});
			// } else throw Error();
		} catch (error) {
			// const rewrite = window.confirm('玩家数量输入有误，是否重新输入?');
			// if (rewrite) handleCreateBullFightingGame();
		}
	};

	const handleJoinBullFightingGame = () => {
		try {
			Modal({
				content: <JoinRoom />,
				title: '加入游戏',
				onOk: () => {},
			});
			// const reg_exp = /^\d{4}$/;
			// let room: string | number | null = window.prompt('请输入4位房间号码');
			// if (room === null) return; // 取消
			// if (reg_exp.test(room)) {
			// 	// 开始创建房间
			// 	if (!socket) return;
			// 	socket?.emit?.('join_room', {
			// 		id: socket.id,
			// 		type: 'bull',
			// 		room,
			// 	});
			// } else throw Error();
		} catch (error) {
			// const rewrite = window.confirm('房间号码输入格式有误，是否重新输入?');
			// if (rewrite) handleJoinBullFightingGame();
		}
	};

	return (
		<SocketContext.Provider value={socket}>
			<Card className={styles.each_card}>
				<BullSvg className={styles.icon} />
				<span className={styles.name}>斗牛牛</span>
				<Operation
					onCreate={handleCreateBullFightingGame}
					onJoin={handleJoinBullFightingGame}
				/>
			</Card>
			<Card className={styles.each_card}>
				<FiredSvg className={styles.icon} />
				<span className={styles.name}>炸金花</span>
				<Operation
					onCreate={() => alert('开发中。。。')}
					onJoin={() => alert('开发中。。。')}
				/>
			</Card>
		</SocketContext.Provider>
	);
}
