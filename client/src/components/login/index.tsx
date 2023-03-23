import styles from './styles.module.less';
import React, { useRef } from 'react';

export default function Login() {
	const UsernameRef = useRef<any>(),
		PasswdRef = useRef<any>();

	const handleSubmit = () => {
		const username = UsernameRef?.current?.value,
			passwd = PasswdRef?.current?.value;

		console.log(username, passwd);
	};

	return (
		<div className={styles.form}>
			<div className={styles.form_item}>
				<label htmlFor='username'>请输入用户名：</label>
				<input
					ref={UsernameRef}
					type='text'
					name='username'
					id='username'
					placeholder='例如：zhangs（张三）'
					autoComplete='off'
				/>
			</div>
			<div className={styles.form_item}>
				<label htmlFor='passwd'>请输入登录密码：</label>
				<input
					ref={PasswdRef}
					type='password'
					name='passwd'
					id='passwd'
					autoComplete='off'
					placeholder='默认密码，暂不支持修改密码'
				/>
			</div>
		</div>
	);
}
