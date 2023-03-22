import type { ModalConfig } from '.';
import style from './styles.module.less';
import React from 'react';
type MaskProps = React.PropsWithChildren<ComponentCSSProps> &
	Omit<ModalConfig, 'content'> & {
		onClose: () => void;
	};
export default function Mask(props: MaskProps) {
	const handleClickMask = (e: React.BaseSyntheticEvent) => {
		if (!props.maskClosable) return;

		e.preventDefault();
		const target = e.target;
		if (target && target.dataset && target.dataset.type === 'mask-div') {
			props.onClose?.();
		}
	};
	return (
		<div
			className={style.modal_layer}
			onClick={handleClickMask}
			data-type='mask-div'>
			<div
				style={{ ...props.style }}
				className={[style.content, props.className || ''].join(' ')}>
				{props.children}
			</div>
		</div>
	);
}
