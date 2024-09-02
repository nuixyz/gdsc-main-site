import "./info.css";
import React from "react";

const Info = () => {
  return (
    <>
      <div className="wrapper">
        <img
          src="/dev-logo.jpeg"
          alt="Dev Logo"
          className="dev-logo
          "
        />
        <div className="gdsc">Google Developer Students Club</div>
        <div className="uni">Tezpur University</div>
      </div>
    </>
  );
};

export default Info;
