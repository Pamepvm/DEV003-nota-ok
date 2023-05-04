import React from 'react';
import styles from '../styles/Login.module.css';
import { googleAuth } from './funcionesfirebase.js';
import Image from 'next/image';
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter();
  function Init() {
    ;
    console.log('hola');
    googleAuth(router);
    // router.push('/Wall');routers declara en la funcion google auth
  };
  
    return (
    
      <div className={styles.container}>
        <img src="/Images/fondopad.jpg" alt="fondo" className={styles.fondo} />
        <div className={styles.content}>
          <div>
            <h1 className={styles.title}>Crea tus notas</h1>
            <p className={styles.p}>Y refresca tus ideas</p>
          </div>
          <button className={`${styles.button} button`} onClick={Init}></button>
        </div>
      </div>
    );
  };

export default Login;



