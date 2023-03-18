import React from "react";
import styles from "./styles.module.less";

export interface CardProps extends ComponentCSSProps {
    children?: React.ReactNode
}

function Card(props: CardProps) {
    const { className, style, children } = props
    return <div
        className={[styles.card, className || ''].join(' ')}
        style={{ ...style }}>
        {children}
    </div>
}

export default Card;