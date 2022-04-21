import React from "react";

import "./Footer.scss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>
        <img src={props.logo} className="logo" alt="logo" />
      </div>
    </footer>
  );
};

export default Footer;
