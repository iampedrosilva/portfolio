import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Meu calendário no <strong className="purple">GitHub</strong>
      </h1>
      <GitHubCalendar
        username="iampedrosilva"
        blockSize={15}
        blockMargin={5}
        color="#ff0048"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
