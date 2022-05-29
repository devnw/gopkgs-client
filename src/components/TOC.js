import React from "react";
import { ListItemButton, ListItemText, List } from "@mui/material";

const headers = ["h2", "h3", "h4", "h5", "h6"];

const RecursiveTOC = (children) => {
  if (typeof children === "string") {
    return [];
  }

  if (!children) {
    return [];
  }

  //   if (children?.length === 0 || !Array.isArray(children)) {
  //     return [];
  //   }

  let contents = [];
  children.forEach((child) => {
    if (!child || typeof child === "string") {
      return;
    }

    let tag = "";

    if (!child.type || !headers.includes(child.type)) {
      if (!child.props?.variant || !headers.includes(child.props?.variant)) {
        const cnodes = RecursiveTOC(child.props?.children);
        if (cnodes?.length > 0) {
          contents = [...contents, ...cnodes];
        }

        return;
      } else {
        tag = child.props?.variant;
      }
    } else {
      tag = child.type;
    }

    const id = encodeURIComponent(
      child.props.children.replace(/ /g, "-").toLowerCase()
    );

    contents = [
      ...contents,
      <ListItemButton
        key={id}
        className={`toc-item-${tag}`}
        component="a"
        href={`#${id}`}
      >
        <ListItemText primary={child.props.children} />
      </ListItemButton>,
    ];
  });

  return contents;
};

const TOC = (props) => {
  const contents = RecursiveTOC(props.children);

  return (
    <>
      {props.children.map((child, index) => {
        if (child.type === "h1" || child.props.variant === "h1") {
          return (
            <div key={index}>
              {child}
              {contents.length === 0 ? null : (
                <List className="toc-list">
                  {contents.map((child, index) => {
                    return <div key={index}>{child}</div>;
                  })}
                </List>
              )}
            </div>
          );
        }

        return <div key={index}>{child}</div>;
      })}
    </>
  );
};

export default TOC;
