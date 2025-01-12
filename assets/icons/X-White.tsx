import React from "react";
import Svg, { Path } from "react-native-svg";

const XWhite = () => {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Path
        d="M13 1L1 13M1 1L13 13"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default XWhite;
