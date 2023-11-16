import React, { createElement } from "react";

const Title = ({ size, props, children }) => {
  const heading = {
    "2xl": {
      type: "h1",
      class: `my-5 uppercase font-bold text-xl md:text-5xl text-center`,
    },
    xl: {
      type: "h2",
      class: `my-5 uppercase font-bold text-xl md:text-4xl text-center`,
    },
    lg: {
      type: "h3",
      class: `my-5 uppercase font-bold text-xl md:text-3xl text-center`,
    },
    md: {
      type: "h4",
      class: `my-5 uppercase font-bold text-xl md:text-2xl text-center`,
    },
    sm: {
      type: "h5",
      class: `my-5 uppercase font-bold text-lg md:text-xl text-center`,
    },
    xs: {
      type: "h6",
      class: `my-5 uppercase font-bold text-md md:text-lg text-center`,
    },
  };
  const defaultClasses = `my-5 uppercase font-bold text-xl md:text-5xl text-center`;

  return createElement(
    heading[size].type,
    { className: heading[size].class },
    children
  );
};

export default Title;
