import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const BackButtonIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={40} height={40} fill="#F3F8FE" rx={8} />
    <Path
      stroke="#B8B8B8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m22.5 25-5-5 5-5"
    />
  </Svg>
)
export default BackButtonIcon;
