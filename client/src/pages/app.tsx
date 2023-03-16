import './app.less';
import React from 'react';
import BullImg from '@/assets/bull.png';

export default function App() {
	return (
		<div className='app'>
			<img
				src={BullImg}
				alt=''
			/>
			<span>积极正能量</span>
		</div>
	);
}
