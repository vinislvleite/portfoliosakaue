"use client";

import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

const Page = () => {
  return (
    <main className={styles.containerGeral}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      <div className={styles.particles}>
        {[...Array(20)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>

      <div className={styles.content}>
        <p className={styles.greeting}>OLÁ, EU SOU O</p>

        <h1 className={styles.title}>Vinícius Leite</h1>

        <h2 className={styles.subtitle}>
          Desenvolvedor Full-Stack, focado em Front-End
        </h2>

        <div className={styles.buttonGroup}>
          <Link href="/projetos" className={styles.buttonProjetos}>
            Ver meus projetos →
          </Link>

          <Link href="/introducao" className={styles.buttonHome}>
            Sobre mim
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page;