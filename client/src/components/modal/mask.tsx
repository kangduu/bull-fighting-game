import type { ModalConfig } from '.';
import styles from './styles.module.less';
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
			className={styles.modal_layer}
			onClick={handleClickMask}
			data-type='mask-div'>
			<div className={styles.content}>
				<div className={styles.header}>
					<span>{props.title || '标题'}</span>
					{props.closable ? (
						<span
							className={styles.close}
							onClick={props.onClose}>
							X
						</span>
					) : null}
				</div>
				<div
					style={{ ...props.style }}
					className={[styles.body, props.className || ''].join(' ')}>
					{props.children}
				</div>
				<div className={styles.footer}>
					<button
						type='submit'
						className={styles.cancel}
						onClick={() => {
							props.onCancel?.();
							props.onClose?.();
						}}>
						{props.cancelText || '取消'}
					</button>
					<button
						type='submit'
						className={styles.ok}
						onClick={props?.onOk?.bind(null, props.onClose)}>
						{props.okText || '确认'}
					</button>
				</div>
			</div>
		</div>
	);
}
