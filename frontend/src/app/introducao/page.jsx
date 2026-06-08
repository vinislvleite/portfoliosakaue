import React from "react";
import styles from "./App.module.css";
import Link from "next/link";
import { DiDocker } from "react-icons/di";
import { DiCode } from "react-icons/di";
import { FaTrophy, FaCalendarAlt } from "react-icons/fa";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaCss3Alt,
  FaFigma,
  FaUsers,
  FaLayerGroup,
  FaLightbulb,
  FaComments,
  FaFileExcel,
  FaChartBar,
  FaGlobeAmericas,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiSpring,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiApachecassandra,
  SiNeo4J,
} from "react-icons/si";

function introducaoPage() {
  return (
    <main className={styles.containerGeral}>
      <div className={styles.backContainer}>
        <Link href="/" className={styles.buttonHome}>
          ← Voltar
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

        <h2 className={styles.sectionTitle}>Formação Acadêmica</h2>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.circle}></div>

            <div className={styles.timelineContent}>
              <span className={styles.periodo}>2021 - 2023</span>

              <h3>Ensino Médio</h3>

              <p>
                E.E.E.M.I. Prof° Nelson do Nascimento Monteiro
                <br />
                São José dos Campos - SP
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.circle}></div>

            <div className={styles.timelineContent}>
              <span className={styles.periodo}>2025 - 2027</span>

              <h3>Desenvolvimento de Software Multiplataforma</h3>

              <p>
                FATEC São José dos Campos
                <br />
                Graduação em andamento
              </p>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.circle}></div>

            <div className={styles.timelineContent}>
              <span className={styles.periodo}>Próximo Passo</span>

              <h3>Pós-Graduação</h3>

              <p>
                Especialização para aprofundar conhecimentos em desenvolvimento
                de software e arquitetura de sistemas.
              </p>
            </div>
          </div>
        </div>

        <h2 className={styles.sectionTitle}>Certificações</h2>

        <div className={styles.certificationsGrid}>
          <div className={styles.card}>
            <h2>Introdução à Análise de Dados</h2>
            <p className={styles.certificadoDescricao1}>
              Curso introdutório sobre análise de dados utilizando Microsoft Power BI.
            </p>
            <ul className={styles.list}>
              <li>
                <FaChartBar />
                <span>Microsoft Power BI</span>
              </li>
              <li>
                <span>Fundação bradesco</span>
              </li>
              <li>
                <span>5 horas • 2024</span>
              </li>
            </ul>
            <a
              href="/certificados/Certificado1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certificadoButton}
            >
              Ver Certificado
            </a>
          </div>
          <div className={styles.card}>
            <h2>Preparando Dados para Análise</h2>
            <p className={styles.certificadoDescricao2}>
              Preparação, tratamento e organização de dados para utilização em dashboards e análises no Power BI.
            </p>
            <ul className={styles.list}>
              <li>
                <FaChartBar />
                <span>Microsoft Power BI</span>
              </li>
              <li>
                <span>Fundação bradesco</span>
              </li>
              <li>
                <span>7 horas • 2024</span>
              </li>
            </ul>
            <a
              href="/certificados/Certificado2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certificadoButton}
            >
              Ver Certificado
            </a>
          </div>
        </div>

        <h2 className={styles.sectionTitle}>Cursos e Idiomas</h2>

        <div className={styles.infoGrid}>
          <div className={styles.card}>
            <h2>Cursos</h2>

            <ul className={styles.list}>
              <li>
                <FaChartBar/>
                <span>Microsoft Power BI - Introdução à Análise de Dados</span>
              </li>

              <li>
                <FaChartBar/>
                <span>Microsoft Power BI - Preparação de Dados para Análise</span>
              </li>

              <li>
                <FaFileExcel />
                <span>
                  Excel Intermediário - Análise, organização e tratamento de dados
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Idiomas</h2>

            <ul className={styles.list}>
              <li>
                <FaGlobeAmericas />
                Inglês - Intermédiario
              </li>
            </ul>
          </div>
        </div>

        <h2 className={styles.sectionTitle}>Habilidades</h2>

        <div className={styles.skillsGrid}>
          <div className={styles.card}>
            <h2>Linguagens de Programação</h2>

            <ul className={styles.techList}>
              <li>
                <SiJavascript />
                <span>JavaScript</span>
              </li>

              <li>
                <SiTypescript />
                <span>TypeScript</span>
              </li>

              <li>
                <FaPython />
                <span>Python</span>
              </li>

              <li>
                <FaJava />
                <span>Java</span>
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Front-End</h2>

            <ul className={styles.techList}>
              <li>
                <FaReact />
                <span>React.js</span>
              </li>

              <li>
                <SiNextdotjs />
                <span>Next.js</span>
              </li>

              <li>
                <SiVite />
                <span>Vite.js</span>
              </li>

              <li>
                <FaCss3Alt />
                <span>CSS Modules</span>
              </li>

              <li>
                <FaFigma />
                <span>Figma</span>
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Back-End</h2>

            <ul className={styles.techList}>
              <li>
                <FaNodeJs />
                <span>Node.js</span>
              </li>

              <li>
                <DiCode />
                <span>APIs REST</span>
              </li>

              <li>
                <SiSpring />
                <span>Spring Boot</span>
              </li>
              <li>
                <DiDocker />
                <span>Docker</span>
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Banco de Dados</h2>

            <ul className={styles.techList}>
              <li>
                <SiMysql />
                <span>MySQL</span>
              </li>

              <li>
                <SiMongodb />
                <span>MongoDB</span>
              </li>

              <li>
                <SiRedis />
                <span>Redis</span>
              </li>

              <li>
                <SiApachecassandra />
                <span>Apache Cassandra</span>
              </li>

              <li>
                <SiNeo4J />
                <span>Neo4j</span>
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Soft Skills</h2>
            <ul className={styles.techList}>
              <li>
                <FaUsers />
                <span>Trabalho em equipe</span>
              </li>
              <li>
                <FaLayerGroup />
                <span>Organização</span>
              </li>
              <li>
                <FaLightbulb />
                <span>Resolução de problemas</span>
              </li>
              <li>
                <FaComments />
                <span>Comunicação</span>
              </li>
            </ul>
          </div>
        </div>
        <h2 className={styles.sectionTitle}>Eventos e Atividades</h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h2>Science Business Connection 2025</h2>
            <p className={styles.eventoDescricao}>Iniciativa do Programa Colmeia do PIT – Parque de Inovação Tecnológica de São José dos Campos, promovendo conexões entre empresas e instituições de ensino e pesquisa no Brasil.</p>
            <ul className={styles.list}>
              <li><FaCalendarAlt /><span>2025 • PIT SJC</span></li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Science Business Connection 2026</h2>
            <p className={styles.eventoDescricao}>Iniciativa do Programa Colmeia do PIT – Parque de Inovação Tecnológica de São José dos Campos, promovendo conexões entre empresas e instituições de ensino e pesquisa no Brasil.</p>
            <ul className={styles.list}>
              <li><FaCalendarAlt /><span>2026 • PIT SJC</span></li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Innovation Week 2025</h2>
            <p className={styles.eventoDescricao}>Semana de inovação com palestras, workshops e apresentações de projetos tecnológicos.</p>
            <ul className={styles.list}>
              <li><FaCalendarAlt /><span>2025 • PIT SJC</span></li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>Maratona de Programação FATEC 2026</h2>
            <p className={styles.eventoDescricao}>Competição de programação do 1º semestre de 2026 promovida pela FATEC São José dos Campos.</p>
            <ul className={styles.list}>
              <li><FaTrophy /><span>1º Semestre 2026 • FATEC SJC</span></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default introducaoPage;