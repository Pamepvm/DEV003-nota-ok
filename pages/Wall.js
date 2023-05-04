import { useState } from 'react'; //variables que se repiten en una página
import styles from '../styles/Wall.module.css';

export default function Wall() {
  const [notes, setNotes] = useState([]); // estado de las notas y fun. que setNotes actualiza los datos
  function noteDelete(index) {
    setNotes(notes.filter((note, i) => i !== index)); //elimino el elemento en posicion index
  }
  return (
    <div>
      <h1 className={styles.title}>Notas</h1>
      <input className={styles.note} placeholder="Escribe una nota"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') { // eliminar los espacios en blanco en cada extremo
            setNotes([...notes, e.target.value]);
            e.target.value = '';
          }
        }} /> 
       {notes.map((note, index) => (
        <div key={index} className={styles.note}>
           {note}
           <button className={styles.deleteButton} onClick={() => noteDelete(index)}>
            Borrar
          </button>
        </div>
      ))}
    </div>
  );
}