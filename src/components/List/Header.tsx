import styles from './Header.module.css'

interface ListHeaderProps {
    totalTasks: number;
    completedTasks: number;
}


export function Header({ totalTasks, completedTasks }: ListHeaderProps) {
    return (
        <header className={styles.container}>
              <aside>
                  <p>Tarefas criadas</p><span>{totalTasks}</span>
              </aside>

              <aside>
                    <p>Concluídas</p><span>{completedTasks} de {totalTasks}</span>
                </aside>
        </header>
    )
}