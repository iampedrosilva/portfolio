import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import portalgrupors from "../../Assets/Projects/portalgrupors.png";
import halfbeneficios from "../../Assets/Projects/halfbeneficios.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Trabalhos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão os desenvolvimentos em que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portalgrupors}
              isBlog={false}
              title="Portal do Grupo RS"
              description="Nascido da visão inovadora do Gerente de Licitações e Contratos do Grupo RS, o Portal do Grupo RS foi desenvolvido inteiramente por mim. 
              O que começou como uma ferramenta para o controle de licitações e contratos das empresas do grupo evoluiu para se tornar a espinha dorsal dos processos da empresa.
              Com o passar do tempo, o projeto evoluiu de maneira significativa. 
              Agora, ele é não apenas um recurso interno, mas também um portal de acesso externo para órgãos públicos, permitindo-lhes acessar atos de registro de preço e visualizar contratos firmados. 
              Uma das inovações marcantes foi a integração direta com plataformas de comunicação populares, como WhatsApp e e-mail, bem como funcionalidades relacionadas ao setor jurídico.
              As Tecnologias Empregadas são:
              Front-end: React.js - oferecendo uma interface amigável e responsiva.
              Back-end: Node.js com Express.js - criando uma infraestrutura robusta e eficiente para armazenar arquivos, imagens e outros documentos, cada um com seu link único para agilizar o acesso e otimizar a recuperação no front-end.
              Banco de Dados: MongoDB - escolhido por sua natureza didática e flexível, permitindo um gerenciamento de dados eficiente.
              Estamos entusiasmados em expandir ainda mais as capacidades do portal. 
              Há planos para incorporar funcionalidades relacionadas ao faturamento e outros processos corporativos, além de otimizar o portal para dispositivos móveis, garantindo assim a adaptabilidade e eficiência contínua.
              Este projeto representa um marco na minha carreira. Cada desafio encontrado foi uma oportunidade de aprendizado e crescimento. Enfrentando obstáculos, muitas vezes sozinho, este projeto reafirmou minha paixão e habilidade na área de desenvolvimento.
              Através do Portal do Grupo RS, eu não apenas ofereci uma solução técnica, mas também contribuí significativamente para a transformação digital e eficiência operacional do Grupo RS."
              ghLink="https://www.portalgrupors.com"
            /*demoLink="https://chatify-49.web.app/"*/
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={halfbeneficios}
              isBlog={false}
              title="HALF Benefícios"
              description="Originada da visão ambiciosa do Presidente do Grupo RS, a HALF Benefícios surgiu com a missão de se estabelecer como líder no mercado de benefícios para empresas privadas e órgãos públicos. 
              Como parte integrante do Grupo RS, a HALF se destaca por seu sistema de gestão de gerenciamento e manutenção da frota veicular para empresas privadas.
              A plataforma foi meticulosamente projetada para simplificar, otimizar e revolucionar o controle e manutenção de frotas de veículos. Entre suas funcionalidades, destacam-se:
              Cotações: Permite acesso a cotações em mais de 3 oficinas credenciadas pela HALF.
              Assistência: Pedido rápido de guinchos.
              Registro de Veículos: Armazena detalhes e informações pertinentes sobre cada veículo.
              Manutenções e Reparos: Monitora e registra todas as manutenções e reparos realizados.
              Desempenho e Consumo: Rastreia o desempenho e consumo dos veículos.
              Agendamentos: Facilita o agendamento de manutenções preventivas, corretivas, dentre outras.
              Relatórios: Gera análises e relatórios detalhados, dentre outras funcionalidades.
              Visando a praticidade e eficiência, a HALF disponibilizou aplicativos tanto para Android quanto para IOS. 
              Estes são dedicados tanto para gestores de frota para parte operacional quanto para motoristas, permitindo que eles localizem facilmente oficinas credenciadas próximas, facilitando o processo de manutenção dos veículos.
              Tendo eu como Mantenedor e Arquiteto do Software e contando com a habilidade do programador central, Michael Douglas, o sistema foi criado utilizando PHP 8.1 e o Framework Laravel 10. 
              Com essa combinação técnica utilizamos o robusto e escalável banco de dados MySQL. Adicionalmente, contamos com a escalabilidade e velocidade do armazenamento em nuvem Amazon S3, garantindo um armazenamento de dados eficiente e seguro.
              A HALF Benefícios não é apenas mais uma empresa no portfólio – ela representa paixão, dedicação e uma visão de crescimento. Atualmente, servimos principalmente clientes de empresas privadas e estamos no aguardo de contratos com órgãos públicos. 
              Com nosso sistema já habilitado em certames com avaliações técnicas e registrado no INPI, estamos prontos para expandir e solidificar nossa marca no mercado.
              A HALF é o reflexo da inovação e dedicação, e cada linha de código e funcionalidade foram cuidadosamente pensadas para proporcionar a melhor experiência e valor para nossos clientes."
              ghLink="https://halfbeneficios.com"
            /*demoLink="https://blogs.soumya-jit.tech/"*/
            />
          </Col>

          {/*<Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"
            />
  </Col>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
