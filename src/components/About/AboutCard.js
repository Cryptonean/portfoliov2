import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Faizan Shaikh </span>
            from <span className="purple">Pune, India.</span>
            <br />
            I am currently a blockchain developer and a core contributor at
            Cardano SPOT.
            <br />
            I am an object-oriented programmer, functional programmer, and
            blockchain enthusiast.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>

            <li className="about-activity">
              <ImPointRight /> Exploring decentralized governance and
              innovations
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
