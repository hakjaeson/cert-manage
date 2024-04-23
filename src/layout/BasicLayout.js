import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const BasicLayout = ({ children }) => {
  return (
    <div>
      {/* Header Layout division */}
      <div>
        <Header />
      </div>
      {/* Main Layout division */}
      <div>{children}</div>
      {/* Footer Layout division */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BasicLayout;
