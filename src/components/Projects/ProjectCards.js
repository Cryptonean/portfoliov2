import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        {/* Technologies Used Section */}
        {props.technologies && props.technologies.length > 0 && (
          <div style={{ marginTop: "15px", display: "flex", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 50%", textAlign: "left" }}>
              {props.technologies
                .slice(0, Math.ceil(props.technologies.length / 2))
                .map((tech, index) => (
                  <div key={index} style={{ marginBottom: "5px" }}>
                    {tech}
                  </div>
                ))}
            </div>
            <div style={{ flex: "1 1 50%", textAlign: "left" }}>
              {props.technologies
                .slice(Math.ceil(props.technologies.length / 2))
                .map((tech, index) => (
                  <div key={index} style={{ marginBottom: "5px" }}>
                    {tech}
                  </div>
                ))}
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
