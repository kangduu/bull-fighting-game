import styles from './styles.module.less';
import React, { useRef } from 'react';

export default function JoinRoom() {
	const CountRef = useRef<any>();

	const handleSubmit = () => {
		const number = CountRef?.current?.value;
		console.log(number);
	};

	return (
		<div className={styles.form}>
			<div className={styles.form_item}>
				<label htmlFor='number'>请输入房间号码：</label>
				<input
					ref={CountRef}
					type='number'
					name='number'
					id='number'
					autoComplete='off'
					placeholder='4位数房间号码'
				/>
			</div>
		</div>
	);
}
