import styles from '../styles/Wall.module.css';


export default function Wall() {
  return (
    <div>
      <h1 className={styles.title}>Notas</h1>
      <input className={styles.note}/> 
    </div>
  );
}