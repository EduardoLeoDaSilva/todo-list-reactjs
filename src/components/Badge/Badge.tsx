import styles from './Badge.module.css'
export function Badge({text} : {text: string}) {
    return (
        <>
            <div className={styles.badge}>{text}</div>
        </>
    );
}