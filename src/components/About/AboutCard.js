import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a todos novamente, sou o <span className="purple">Pedro Silva </span>
            de <span className="purple"> Goiânia, Goiás.</span> 🤠
            <br />
            <br /> Sou <span className="purple">ex-aluno</span> em Análise e Desenvolvimento de Sistemas <span className="purple">(ADS) </span> 
            pela Pontifícia Universidade Católica de Goiás <span className="purple">(PUC)</span>, que se encontra <span className="purple">trancado.</span>
            <br />
            Com certificação em<span className="purple"> Cybersecurity</span> pela Faculdade de Tecnologia <span className="purple">SENAI</span> de Desenvolvimento Gerencial,
            fui <span className="purple">Um</span> dos Mil e Quinhentos alunos bolsistas aprovado no processo
            <span className="purple"> CiberEducação</span>, uma parceria entre o <span className="purple">SENAI</span> e a <span className="purple">CISCO NETWORKING. </span> 
            Com isso, obtive também certificações em <span className="purple">Cybersecurity Essentials, CCNA1 & CCNA2.</span>
            <br />
            <br />
            Embora acredite <span className="purple">firmemente</span> que um <span className="purple">certificado</span> não determina integralmente o conhecimento ou capacidade de um profissional, 
            reconheço sua <span className="purple">importância</span> como porta de entrada para o mercado de trabalho. 
            Uma vez inserido, o <span className="purple">crescimento e a evolução</span> dependem de nossas <span className="purple">ações e competências.</span>
            <br />
            <br />
            Atualmente, atuo como desenvolvedor de software no <a className="purple" href="http://gruporodrigosales.com.br" target="_blank" rel="noopener noreferrer">Grupo RS</a> e também como 
            coordenador na <a className="purple" href="https://halfbeneficios.com" target="_blank" rel="noopener noreferrer">HALF Benefícios</a>, uma das empresas de software associadas ao grupo.
            <br />
            <br />
            Além da <span className="purple">codificação, elaboração e pentester,</span> algumas outras atividades que adoro fazer! 😋
          </p>
          <ul>
            <li className="about-activity">
            🎮 Jogar jogos
            </li>
            <li className="about-activity">
            🎧 Ouvir músicas
            </li>
            <li className="about-activity">
            🥰 Ficar com a minha família
            </li>
          </ul>

          <p style={{ color: "rgb(255 0 72)" }}>
            "Eu só quero viver como os que vieram antes."{" "}
          </p>
          <footer className="blockquote-footer">EDEN (ROCK + ROLL).</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
