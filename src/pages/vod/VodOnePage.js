import React from "react";
import GreenBtn from "../../components/GreenBtn";
import { useNavigate } from "react-router-dom";

const VodOnePage = () => {
  // Page를 전환할 수있는, /@ 를 옮길 수있는 기능 (useNavigate)
  const navigate = useNavigate();
  // 버튼을 동작시키는 handleClick 함수 생성
  const handleClick = () => {
    // console.log("Click!");
    navigate("/vod/create");
  };
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      VodOnePage 입니다.
      {/* 추가하기 버튼 추가 */}
      <div>
        {/* 1. 버튼을 누른다. */}
        {/* 2. 버튼을 동작한다. */}
        <GreenBtn btntext="추가하기" onClick={handleClick} />
      </div>
    </div>
  );
};

export default VodOnePage;
