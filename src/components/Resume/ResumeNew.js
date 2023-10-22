import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import ProjectCard from "../Projects/ProjectCards";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <RiGitRepositoryPrivateFill />
            &nbsp;Download do CV indisponível
          </Button>
        </Row>

        {/*<Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
  </Row>*/}

        <Row md={4} className="resume2">
          <p>
            Talvez você estivesse esperando ver aqui um currículo tradicional, repleto de informações formais, contatos e demais características padrão. 
            Bem, a verdade é que, no momento, você não o encontrará.
            Primeiramente, que ele está desatualizado em relação aos projetos que apresento neste espaço. (E eu não vou atualiza-lo tão cedo).
            Além disso, não estou em busca de uma posição específica. Estou genuinamente satisfeito com onde estou atualmente, o que me levou a recusar algumas propostas ao longo do tempo. 
            Dito isso, já que não estou ativamente procurando novas oportunidades, optei por HOJE não disponibilizá-lo aqui.
          </p>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <RiGitRepositoryPrivateFill />
            &nbsp;Download do CV indisponível
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
