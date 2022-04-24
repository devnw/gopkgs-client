import React from "react";

import "./Footer.scss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>
        <a href="https://devnw.com">
          <img src={props.logo} className="logo" alt="logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
