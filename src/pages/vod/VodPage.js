import React from "react";
import { Outlet } from "react-router-dom";

const VodPage = () => {
  return (
    <div>
      {/* 이 안에 소분류 (VodOnePage.js)가 출력 됩니다.) */}
      <Outlet />
    </div>
  );
};

export default VodPage;
