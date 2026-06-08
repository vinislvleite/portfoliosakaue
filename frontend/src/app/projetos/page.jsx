"use strict";
"use client";

import React, { useState } from "react";
import styles from "./App.module.css";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const meusProjetos = [
  {
    titulo: "Portal de Análise de Dados",
    descricao: "Ferramenta interativa e API para análise estratégica da balança comercial (exportações e importações) do estado de São Paulo entre os anos de 2013 e 2023.",
    problemaIdentificado: "Dificuldade na extração, tratamento e visualização unificada de uma grande volumetria de dados brutos sobre as relações comerciais do estado.",
    solucao: "Interface web responsiva com filtros avançados (NCM, país, cidade) e gráficos interativos, consumindo dados de um banco MySQL populado e tratado via script Python.",
    tecnologias: "Python, Flask, Pandas, MySQL, Docker, AWS EC2, HTML/CSS/JS",
    desafios: "Normalização de 10 anos de registros brutos, otimização de queries para retornar top 5 produtos rapidamente e deploy na nuvem utilizando Docker.",
    resultados: "Implantação de um dashboard funcional em nuvem que auxilia empresas e órgãos a extrair insights rápidos da evolução histórica comercial.",
    link: "https://github.com/Kernel-Panic-FatecSjc/KernelPanic-1DSM-API",
    imagens: ["/paginaInicial1.png", "/sobreProjeto1.png", "/graficosProjeto1.png", "/insightsProjeto1.png", "/top5Projeto1.png"]
  },
  {
    titulo: "Sistema CRM - Newe Log",
    descricao: "Plataforma desenvolvida para centralizar e padronizar processos administrativos, comerciais e operacionais, garantindo maior controle para a empresa.",
    problemaIdentificado: "Uso de ferramentas dispersas (Lists e Forms) gerando fragmentação de dados, retrabalho, perda de informações e relatórios imprecisos.",
    solucao: "Ambiente unificado com gestão de clientes (funil de vendas), automação de eventos, centralização de checklists e dashboards estratégicos em tempo real.",
    tecnologias: "React, Node.js, MySQL",
    desafios: "Mapeamento das regras de negócio distribuídas e criação de uma interface intuitiva para unificar processos operacionais complexos.",
    resultados: "Simplificação no acesso às informações, redução de erros de cadastro e maior eficiência no acompanhamento do fluxo comercial.",
    link: "https://github.com/Kernel-Panic-FatecSjc/KernelPanic-2DSM-API",
    imagens: ["/cadastroClientes2.png", "/agendamentoClientes2.png", "/funilProjeto2.png", "/gestaoProjeto2.png", "/graficosProjeto2.png", "/integracaoProjeto2.png", "/vendedoresProjeto2.png"]
  },
  {
    titulo: "Sistema de Apontamento de Horas - GSW",
    descricao: "Plataforma corporativa desenvolvida para a GSW Soluções Integradas, centralizando o controle de horas, gestão de projetos e dados financeiros de equipes distribuídas por todo o Brasil.",
    problemaIdentificado: "Dados dispersos entre planilhas, mensagens e anotações geravam inconsistências, retrabalho e falta de visibilidade sobre como o tempo era distribuído entre projetos — impedindo gestores e o financeiro de tomarem decisões confiáveis.",
    solucao: "Sistema integrado com três perfis distintos: profissionais registram e acompanham seus apontamentos, gestores validam alocações e monitoram tarefas em tempo real, e o financeiro acessa dados consolidados para auditoria e faturamento.",
    tecnologias: "Next.js, TypeScript, React, Java, Spring, Spring Cloud, MySQL, Docker, JWT",
    desafios: "Modelagem de um fluxo multi-perfil com rastreabilidade completa, integração de microserviços com Spring Cloud e garantia de consistência dos dados financeiros em um ambiente de alta volumetria de demandas.",
    resultados: "Solução construída sprint a sprint a partir de necessidades reais levantadas com o cliente, entregando um fluxo completo de registro → validação → decisão financeira com dados confiáveis para toda a operação da GSW.",
    link: "https://github.com/Kernel-Panic-FatecSjc/KernelPanic-3DSM-API",
    imagens: ["/usuarios3.jpeg", "/projetos3.jpeg", "/financeiro3.jpeg", "/dashboard3.jpeg"]
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
                <p><strong>Problema Identificado:</strong> {projeto.problemaIdentificado}</p>
                <p><strong>Solução Desenvolvida:</strong> {projeto.solucao}</p>
                <p><strong>Tecnologias Utilizadas:</strong> {projeto.tecnologias}</p>
                <p><strong>Desafios Técnicos:</strong> {projeto.desafios}</p>
                <p><strong>Resultados Obtidos:</strong> {projeto.resultados}</p>
                
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