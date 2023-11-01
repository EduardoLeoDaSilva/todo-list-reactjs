import { FaTrash, FaCheck } from "react-icons/fa";
import {Task} from '../../App'

import styles from './Task.module.css'


interface TaskProps{
    task: Task;
    onDone?: (task: Task) => void;
    onDelete: (task: Task) => void;
}

export function Task({ task, onDone, onDelete} : TaskProps) {

    function handleCheckboxEvent() {
        if (onDone) {
            onDone(task);
        }
    }

    return (
        <>
            <div className={styles.task__box}>
                <button onClick={handleCheckboxEvent} className={`${styles.checkbox} ${task.isDone ? styles.checkboxMarked : styles.checkboxUnmarked}`}>{task.isDone ? <FaCheck color='#F2F2F2' /> : ''}</button>
                <p className={task.isDone == true ? styles.box__text__done : styles.box__text}>{task.text}</p>
                <button onClick={() => onDelete(task)} className={styles.task__deletebtn}><FaTrash /></button>
            </div>
        </>
    );
}