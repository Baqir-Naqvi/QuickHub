import "./TabsSectionStyle.css";
import React, { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import { workflowsData } from "../../data/WorkflowsData";
import Workflows from "./Workflows/Workflows";

const TabsSection = () => {
  const [key, setKey] = useState("home");

  return (
    <div className="tabs-wrapper" >
      <Tab.Container unmountOnExit id="left-tabs-example" defaultActiveKey="1">
        <div className="tabcontainer">
          <div className="tabs-container">
            <div className="left-section">
        <h2 className='offertitle_mobile' style={{color:"#72B65A"}}>
            Main Services we offer
          </h2>
      <div className="offerheading">
          <h2 className='offertitle_desktop' style={{color:"#72B65A"}}>
            Main Services we offer
          </h2>

      </div>
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="1">Core</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">Assests</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">Time Tracking</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
            </div>


          <div style={{ marginTop: "30px" }}>
            <Tab.Content>
              {workflowsData.map((data, index) => {
                return (
                  <Tab.Pane key={index} eventKey={data.id}>
                    <Workflows
                      subTitle={data.subtitle}
                      title={data.title}
                      details={data.details}
                      imgUrl={data.imgUrl}
                    />
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
};

export default TabsSection;
