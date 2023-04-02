import React from "react";
import "./componentsStyle.css";

const TopComponent = () => {
  return (
    <div className="top-container">
      <div>
        <h1 className="title">
          <b>Guides</b>
        </h1>
      </div>
      <div>
        <input className="search" type="text" placeholder="Search...." />
      </div>
    </div>
  );
};

export default TopComponent;
