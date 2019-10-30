import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import "./Curriculumtabs.css";

const Curriculumtabs = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs className="nav-container">
        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Classrooms
          </NavLink>
        </NavItem>

        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Grade Level
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Enrichment
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent className="tab-content" activeTab={activeTab}>
        <TabPane tabId="1">
          <strong>Our</strong> classrooms are cheerful, light filled, and very
          spacious, having twice the floor area per student compared with most
          preschools and day-cares, and we keep&nbsp;our class sizes
          deliberately small. In our 2s classroom we have at most 8 children,
          and no more than 12 children in our other classrooms. Each of our
          classrooms has an attached bathroom, and all have areas dedicated to
          different activities including reading corners, table activities,
          circle time, sensory tables &amp; bins, dramatic play, and gross motor
          activities. The entrance to Curious Kids Preschool has been placed at
          the side of the building ensuring a safe area for children and
          parents, with parking provided both at the front and rear of the
          school. For security, entrance into reception is controlled by a
          keypad.


          
        </TabPane>

        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="3">
          <Row>
            <Col sm="12"></Col>
          </Row>
        </TabPane>

        <TabPane tabId="4">
          <Row>
            <Col sm="12"></Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Curriculumtabs;
