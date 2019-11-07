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

const Resourcetabs = props => {
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
            Assessment
          </NavLink>
        </NavItem>

        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
           History
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Extra
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent className="tab-content" activeTab={activeTab}>
        <TabPane tabId="1">
          <p>
            <b>Chandler Kindergarten Entrance Assessment</b>
          </p>
          <ul>
            <li>
              <a
                target="_blank"
                href="http://ww2.chandler.k12.az.us/chandlerschools"
              >
                Chandler Unified School District
              </a>
            </li>
            <li>
              {" "}
              <a
                target="_blank"
                href="http://www.cusd80.com//site/Default.aspx?PageID=43017"
              >
                Kindergarten Readiness Test
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.cusd80.com/Page/92334">
                Kindergarten Registration
              </a>
            </li>
          </ul>

          <p>
            Children who are 5 years old by&nbsp;August 31st are eligible to
            enroll&nbsp;in&nbsp; the district.
          </p>

          <p>
            However, it is possible to enroll younger children who are 5 years
            old before the end of December if they pass the Readiness test.
           
            </p>
           
            <p>
              
            Enrollment into kindergarten is normally done in the February
            preceding the start of the school year in July.
          </p>
          <p>

          CUSD has an open enrollment
          policy, meaning you can apply to go to any elementary school in the
          district, although places are guaranteed only for your home school as
          defined by the 
          <a target="_blank" href="http://www.chandler.k12.az.us/page/1148"> boundary map</a>. 
          </p>
          <p>

          In
          the months of May/June before entering Kindergarten, each CUSD
          elementary school assesses all registered children individually in
          what is known as the 
          <a target="_blank" href="https://www.cusd80.com/cms/lib/AZ01001175/Centricity/Domain/24/2017-2018%20CUSD%20Elementary%20Handbook.pdf">
          &nbsp;Kindergarten Individual
          Screening/Skills&nbsp;Test
          </a>.
          </p>

          This test discovers what each child knows and how they behave
          socially, and is used by the school to determine which class/teacher
          the child will be placed in. Through speaking directly with the local
          elementary schools Curious Kids Preschool has a good knowledge of KIST
          and we ensure that our curriculum exceeds all test points. To aid parents prepare their children
          for entrance to kindergarten, Chandler Unified School District (CUSD)
          provides a&nbsp;
          <a target="_blank" href="https://www.cusd80.com/cms/lib/AZ01001175/Centricity/Domain/24/Kindergarten%20Under%20Construction%20ENGLISH.pdf">
            Kindergarten Readiness Handbook
          </a>
          . All CUSD elementary school policies and information is covered in
          the CUSD&nbsp;
          <a target="_blank" href="https://www.cusd80.com/page/1147">
            Elementary Student Handbook
          </a>
          .
        </TabPane>

        <TabPane tabId="2">
          <h1>History</h1>
          <strong>Curious Kids</strong>&nbsp;is the result of a dream conceived
          and brought to fruition by husband and wife team of Clive Jervis and
          Ruth Dávila. The two realized that there was a real need for a loving,
          exciting, unique preschool in their neighborhood in Chandler. Together
          they put in motion an idea for this school to engage two, three, four
          and five year-olds in a creative learning environment which exposes
          the children to all of the wonders of the world around them. The
          school got its name when Clive and Ruth asked their then six year old
          son, to think of a favorite character and he chose Curious George.
          Clive &amp; Ruth's daughter was one of the 13 kids that were the first
          to graduate from Curious Kids in May 2014. Curious Kids began construction in June 2012, and opened on October 17th 2012.
          <br></br>
          <h1> Construction </h1>
          <strong>Curious Kids&nbsp;</strong>Preschool&nbsp;was newly
          constructed in 2012 inside a previously unoccupied space of Dobson
          Town Place. This enabled us to design the layout and features we
          wanted without restriction - even to determine the floor area we
          wanted the school to occupy. We chose to place our entrance at the
          side of the building to create a safe area for children, and to allow
          parents to park either at the front or rear of the building. Below are
          some photographs documenting the construction's progress.
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

export default Resourcetabs;
