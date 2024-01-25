import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";

const XButtonIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G stroke="#BDBDBD" strokeLinecap="round" strokeWidth={2}>
      <Path d="m7.05 17.001 9.951-9.951M17.001 16.95 7.05 6.999" />
    </G>
  </Svg>
);

export default XButtonIcon;