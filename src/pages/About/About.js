import React from "react";
import data from "../../content/faq.json";
import { Container } from "@mui/material";
import "./About.scss";

const About = () => {

  const aboutInfo = data.map((ele, idx) => {
    const qa = ele.questions.map((el, ix) => {
      return (
        <div key={ix}>
          <h3>{el.question}</h3>
          <p dangerouslySetInnerHTML={{__html: el.answer}}></p>  {/* fyi - this is fine, it's static content */}
        </div>
      );
    });

    return (
      <div key={idx}>
        <h2 className='about-heading'>{ele.heading}</h2>
        {qa}
      </div>
    );
  })

  return (
    <Container sx={{ padding: "10px" }}>
      <h1>
        About Vanity Import Paths in Google Go
      </h1>
      <p>
        Go Packages (<code>gopkgs.org</code>) is created to be a FREE service to allow Go developers to setup their own vanity import paths without having to go through the hassle of setting up a custom site with meta tags, hosting, content, etc.
      </p>

      <div>
        {aboutInfo}
      </div>



    </Container>
  );
};

export default About;
