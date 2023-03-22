import styles from './styles.module.less';
import React from 'react';

export default function Login() {
	return (
		<form className={styles.form}>
			<div className={styles.form_item}>
				<label htmlFor='username'>请输入用户名：</label>
				<input
					type='text'
					name='username'
					id='username'
					placeholder='例如：zhangs（张三）'
				/>
			</div>
			<div className={styles.form_item}>
				<label htmlFor='passwd'>请输入登录密码：</label>
				<input
					type='password'
					name='passwd'
					id='passwd'
				/>
			</div>
			<div className={styles.form_item}>
				<button
					type='submit'
					className={styles.submit}>
					登录
				</button>
			</div>
		</form>
	);
}
