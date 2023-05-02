import React from 'react';
import styles from '../styles/Login.module.css';
import { googleAuth } from './funcionesfirebase.js';


const Login = () => {
  return (
    
    <div className={styles.container}>
    <img className='img' src="/Images/fondopad.jpg" alt="fondo"/>
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>Crea tus notas</h1>
          <p>Y refresca tus ideas</p>
        </div>
        <button className={`${styles.button} button`} onClick={googleAuth}><span className="button-text">Continuar con Google</span></button>
      </div>
    </div>
  );
};

export default Login;



