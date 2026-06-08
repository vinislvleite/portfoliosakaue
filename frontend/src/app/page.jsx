"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const Page = () => {
  const [emailCopiado, setEmailCopiado] = useState(false);
  const [telefoneCopiado, setTelefoneCopiado] = useState(false);

  const copiarEmail = async () => {
    await navigator.clipboard.writeText("contato.vinips25@outlook.com");
    setEmailCopiado(true);

    setTimeout(() => {
      setEmailCopiado(false);
    }, 2000);
  };

  const copiarTelefone = async () => {
    await navigator.clipboard.writeText("(12) 98251-8708");
    setTelefoneCopiado(true);

    setTimeout(() => {
      setTelefoneCopiado(false);
    }, 2000);
  };

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
            Ver meus projetos
          </Link>

          <Link href="/introducao" className={styles.buttonHome}>
            Sobre mim
          </Link>
        </div>

        <div className={styles.contactRow}>
          <div className={styles.contactWrapper}>
            <a
              href="#"
              className={styles.contactItem}
              title="Copiar Email"
              onClick={(e) => {
                e.preventDefault();
                copiarEmail();
              }}
            >
              <FaEnvelope />
              <span>contato.vinips25@outlook.com</span>
            </a>

            {emailCopiado && (
              <span className={styles.copyMessage}>
                ✓ Copiado
              </span>
            )}
          </div>

          <a
            href="https://github.com/vinislvleite"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
            title="GitHub"
          >
            <FaGithub />
            <span>vinislvleite</span>
          </a>

          <a
            href="https://www.linkedin.com/in/vinícius-leite-4792b02ba/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
            title="LinkedIn"
          >
            <FaLinkedin />
            <span>Vinícius Leite</span>
          </a>

          <div className={styles.contactWrapper}>
            <a
              href="#"
              className={styles.contactItem}
              title="Copiar Telefone"
              onClick={(e) => {
                e.preventDefault();
                copiarTelefone();
              }}
            >
              <FaPhone />
              <span>12 98251-8708</span>
            </a>

            {telefoneCopiado && (
              <span className={styles.copyMessage}>
                ✓ Copiado
              </span>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;