import styles from './app.module.less';
import React from 'react';
import { ReactComponent as BullSvg } from '@/assets/bull.svg';
import { ReactComponent as FiredSvg } from '@/assets/fired.svg';
import Card from '@/components/card';
import CreateRoom from '@/components/create-room';
import { connectServices } from '@/services/socket.io';

const SocketContext = React.createContext(null);
export default function App() {
	const [socket, setSocket] = React.useState<any>(null);
	React.useEffect(() => {
		connectServices(
			socket => setSocket(socket),
			() => setSocket(null)
		);
	}, []);

	// 创建斗牛牛游戏，新建房间
	const handleCreateBullFightingGame = () => {
		try {
			let total: string | number | null = window.prompt('请输入玩家数量', '6');

			if (total === null) return; // 取消

			if (total) {
				total = Number(total);
				if (isNaN(total)) throw Error();
				// 开始创建房间
				if (!socket) return;
				socket?.emit?.('create_room', {
					id: socket.id,
					type: 'bull',
					total: 6,
				});
			} else throw Error();
		} catch (error) {
			const rewrite = window.confirm('玩家数量输入有误，是否重新输入?');
			if (rewrite) handleCreateBullFightingGame();
		}
	};

	const handleJoinBullFightingGame = () => {
		try {
			const reg_exp = /^\d{4}$/;
			let room: string | number | null = window.prompt('请输入4位房间号码');

			if (room === null) return; // 取消

			if (reg_exp.test(room)) {
				// 开始创建房间
				if (!socket) return;
				socket?.emit?.('join_room', {
					id: socket.id,
					type: 'bull',
					room,
				});
			} else throw Error();
		} catch (error) {
			const rewrite = window.confirm('房间号码输入格式有误，是否重新输入?');
			if (rewrite) handleJoinBullFightingGame();
		}
	};

	return (
		<SocketContext.Provider value={socket}>
			<Card className={styles.each_card}>
				<BullSvg className={styles.icon} />
				<span className={styles.name}>斗牛牛</span>
				<CreateRoom
					onCreate={handleCreateBullFightingGame}
					onJoin={handleJoinBullFightingGame}
				/>
			</Card>
			<Card className={styles.each_card}>
				<FiredSvg className={styles.icon} />
				<span className={styles.name}>炸金花</span>
				<CreateRoom
					onCreate={() => alert('开发中。。。')}
					onJoin={() => alert('开发中。。。')}
				/>
			</Card>
		</SocketContext.Provider>
	);
}
