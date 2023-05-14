import { useState, useEffect } from "react"; //permite agregar estados a un componente funcional y para bajar textos
import styles from "../styles/Wall.module.css";
import {
  guardarNota,
  obtenerNotas,
  eliminarNota,
} from "./funcionesfirebase.js";

export default function Wall() {
  const [notes, setNotes] = useState([]); // estado de las notas y fun. que setNotes actualiza los datos
  const [currentNote, setCurrentNote] = useState(""); // agrego el estado para la nota actual

  useEffect(() => {
    obtenerNotasFirebase();
  }, []);

  async function obtenerNotasFirebase() {
    const fetchedData = await obtenerNotas();
    setNotes(fetchedData);
  }

  function saveNote() {
    if (currentNote.trim() !== "") {
      // si se ingresa algun texto y eliminar los espacios
      guardarNota(currentNote); // guardo nota en firebase, tomo como argumento el contenido de la nota
      setCurrentNote(""); // reiniciar el estado currentNote para ingresar otro texto
      obtenerNotasFirebase();
    }
  }
  function deleteNote(noteId) {
    eliminarNota(noteId);
    //const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(notes.filter((nota) => nota.id !== noteId));
  }
  useEffect(() => {
    obtenerNotasFirebase();
  }, [notes]);

  /*function sortNotes() {
    const sortedNotes = [...notes].sort((a, b) => b.fecha - a.fecha);
    setNotes(sortedNotes);
  }*/

  return (
    <div>
      <div className={styles.topBar}>
        <button
          className={styles.exitButton}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <img
            className={styles.exitButton}
            src="/Images/cancel_presentation_black_24dp.svg"
            alt="salir"
          />
        </button>
      </div>
      <h1 className={styles.title}>Notas</h1>
      <input
        className={`${styles.note} ${styles.noteInput}`}
        placeholder="Escribe una nota"
        value={currentNote} // mensaje se ingresa y se guarda en currentNote, para saber el estado del input
        onChange={(e) => setCurrentNote(e.target.value)} //actualizo el estado
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // verifico si la tecla se activa, si es así se guarda
            saveNote();
          }
        }}
      />
      <button className={styles.saveButton} onClick={saveNote}>
        Guardar Nota
      </button>

      <div className={styles.notesContainer}>
        {notes
          .sort((a, b) => b.timestamp - a.timestamp) // ordenar notas por fecha descendente
          .map((note) => (
            <div key={note.id} className={styles.note}>
              {note.contenido}
              <button
                className={styles.deleteButton}
                onClick={() => deleteNote(note.id)}
              >
                <img
                  className={styles.delete}
                  src="/Images/delete_white_24dp.svg"
                  alt="Delete Note"
                />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
