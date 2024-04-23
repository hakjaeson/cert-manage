import React from "react";
import GreenBtn from "../../components/GreenBtn";

const VodOnePage = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      VodOnePage 입니다.
      <div>
        <GreenBtn btntext="실명인증" />
      </div>
      <div>
        <GreenBtn btntext="비밀번호수정" />
      </div>
      <div>
        <GreenBtn btntext="우편번호" />
      </div>
    </div>
  );
};

export default VodOnePage;
