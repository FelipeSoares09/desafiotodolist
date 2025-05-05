import { PlusCircle } from "phosphor-react";
import { Empty } from "./components/List/Empty";
import { Header as ListHeader } from "./components/List/Header";
import { Header } from "./components/Header"
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import styles from './App.module.css'
import { useState } from "react";

interface Task {
  text: string;
  completed: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleNewTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

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
          <ListHeader totalTasks={totalTasks} completedTasks={completedTasks} />
          {tasks.length > 0 ? (
            <ul className={styles.taskList} style={{ listStyle: "none"}}>
              {tasks.map((task, index) => (
                <li key={index} className={styles.taskItem}>
                  <input type="radio" checked={task.completed} onChange={() => toggleTaskCompletion(index)} />

                  <span style={{marginLeft: "8px", textDecoration: task.completed ? "line-through" : "none", color: task.completed ? "#888" : "#ffff", }}>
                    {task.text}
                    
                  </span>
                
                
                </li>
              ))}
            </ul>
          ) : (
            <Empty />
          )}
        </div>
      </section>

    </>
  )
}

