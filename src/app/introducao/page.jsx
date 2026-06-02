import React from 'react'
import styles from './App.module.css';

function page() {
  return (
    <div className={styles.containerGeral}>
      <div className={styles.content}>
        <h1>Formação: Atualmente estou no 3 semestre do curso de desenvolvimento de software</h1>
        <h1>Objetivo acadêmico: Tenho como objetivo fazer uma pós para aprofundar ainda mais meus conhecimentos na área</h1>
        <h1>Objetivo profissional: Tenho como objetivo me tornar um desenvolvedor fullstack 
            que consiga lidar com quaisquer tipos de problema</h1>
        <h1>Área de interesse: Sou um desenvolvedor mais focado em front-end, porém quero me tornar um fullstack</h1>
        </div>
    </div>
  )
}

export default page
