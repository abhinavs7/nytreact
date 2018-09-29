import React from "react";
var styles = {
  margin: '20px',
  width: '100%',
  
};
export const Row = ({ fluid, children }) => (
  <div className={`row${fluid ? "-fluid" : ""}`} style = {styles}>
    {children}
  </div>
);
