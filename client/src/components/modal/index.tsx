import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Mask from './mask';

function CreateContainer(): HTMLDivElement {
	const container: HTMLDivElement = document.createElement('div');
	document.body.appendChild(container);
	return container;
}

export interface ModalConfig {
	content: React.ReactNode;
	maskClosable?: boolean;
}

function Modal(config: ModalConfig) {
	try {
		const container = CreateContainer();
		if (container) {
			const root = ReactDOMClient.createRoot(container);

			const close = () => {
				try {
					root.unmount();
					document.body.removeChild(container);
				} catch (error) {}
			};

			const { content, ...restConfig } = config;

			root.render(
				<Mask
					{...restConfig}
					onClose={close}>
					{content}
				</Mask>
			);

			return close;
		}
		return null;
	} catch (error) {}
}

export default Modal;
