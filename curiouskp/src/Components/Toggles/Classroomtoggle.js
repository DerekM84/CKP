import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card,  CardImg, CardText,} from 'reactstrap';
import "./Classroomtoggle.css";

const Classroomtoggle = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="classroom-toggle-div">
      <Button className="classroom-toggle-button" onClick={toggle} style={{ marginBottom: '1rem' }}><p className="classroom-button-p">{props.title}</p></Button>
      <Collapse isOpen={isOpen}>
        <Card className="classroom-toggle-card">
          <CardBody>
            <div className="toggle-image-wrap">
              <CardImg className="card-image" src={props.img} alt="classroom-card-toggle-image"/>
              <CardImg className="card-image" src={props.img2} alt="classroom-card-toggle-image"/>
            </div>

            <CardText className="classroom-toggle-text">{props.text}</CardText>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Classroomtoggle;