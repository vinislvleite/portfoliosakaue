"use strict";
"use client";

import React, { useState } from "react";
import styles from "./App.module.css";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const meusProjetos = [
  {
    titulo: "Portal de Análise de Dados",
    descricao: "Projeto Integrado (API) focado no levantamento, tratamento e análise visual de dados, desenvolvido com a equipe Kernel Panic.",
    solucao: "Interface web estruturada para facilitar a tomada de decisões, utilizando HTML, CSS e JavaScript para a organização e apresentação dos dados.",
    link: "https://github.com/Kernel-Panic-FatecSjc/KernelPanic-1DSM-API",
    imagens: ["/paginaInicial1.png", "/sobreProjeto1.png", "/graficosProjeto1.png", "/insightsProjeto1.png", "/top5Projeto1.png"]
  },
  {
    titulo: "Sistema CRM - Newe Log",
    descricao: "Aplicação web desenvolvida para padronizar e automatizar os processos comerciais e administrativos da empresa.",
    solucao: "Construído utilizando React no front-end para uma interface dinâmica e Banco de Dados para persistência e consistência das informações.",
    link: "https://github.com/Kernel-Panic-FatecSjc/KernelPanic-2DSM-API",
    imagens: ["/crm1.png", "/crm2.png"]
  }
];

function ProjectCarousel({ imagens }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  if (!imagens || imagens.length === 0) return null;

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselInner}>
        <img 
          src={imagens[currentIdx]} 
          alt="Screenshot do projeto" 
          className={styles.carouselImage} 
        />
      </div>

      {imagens.length > 1 && (
        <>
          <button onClick={prevSlide} className={`${styles.carouselBtn} ${styles.prev}`}>
            <FaChevronLeft />
          </button>
          <button onClick={nextSlide} className={`${styles.carouselBtn} ${styles.next}`}>
            <FaChevronRight />
          </button>
          
          <div className={styles.indicators}>
            {imagens.map((_, i) => (
              <span 
                key={i} 
                className={`${styles.indicator} ${i === currentIdx ? styles.activeIndicator : ""}`}
                onClick={() => setCurrentIdx(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Page() {
  return (
    <main className={styles.containerGeral}>
      <div className={styles.backContainer}>
        <Link href="/" className={styles.buttonHome}>
          ← Voltar
        </Link>
      </div>

      <div className={styles.content}>
        <p className={styles.greeting}>PORTFÓLIO</p>
        <h1 className={styles.title}>Meus Projetos</h1>

        <div className={styles.projectsGrid}>
          {meusProjetos.map((projeto, index) => (
            <div key={index} className={styles.projectCard}>
              <ProjectCarousel imagens={projeto.imagens} />
              <div className={styles.projectDetails}>
                <h2>{projeto.titulo}</h2>
                <p><strong>Descrição:</strong> {projeto.descricao}</p>
                <p><strong>Solução:</strong> {projeto.solucao}</p>
                
                <a 
                  href={projeto.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.projectLink}
                >
                  <FaGithub /> Ver Código / Projeto <FaExternalLinkAlt style={{ fontSize: "0.8rem" }} />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Page;