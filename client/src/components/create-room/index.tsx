import styles from './styles.module.less';
import React, { useRef } from 'react';

export default function CreateRoom() {
	const CountRef = useRef<any>();

	const handleSubmit = () => {
		const count = CountRef?.current?.value;
		console.log(count);
	};

	return (
		<div className={styles.form}>
			<div className={styles.form_item}>
				<label htmlFor='count'>请输入玩家数量：</label>
				<input
					ref={CountRef}
					type='number'
					name='count'
					id='count'
					autoComplete='off'
					placeholder='最少2人，最多10人'
				/>
			</div>
		</div>
	);
}
