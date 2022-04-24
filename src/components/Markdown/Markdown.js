import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const Markdown = (props) => {
  const [md, setMd] = useState("");

  useEffect(() => {
    fetch(props.md)
      .then((response) => response.text())
      .then((text) => {
        setMd(text);
      });
  }, []);

  return <ReactMarkdown>{md}</ReactMarkdown>;
};

export default React.memo(Markdown);
