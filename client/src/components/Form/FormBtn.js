import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "left", marginBottom: 10, fontWeight:"900",color:"whitesmoke", backgroundColor: "rgba(0, 0, 0, 0.582)", border:"1px solid rgba(0, 0, 0, 0.582)"
}} type="submit" className="btn btn-success">
    {props.children}
  </button>
);
