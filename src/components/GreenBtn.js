import React from "react";

const GreenBtn = (props) => {
  // onClick 추가
  const { btntext, onClick } = props;
  const btnStyle = {
    background: "#0A5F6F",
    fontSize: "15px",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "5px",
    width: "120px",
    height: "36px",
  };
  return (
    // onClick 추가
    <button style={btnStyle} onClick={onClick}>
      {btntext}
    </button>
  );
};

export default GreenBtn;
