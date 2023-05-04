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
          if (e.key === 'Enter' && e.target.value.trim() !== '') { // si se ingresa algun texto y eliminar los espacios 
            setNotes([...notes, e.target.value]); // agrego un nuevo elemento al existenete
            e.target.value = ''; // asigno una cadena vacía 
          }
        }} /> 
       <div className="notesContainer">
      {notes.map((note, index) => ( //itera sobre note y para cada elemento se ejecuta una función que renderiza como nota
        <div key={index} className={styles.note}>
           {note}
           <button className={styles.deleteButton} onClick={() => noteDelete(index)}>
         <img src="/Images/delete.svg" alt="Delete Note" />
          </button>
        </div>
      ))}
      </div>
      </div>
  );
}