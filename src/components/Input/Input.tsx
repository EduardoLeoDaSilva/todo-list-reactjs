import { ChangeEventHandler, HTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends HTMLAttributes<HTMLInputElement>{
    placeholderText: string;
    name : string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export function Input({ placeholderText, name, onChange } : InputProps) {
    return (
        <>
            <input
            onChange={onChange}
            name={name}
            className={styles.header__input}
            type="text"
            placeholder={placeholderText}
          />
        </>
    );
}