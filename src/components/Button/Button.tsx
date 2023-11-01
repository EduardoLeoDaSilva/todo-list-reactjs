import { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.css'

interface ButtonProps{
    label: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    icon: ReactNode
}

export function Button({ label, onClick, icon } : ButtonProps) {
       return (
        <>
            <button
                type='submit'
                onClick={onClick} 
                className={`${styles.button} ${styles.buttonBorder}`}>
                {label}
                {icon}
            </button>
        </>
    );
}