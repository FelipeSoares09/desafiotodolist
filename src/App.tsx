import { PlusCircle } from "phosphor-react";
import { Empty } from "./components/List/Empty";
import { Header as ListHeader } from "./components/List/Header";
import { Header } from "./components/Header"
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import styles from './App.module.css'
import { useState } from "react";


export function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleNewTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <>
      <div>
        <Header />
      </div>
        
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
            <Input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <Button onClick={handleNewTask}>
              Criar
              <PlusCircle size={16} color="#f2f2f2" weight="bold" />
            </Button>
        </div>
        <div className={styles.tasksList}>
          <ListHeader />
          <Empty />
        </div>
      </section>

    </>
  )
}

