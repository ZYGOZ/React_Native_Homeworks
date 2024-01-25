import * as React from "react";
import Svg, { Path } from "react-native-svg";

const StarIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#D8D138"
      d="m8 11.333-4 2 1-4L2 6l4.333-.333L8 2l1.667 3.667L14 6l-3 3.333 1 4-4-2Z"
    />
    <Path
      fill="#F8D675"
      d="m8 11.333-4 2 1-4L2 6l4.333-.333L8 2l1.667 3.667L14 6l-3 3.333 1 4-4-2Z"
    />
  </Svg>
)
export default StarIcon;
