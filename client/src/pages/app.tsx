import styles from './app.module.less';
import React, { useEffect } from 'react';
import BullImg, { ReactComponent as BullSvg } from '@/assets/bull.svg';
import { io } from 'socket.io-client';

export default function App() {
	useEffect(() => {
		const socketIO = io('ws://192.168.88.59:3000');

		socketIO.on('connect', () => {
			localStorage.setItem('user_id', socketIO.id);
			console.log(socketIO.id);
		});

		socketIO.on('disconnect', () => {
			console.log(socketIO.connected); // false
		});

		socketIO.emit('login', { user: 'duk', captcha: '12345' });

	}, []);
	return <main className={styles['app']}>
		<img src={BullImg} alt='' />
		<BullSvg width={20} height={20} fill="#f30" />
	</main>;
}
