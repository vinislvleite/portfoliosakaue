import React from 'react';
import styles from './page.module.css';

export const metadata = {
  title: 'Apresentação | Vinícius Leite',
};

const Page = () => {
  return (
    <main className={styles.containerGeral}>
      <div className={styles.content}>
        <p className={styles.greeting}>OLÁ, EU SOU O</p>
        <h1 className={styles.title}>Vinícius da Silva Leite</h1>
        <h2 className={styles.subtitle}>
          Desenvolvedor Full-Stack, focado em Front-End
        </h2>
        
        <div className={styles.buttonGroup}>
          <button className={styles.buttonProjetos}>
            Ver meus projetos &rarr;
          </button>
          <button className={styles.buttonHome}>
            Sobre mim
          </button>
        </div>
      </div>
    </main>
  );
};

export default Page;