import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import karbon_ledger from "../../Assets/Projects/karbon_ledger.png";
import talendro from "../../Assets/Projects/talendro.png";
import hirex from "../../Assets/Projects/hirex.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={karbon_ledger}
              isBlog={false}
              title="Karbon Ledger"
              description="Karbon Ledger is a decentralized blockchain-based platform that enables transparent, secure, and efficient management of carbon credits and sustainability efforts.."
              ghLink="https://github.com/KonmaORG/Karbon-Ledger"
              demoLink="https://karbonledger.vercel.app/"
              technologies={["Aiken", "Next", "Cardano", "Lucid", "React"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={talendro}
              isBlog={false}
              title="Talendro"
              description="Talendro is a decentralized freelance platform built on Cardano that uses smart contracts for secure payments, reputation staking, and decentralized dispute resolution."
              ghLink="https://github.com/TALENDRO/Talendro"
              demoLink="https://talendro.netlify.app/"
              technologies={["Aiken", "Lucid", "Cardano", "Next", "React"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hirex}
              isBlog={false}
              title="HireEx"
              description="An advanced recruitment system built with React and Node.js. The HirEx utilizes artificial intelligence and computer vision technologies to automate candidate assessments and improve the hiring process."
              ghLink="https://Cryptonean"
              demoLink="https://hirex.onrender.com/"
              technologies={["AWS", "Node", "React", "MongoDB"]}
            />
          </Col>

          {/* <Col md={4} className="project-card">
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
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
