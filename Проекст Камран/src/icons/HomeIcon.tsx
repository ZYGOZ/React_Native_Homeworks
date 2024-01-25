import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const HomeIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      fillRule="evenodd"
      d="M.9 11.713c0-5.631.614-5.238 3.919-8.303C6.265 2.246 8.515 0 10.458 0c1.942 0 4.237 2.235 5.696 3.41 3.305 3.065 3.918 2.672 3.918 8.303C20.072 20 18.113 20 10.486 20 2.859 20 .9 20 .9 11.713Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.58 14.135h5.815"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={19.825}
        x2={0.191}
        y1={14.423}
        y2={14.169}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#176FF2" />
        <Stop offset={1} stopColor="#196EEE" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default HomeIcon;
