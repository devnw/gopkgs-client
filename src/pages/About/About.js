import React from "react";
import data from "../../content/faq.json";
import { Container, Typography } from "@mui/material";
import "./About.scss";

import Ref from "../../components/Ref";

const About = () => {
  const aboutInfo = data.map((ele, idx) => {
    const qa = ele.questions.map((el, ix) => {
      return (
        <div key={ix}>
          <Ref variant="h3">{el.question}</Ref>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: el.answer }}
          ></Typography>{" "}
          {/* fyi - this is fine, it's static content */}
        </div>
      );
    });

    return (
      <div key={idx}>
        <Ref variant="h2" className="about-heading">
          {ele.heading}
        </Ref>
        <hr />
        {qa}
      </div>
    );
  });

  return (
    <Container sx={{ padding: "10px" }}>
      <Ref variant="h1">
        About Custom Domain Imports (aka. Vanity Imports) in Google Go
      </Ref>
      <Typography variant="body1">
        Go Packages (<code>gopkgs.org</code>) is created to be a FREE service to
        allow Go developers to setup their own custom import paths without
        having to go through the hassle of setting up a custom static site with
        meta tags, hosting, content, etc.
      </Typography>

      <div>{aboutInfo}</div>
    </Container>
  );
};

export default About;
