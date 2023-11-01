import styles from "./App.module.css";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { FaPlusCircle } from "react-icons/fa";
import { Task } from "./components/Task/Task";
import { Badge } from "./components/Badge/Badge";
import { ChangeEvent, FormEvent, useState } from "react";

export interface Task {
  id: string;
  text: string;
  isDone: boolean;
}

export default function App() {




  const [tasks, setTaskState] = useState<Task[]>([]);
  const [newTask, setNewTaskState] = useState<Task>();
  const taskConcluded = tasks.filter(x => x.isDone == true);
  const taskNotConcluded = tasks.filter(x => x.isDone == false);

  function handleNewTask(event: FormEvent) {
    event.preventDefault();
    setNewTaskState({ text: newTask!.text, isDone: newTask!.isDone, id: Math.random().toString() });
    setTaskState([...tasks, newTask!]);
  }

  function handleNewTaskOnChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskState({ text: event.target.value, isDone: false, id: Math.random().toString() });
  }

  function handleTaskDone(task: Task) {
    const updatedTasks = tasks.map(x => {
      if (x.id == task.id) {
        x.isDone = !x.isDone;
      }
      return x;
    });
    setTaskState(updatedTasks);
  }

  function handleDeleteTask(task: Task){

    const notDeletedTask = tasks.filter(x => task.id != x.id);
    setTaskState(notDeletedTask);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.search}>
          <form onSubmit={handleNewTask} className={styles.search__aligned}>
            <Input onChange={handleNewTaskOnChange} name="newTask" className={styles.search__input} placeholderText="Adicione uma nova tarefa" />
            <Button label="Criar" icon={<FaPlusCircle />} />
          </form>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.container__headline}>
            <div className={styles.headline__createdTask}>Tarefas criadas <Badge text={taskNotConcluded.length.toString()} /></div>
            <div className={styles.headline__concludedTask}>Concluídas <Badge text={taskConcluded.length.toString()} /></div>
          </div>

          <ul className={styles.taskList}>
            {
              tasks.map(task => {
                return <div key={task.id}><Task onDelete={handleDeleteTask} onDone={handleTaskDone} task={task} /></div>;
              })
            }
          </ul>
        </div>
      </main>
    </>
  );
}

