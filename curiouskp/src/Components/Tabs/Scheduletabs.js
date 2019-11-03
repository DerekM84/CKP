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
import "./Scheduletabs.css";

const Scheduletabs = props => {
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
            Schedules
          </NavLink>
        </NavItem>

        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Calendar
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Summer Program
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent className="tab-content" activeTab={activeTab}>
        <TabPane tabId="1">
          <b>Yearly Calendar</b>
          <br></br>
          <br></br>
          Our school year is based on the Chandler Unified School District
          <a target="_blank" href="http://www.chandler.k12.az.us/page/1298">
            {" "}
            Calendar
          </a>{" "}
          to accommodate older siblings attending "big boys &amp; girls"
          schools. We only close for one week during Fall and Spring breaks.
          <br></br>
          <br></br>
          <strong>Class Times</strong>
          <br></br>
          <br></br>
          We offer 3½ hours of fun, screen-free, hands-on learning in 2
          sessions:
          <ul>
            <li>Mornings from 8:00 am to 11:30 am</li>
            <li>
              Afternoons from 12:10 to 3:30 pm.(PM classes have reduced fees).
            </li>
          </ul>
          <strong>Summer Program</strong>
          <br></br>
          <br></br>
          Our summer program runs throughout June and July, and offers flexible
          sign-up days. You can choose to come per day or per week.
          <br></br>
          <br></br>
          <strong>Classes</strong>
          <br></br>
          <br></br>
          We offer four classes based primarily on age: 2s, 3s, Pre-K, and
          Pre-K+. For the 2s and 3s classes we offer:
          <ul>
            <li>(2 days) Tuesday/Thursday </li>
            <li>(3 days) Monday/Wednesday/Friday </li>
            <li>(5 days) Monday through Friday</li>
          </ul>
          <div>
            The Pre-K and Pre-K+ classes are 5 day programs only, that is Monday
            through Friday. To attend the 2s class a child has to be at least 2
            years old and does not need to be potty trained. For all other
            classes, children must be fully potty trained.
          </div>
          <div>
            Our age cut-off is that a child must be 3 years old on or before the
            start of the school year (August 1st) to attend the 3s class, 4 for
            the Pre-K class, and 5 before December for the Pre-K+ class.
          </div>
        </TabPane>

        <TabPane tabId="2">
          <h1>2017-2018 Calendar</h1>
<br>
</br>
          <h3>N.B. Spring/Fall breaks are only one week long, and school year
              ends the Friday before CUSD finishes.</h3>
              <br>
              </br>

              <div className="calendar-table-wrap">
              <table>
                <tbody>
                  <tr>
                    <td valign="top">
                      <div>
                        <strong>July</strong>
                      </div>
                      25th: Meet the Teacher 27th: First Day of School
                    </td>
                    <td valign="top">
                      <div>
                        <strong>August</strong>
                      </div>
                    </td>
                    <td valign="top">
                      <div>
                        <strong>September</strong>
                      </div>
                      4th: Closed Labor Day
                    </td>
                    <td valign="top">
                      <div>
                        <strong>October</strong>
                      </div>
                      2nd-6th: Closed Fall Break
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">
                      <div>
                        <strong>November</strong>
                      </div>
                      10th: Closed Veterans Day 23th-24th: Closed Thanksgiving
                    </td>
                    <td valign="top">
                      <div>
                        <strong>December</strong>
                      </div>
                      21st: Last Day of School
                    </td>
                    <td valign="top">
                      <div>
                        <strong>January</strong>
                      </div>
                      8th: First Day of School 15th: Closed Martin Luther King,
                      Jr.&nbsp;Day
                    </td>
                    <td valign="top">
                      <div>
                        <strong>February</strong>
                      </div>
                      19th: Closed Presidents Day
                    </td>
                  </tr>
                  <tr>
                    <td valign="top">
                      <div>
                        <strong>March</strong>
                      </div>
                      12th-16th: Closed Spring Break 30th: Closed Spring Holiday
                    </td>
                    <td valign="top">
                      <div>
                        <strong>April</strong>
                      </div>
                    </td>
                    <td valign="top">
                      <div>
                        <strong>May</strong>
                      </div>
                      25th: Last Day of School
                    </td>
                    <td valign="top">
                      <div>
                        <strong>June</strong>
                      </div>
                      Summer Program
                    </td>
                  </tr>
                </tbody>
                
              </table>
              </div>
           
        </TabPane>

        <TabPane tabId="3">
          <p>
          <b>E</b>ach summer we offer an exciting and flexible program
          for&nbsp;preschoolers&nbsp;aged 2 years up to 5 years
          old.&nbsp;Classes run from 9:00 am to noon and include a healthy
          snack; you can sign up whichever mornings you want - no need to come
          every day!
          </p>
          <p>Please sign-up in advance as places are limited. We also
          offer early drop off/late pick-up. Themes will be not only fun, but
          educational as well. For our last week the theme will be&nbsp;
          <em>Get Ready for School</em>, which will be designed to help the kids
          make a smooth transition back to their fall school programs. 2
          year-olds do not need to be toilet trained, but 3 year-olds and up
          must be fully trained.
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <b>Date</b>
                </td>
                <td>
                  <b>Theme</b>
                </td>
              </tr>
              <tr>
                <td>June 3-7</td>
                <td>Eco-Kids</td>
              </tr>
              <tr>
                <td>June&nbsp; 10-14</td>
                <td>Mystery</td>
              </tr>
              <tr>
                <td>June 17-21</td>
                <td>Science</td>
              </tr>
              <tr>
                <td>June 24-28</td>
                <td>Build-it</td>
              </tr>
              <tr>
                <td>July 1-4</td>
                <td>
                  <em>Closed, no camp</em>
                </td>
              </tr>
              <tr>
                <td>July 8-12</td>
                <td>Dinosaurs</td>
              </tr>
              <tr>
                <td>July 15-19</td>
                <td>Getting Ready for School</td>
              </tr>
            </tbody>
          </table>
          &nbsp;
          <br>
          </br>
          <br></br>

          <h1>2019 Summer Camp Registration &amp; Fees </h1>
          <table>
            <tbody className="summer-camp-table">
              <tr>
                <td>Summer camp registration fee:</td>
                <td>$20</td>
              </tr>
              <tr>
                <td>Fee per morning:</td>
                <td>$29 ($25 per child for two or more children)</td>
              </tr>
              <tr>
                <td>Fee per week:</td>
                <td>$125 ($115 per child for two or more children)</td>
              </tr>
              <tr>
                <td>Early drop off/late pick-up:</td>
                <td>$5/day</td>
              </tr>
            </tbody>
          </table>
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

export default Scheduletabs;
