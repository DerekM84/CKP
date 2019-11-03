import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card,  CardImg, CardText,} from 'reactstrap';
import "./Toggle.css";

const Toggle = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button className="toggle-button" onClick={toggle} style={{ marginBottom: '1rem' }}><p className="button-p">YOGA</p></Button>
      <Collapse isOpen={isOpen}>
        <Card className="toggle-card">
          <CardBody>
              <CardImg src={props.img} alt="card-toggle-image"/>
            <CardText className="toggle-text">{props.text}</CardText>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Toggle;