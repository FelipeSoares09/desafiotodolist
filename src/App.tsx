import { PlusCircle } from "phosphor-react";
import { Empty } from "./components/List/Empty";
import { Header as ListHeader } from "./components/List/Header";
import { Header } from "./components/Header"
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import styles from './App.module.css'

export function App() {

  return (
    <>
      <div>
        <Header />
      </div>
        
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
            <Input />
            <Button>
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

