import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card,  CardImg, CardText,} from 'reactstrap';
import "./Enrichmenttoggle.css";

const Enrichmenttoggle = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="enrichment-toggle-div">
      <Button className="enrichment-toggle-button" onClick={toggle} style={{ marginBottom: '1rem' }}><p className="enrichment-button-p">{props.title}</p></Button>
      <Collapse isOpen={isOpen}>
        <Card className="enrichment-toggle-card">
          <CardBody>
            <CardText className="enrichment-toggle-text">{props.text}</CardText>
            <div className="toggle-image-wrap">
              <CardImg className="card-image" src={props.img} alt="enrichment-card-toggle-image"/>
              <CardImg className="card-image" src={props.img2} alt="enrichment-card-toggle-image"/>
            </div>

          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Enrichmenttoggle;