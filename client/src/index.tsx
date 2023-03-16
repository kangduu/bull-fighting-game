import '@/styles/global.less';
import App from '@/pages/app';
import React from 'react'; // todo 解决默认导入的问题
import * as ReactDOM from 'react-dom/client';

const container: HTMLDivElement | null = document.querySelector('#root');
if (container) {
	const root = ReactDOM.createRoot(container);
	root.render(<App />);
}
