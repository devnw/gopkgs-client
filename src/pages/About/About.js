import React from "react";
import data from "../../content/faq.json";
import { Container, Typography } from "@mui/material";
import "./About.scss";

import Ref from "../../components/Ref";
import TOC from "../../components/TOC";

const About = () => {
  const aboutInfo = data.map((ele, idx) => {
    const qa = ele.questions.map((el, ix) => {
      return (
        <div key={ix}>
          <Ref variant="h3" sx={{ paddingBottom: "5px" }}>
            {el.question}
          </Ref>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: el.answer }}
          ></Typography>{" "}
          {/* fyi - this is fine, it's static content */}
          {!el.additionalInfo ? null : (
            <Typography
              variant="body2"
              sx={{
                padding: "1rem",
              }}
              dangerouslySetInnerHTML={{ __html: el.additionalInfo }}
            ></Typography>
          )}
        </div>
      );
    });

    return (
      <div key={idx}>
        <Ref variant="h2" className="about-heading">
          {ele.heading}
        </Ref>
        {qa}
      </div>
    );
  });

  return (
    <Container sx={{ padding: "10px" }}>
      <TOC hasToc>
        <Ref variant="h1">What is GoPkgs.org all about?</Ref>
        <Typography variant="body1">
          Go Packages (<code>gopkgs.org</code>) is a FREE service for
          simplifying developer setup of Go (golang) custom import paths.
          Normally, you would have to manually setup static hosting with proper
          meta tags, and maintain that site. This service allows you to setup
          your import paths in a simple, easy to use, repeatable, and secure
          way.
        </Typography>
        <TOC render />
        <div>{aboutInfo}</div>
      </TOC>
    </Container>
  );
};

export default About;
