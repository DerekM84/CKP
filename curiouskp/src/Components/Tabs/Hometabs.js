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
import "./Hometabs.css";

const Hometabs = props => {
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
            Mission
          </NavLink>
        </NavItem>

        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Teachers & Staff
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Tuition / Fees
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent className="tab-content" activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Mission Contents</h4>
              <p>
                <b>K</b>ids are curious by nature. At Curious Kids
                Preschool, our mission is to foster that curiosity through a fun
                STEAM curriculum with hands-on learning experience. STEAM
                provides our our students with the best foundation for
                Kindergarten, be it charter, CTA, or district school.
                <br></br>
                <br></br>
                What is 
                <a
                  target="_blank"
                  href="http://www.edutopia.org/blog/stem-to-steam-strengthens-economy-john-maeda"
                >
                  STEAM
                </a>{" "}
                ?<br></br>
                <br></br>
                Science, Technology, Engineering, Arts, and Mathematics.
                <br></br>
                <br></br>
                Curious Kids provides a safe, clean environment with dynamic and
                challenging activity to develop our children’s academic and
                social abilities through age-related programs. Because of our
                small class sizes, each student gets the one-on-one attention
                they need to develop at their individual pace. We also nurture a
                rounded development through:
                <br></br>
                <br></br>
                <ul>
                  <li>
                    Instilling good{" "}
                    <a
                      target="_blank"
                      href="http://www.parents.com/kids/development/social/25-manners-kids-should-know/"
                    >
                      manners
                    </a>{" "}
                    and core values.
                  </li>
                  <li>
                    Teaching good environmental practices such as the 3Rs:
                    reducing, reusing &amp; recycling.
                  </li>
                  <li>
                    Learning the importance of nutrition and exercise as part of
                    promoting good health.
                  </li>
                  <li>Open childrens' minds to other cultures and customs.</li>
                </ul>
                <br></br>
                <p>
                  <b>A</b>t Curious Kids, we believe that kids will already have
                  enough screen-time exposure, so we are proud of our{" "}
                  <b>Screen Free Learning Environment </b>
                  as part of our commitment to health, nutrition
                  and exercise Curious Kids participates in the Arizona
                  Department of Health Services program named
                  <a
                    target="_blank"
                    href="http://azdhs.gov/prevention/nutrition-physical-activity/empower/index.php"
                  >
                    {" "}
                    Empower
                  </a>
                  .
                </p>
              </p>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="2">
          <div className="staff-boxes">
            <div className="staff-container-wrap">
              <div className="staff-container-top">
                <div className="staff-picture-wrap">
                  <img
                    className="staff-picture"
                    src="./images/Staff/Ruth.jpg"
                    alt="Ruth Davila"
                  />
                </div>
                <h2>RUTH DAVILA</h2>
              </div>
              <div className="staff-container-bottom">
                <div className="staff-text-wrap">
                  <p>
                    Ruth is a native Spanish speaker from Mexico City who moved
                    to Arizona in 2003 with her English husband, Clive. Since
                    her two kids were born, she started teaching them Spanish
                    and so both are fully bilingual. Her professional background
                    is marketing and she is also the person behind the art
                    gallery in our school. Ruth’s focus is on learning through
                    everyday activities, fun songs, books and dancing.
                  </p>
                  <p>
                    Ruth is also the yoga teacher at Curious Kids Preschool. She
                    is a Certified Kids Yoga Instructor by 
                    <a target="_blank" href="http://rainbowkidsyoga.net/">
                      Rainbow Kids Yoga
                    </a>
                    . Her classes are a mix of Spanish, dance and games, that
                    are fun, fun, fun! She practiced yoga for over 10 years
                    before she became an instructor. Ms. Ruth believes an open
                    mind to the world is important. Learning about other
                    traditions and customs is good for a culture of tolerance
                    and acceptance. It is important to be informed, to ask
                    questions and to not be judgemental. Ruth has lived in
                    France and is also fluent in French. In her spare time, Ms.
                    Ruth enjoys being with her family, traveling, cooking,
                    watching movies and practicing yoga.
                  </p>
                </div>
              </div>
            </div>

            <div className="staff-container-wrap">
              <div className="staff-container-top">
                <div className="staff-picture-wrap">
                  <img
                    className="staff-picture"
                    src="./images/Staff/Clive.jpg"
                    alt="Clive Jervis"
                  />
                </div>
                <h2>CLIVE JERVIS</h2>
              </div>
              <div className="staff-container-bottom">
                <div className="staff-text-wrap">
                  <p>
                    Clive moved to Chandler in 2003 from England and lives here
                    with wife Ruth, and their two children.
                  </p>
                  <p>
                    As well as aiming to create a unique preschool experience
                    for the kids, Clive wants to create a sense of community
                    among the parents, children and staff. Being a scientist, he
                    wants our curious kids to be amazed and inquisitive about
                    the world around them, and likes to give demonstrations that
                    range from dry-ice to steam engines.
                  </p>
                  <p>
                    Clive designed the curriculum for the school, and created
                    its integrated reading & writing program founded on current
                    research in the field. He carries his passion for science
                    into the STEAM elements of the school's curriculum. Clive
                    has a PhD in Mathematics and worked in software R&D for over
                    25 years before starting Curious Kids Preschool. He enjoys
                    spending time with his family, swimming at the health club,
                    and running his kids to soccer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabPane>

        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <h2>Registration / Tuition</h2>
              <h3>2019-2020</h3>
              <p>
                <br></br>
                Registration is a non-refundable fee of $150 for am classes and
                $100 for pm classes.{" "}
              </p>
              <br></br>
              <p>
                There is no supply fee. We accept all major debit/credit cards
                and&nbsp;do not&nbsp;charge any&nbsp;processing fees. Tuition
                for the year consists of 10 equal installments shown below for
                August 2019 - May 2020.
                <br></br>
                <br></br>
                Installments are collected on the 1st of each month and include
                all materials and a healthy snack provided each day. All
                enrichment classes are also included in the tuition.
                <br></br>
                <br></br>Please note that our pre-k classes are 5 day programs
                only.
                <b>
                  {" "}
                  There is a 5% discount for the second and subsequent enrolled
                  siblings.
                </b>
              </p>
              <table>
                <tbody>
                  <tr align="center" valign="middle">
                    <td width="100">
                      <strong>Programs</strong>
                    </td>
                    <td width="50">
                      <strong>2 Day</strong>
                    </td>
                    <td width="50">
                      <strong>3 Day</strong>
                    </td>
                    <td width="50">
                      <strong>5 Day</strong>
                    </td>
                  </tr>
                  <tr align="center" valign="middle">
                    <td>Mornings 8:00-11:30 am</td>
                    <td>$285</td>
                    <td>$385</td>
                    <td>$465</td>
                  </tr>
                  <tr align="center" valign="middle">
                    <td>Afternoons 12:10-3:30 pm</td>
                    <td>$275</td>
                    <td>$375</td>
                    <td>$455</td>
                  </tr>
                </tbody>
              </table>
              &nbsp;
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Hometabs;
