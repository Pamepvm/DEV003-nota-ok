import { useState } from 'react'; //variables que se repiten en una página
import styles from '../styles/Wall.module.css';
import { guardarNota } from './funcionesfirebase.js';

export default function Wall() {
  const [notes, setNotes] = useState([]); // estado de las notas y fun. que setNotes actualiza los datos
  const [currentNote, setCurrentNote] = useState(''); // agrego el estado para la nota actual

  function noteDelete(index) {
    setNotes(notes.filter((note, i) => i !== index)); //elimino el elemento en posicion index
  }

  function saveNote() {
    if (currentNote.trim() !== '') { // si se ingresa algun texto y eliminar los espacios
      guardarNota(currentNote);// cambiar guardaNota por guardarNota
      setCurrentNote(''); // reiniciar el estado currentNote
      setNotes([...notes, currentNote]);
    }
  }

return (
    <div>
      <div className={styles.topBar}> <button className={styles.exitButton}   onClick={() => { window.location.href = '/'; }}>
        <img className={styles.exitButton} src="/Images/cancel_presentation_black_24dp.svg" alt="salir"/></button>

      </div>
        <h1 className={styles.title}>Notas</h1>
      
      <input
        className={`${styles.note} ${styles.noteInput}`} placeholder="Escribe una nota" 
        value={currentNote}// mensaje se ingresa y se guarda en currentNote, para saber el estado del input
        onChange={(e) => setCurrentNote(e.target.value)}//actualizo el estado
        onKeyDown={(e) => {
          if (e.key === 'Enter') { // verifico si la tecla se activa, si es así se guarda
            saveNote();
          }
        }}
      />
      <button className={styles.saveButton} onClick={saveNote}>
        Guardar Nota
      </button>
   
     <div className="notesContainer">
        {notes.map((note, index) => ( // itero sobre lamatriz notes (argumentos) key identifica de forma única c/ elemento de la lista
          <div key={index} className={styles.note}> 
            {note}
            <button className={styles.deleteButton} onClick={() => noteDelete(index)}>
              <img className={styles.delete} src="/Images/delete_white_24dp.svg" alt="Delete Note"/>
            </button>
          </div>
        ))}
     </div>
    </div>
  );
}


