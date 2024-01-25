import React from "react";
import Svg, { Mask, Path, G } from "react-native-svg";

const WhiteHeartIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
    style={{ // Apply styles to Svg component
      maskType: "luminance",
    }}
  >
    <Mask
      id="a"
      width={15}
      height={15}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M.5.767h14.396v13.714H.5V.767Z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#B8B8B8"
        fillRule="evenodd"
        d="M1.784 7.181c.986 3.068 4.88 5.548 5.916 6.162 1.039-.62 4.962-3.128 5.916-6.159.627-1.959.045-4.44-2.266-5.185-1.12-.36-2.425-.14-3.327.557a.527.527 0 0 1-.64.004 3.68 3.68 0 0 0-3.339-.561c-2.307.744-2.887 3.225-2.26 5.182Zm5.915 7.299a.526.526 0 0 1-.252-.064c-.22-.12-5.405-2.978-6.669-6.912-.793-2.477.09-5.59 2.941-6.509a4.732 4.732 0 0 1 3.978.502C8.841.775 10.36.575 11.672.995c2.854.92 3.74 4.032 2.948 6.508-1.223 3.89-6.446 6.79-6.667 6.912a.522.522 0 0 1-.254.065Z"
        clipRule="evenodd"
      />
    </G>
    <Path
      fill="#B8B8B8"
      fillRule="evenodd"
      d="M11.858 6.13a.527.527 0 0 1-.525-.485 1.423 1.423 0 0 0-.984-1.244.528.528 0 0 1 .324-1.004 2.48 2.48 0 0 1 1.712 2.162.527.527 0 0 1-.527.57Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default WhiteHeartIcon;
