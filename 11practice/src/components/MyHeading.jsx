import React from "react";

const MyHeading = ({ name }) => {
  return <h1>Returning-{name}Heading</h1>;
};

export const MyHeadingOne = () => <h3>headingOne</h3>;
export const MyHeadingTwo = () => <h3>headingTwo</h3>;
export const MyHeadingThree = () => <h3>headingThree</h3>;

export default MyHeading;
