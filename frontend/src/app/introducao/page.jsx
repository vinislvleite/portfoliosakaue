import React from "react";
import styles from "./App.module.css";
import Link from "next/link";

function Page() {
  return (
    <main className={styles.containerGeral}>
      <div className={styles.backContainer}>
        <Link href="/" className={styles.buttonHome}>
          Voltar
        </Link>
      </div>

      <div className={styles.content}>
        <p className={styles.greeting}>SOBRE MIM</p>

        <h1 className={styles.title}>Minha trajetória</h1>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h2>Formação</h2>
            <p>
              Atualmente estou cursando o 3º semestre de Desenvolvimento de
              Software Multiplataforma.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Objetivo Acadêmico</h2>
            <p>
              Pretendo realizar uma pós-graduação para aprofundar meus
              conhecimentos e me especializar ainda mais na área de tecnologia.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Objetivo Profissional</h2>
            <p>
              Meu objetivo é me tornar um desenvolvedor Full Stack capaz de
              analisar, projetar e resolver problemas em diferentes contextos.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Área de Interesse</h2>
            <p>
              Tenho maior afinidade com Front-End, mas estou constantemente
              expandindo meus conhecimentos para atuar como desenvolvedor Full
              Stack.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;