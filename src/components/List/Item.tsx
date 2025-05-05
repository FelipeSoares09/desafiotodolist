import styles from './Item.module.css';

export function Item({ tasks }: { tasks: string[] }) {
    
    return (
        <ul className={styles.container}>
            {tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>
    );
}