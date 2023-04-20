import "./TabsSectionStyle.css";
import React, { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import { workflowsData } from "../../data/WorkflowsData";
import Workflows from "./Workflows/Workflows";

const TabsSection = () => {
  const [key, setKey] = useState("home");

  return (
    <div className="tabs-wrapper">
      <Tab.Container unmountOnExit id="left-tabs-example" defaultActiveKey="1">
        <div className="d-flex">
          <div className="tabs-container">
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="1">IT Workflows</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">Employee Workflows</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">Customer Workflows</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4">Creator Workflows</Nav.Link>
              </Nav.Item>
            </Nav>
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
