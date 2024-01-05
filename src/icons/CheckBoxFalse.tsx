import * as React from "react";
import Svg, { SvgProps, Rect } from "react-native-svg";
const CheckBoxFalse = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Rect width={23} height={23} x={0.5} y={0.5} fill="#fff" rx={2.5} />
    <Rect width={23} height={23} x={0.5} y={0.5} stroke="#4A3780" rx={2.5} />
  </Svg>
);
export default CheckBoxFalse;
