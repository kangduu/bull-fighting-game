import styles from './styles.module.less';
import React from 'react';

export interface CreateRoomProps {
	onCreate?: () => void;
	onJoin?: () => void;
}

export default function CreateRoom({ onCreate, onJoin }: CreateRoomProps) {
	return (
		<div className={styles.operation}>
			<span
				className={styles.create}
				onClick={onCreate}>
				新建房间
			</span>
			<span
				className={styles.join}
				onClick={onJoin}>
				加入
			</span>
		</div>
	);
}
