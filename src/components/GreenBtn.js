import React from "react";

const GreenBtn = (props) => {
  const { btntext } = props;
  const btnStyle = {
    background: "#0A5F6F",
    fontSize: "15px",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "5px",
    width: "120px",
    height: "36px",
  };
  return <button style={btnStyle}>{btntext}</button>;
};

export default GreenBtn;
