import React from "react";
import { Outlet } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";

const VodPage = () => {
  return (
    <BasicLayout>
      {/* 이 안에 소분류 (VodOnePage.js)가 출력 됩니다.) */}
      <Outlet />
    </BasicLayout>
  );
};

export default VodPage;